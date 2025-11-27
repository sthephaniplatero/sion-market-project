<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Product;
use Inertia\Inertia;

class SellerProductController extends Controller
{
    public function index()
    {
        $sellerId = Auth::id();

        $products = Product::where('seller_id', $sellerId)
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('Seller/Products/Index', [
            'products' => $products,
        ]);
    }

    public function create()
    {
        return Inertia::render('Seller/Products/Create');
    }

    public function store(Request $request)
    {
        $sellerId = auth()->id();

        $request->validate([
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
            'seller_id' => $sellerId,
            'name' => $request->name,
            'price' => $request->price,
            'description' => $request->description,
            'stock' => $request->stock,
            'status' => 'active',
            'image' => $imagePath ? "/storage/" . $imagePath : null,
        ]);

        return redirect()->route('seller.products.index')->with('success', 'Producto creado');
    }

    public function edit($id)
{
    $product = Product::where('seller_id', auth()->id())->findOrFail($id);

    return Inertia::render('Seller/Products/Edit', [
        'product' => $product
    ]);
}


    public function update(Request $request, $id)
{
    $product = Product::where('seller_id', auth()->id())->findOrFail($id);

    $request->validate([
        'name' => 'required',
        'price' => 'required|numeric',
        'description' => 'required',
        'stock' => 'required|numeric',
        'image' => 'nullable|image|max:2048',
    ]);

    $data = $request->only(['name', 'price', 'description', 'stock']);

    if ($request->hasFile('image')) {
        $imagePath = $request->file('image')->store('products', 'public');
        $data['image'] = "/storage/" . $imagePath;
    }

    $product->update($data);

    return redirect()->route('seller.products.index')->with('success', 'Producto actualizado');
}

   public function destroy($id)
{
    $product = Product::where('seller_id', auth()->id())->findOrFail($id);

    $product->delete();

    return back()->with('success', 'Producto eliminado');
}

}
