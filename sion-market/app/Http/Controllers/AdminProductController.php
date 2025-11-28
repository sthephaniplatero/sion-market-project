<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\User;
use Inertia\Inertia;

class AdminProductController extends Controller
{
    // LISTA TODOS LOS PRODUCTOS DEL MARKETPLACE
    public function index()
    {
        $products = Product::with('seller')
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('Admin/Products/Index', [
            'products' => $products,
        ]);
    }

    // VISTA PARA CREAR PRODUCTO
    public function create()
    {
        return Inertia::render('Admin/Products/Create');
    }

    // GUARDAR PRODUCTO NUEVO
    public function store(Request $request)
    {
        $request->validate([
            'seller_id' => 'required|exists:users,id',
            'name' => 'required',
            'price' => 'required|numeric',
            'description' => 'required',
            'stock' => 'required|numeric',
            'image' => 'nullable|image|max:2048',
        ]);

        $imagePath = null;

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('products', 'public');
        }

        Product::create([
            'seller_id' => $request->seller_id,
            'name' => $request->name,
            'price' => $request->price,
            'description' => $request->description,
            'stock' => $request->stock,
            'status' => 'active',
            'image' => $imagePath ? "/storage/" . $imagePath : null,
        ]);

        return redirect()->route('admin.products.index')
            ->with('success', 'Producto creado por el administrador');
    }

    // EDITAR PRODUCTO
    public function edit($id)
    {
        $product = Product::with('seller')->findOrFail($id);

        return Inertia::render('Admin/Products/Edit', [
            'product' => $product
        ]);
    }

    // ACTUALIZAR PRODUCTO
    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        $request->validate([
            'seller_id' => 'required|exists:users,id',
            'name' => 'required',
            'price' => 'required|numeric',
            'description' => 'required',
            'stock' => 'required|numeric',
            'status' => 'required|in:active,inactive',
            'image' => 'nullable|image|max:2048',
        ]);

        $data = $request->only([
            'seller_id', 'name', 'price', 'description', 'stock', 'status'
        ]);

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('products', 'public');
            $data['image'] = "/storage/" . $imagePath;
        }

        $product->update($data);

        return redirect()->route('admin.products.index')
            ->with('success', 'Producto actualizado');
    }

    // CAMBIAR ESTADO: ACTIVO / INACTIVO
    public function toggleStatus($id)
    {
        $product = Product::findOrFail($id);

        $product->status = $product->status === 'active' ? 'inactive' : 'active';
        $product->save();

        return back()->with('success', 'Estado actualizado');
    }

    // ELIMINAR PRODUCTO
    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        return back()->with('success', 'Producto eliminado por el administrador');
    }
}
