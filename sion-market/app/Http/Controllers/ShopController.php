<?php

namespace App\Http\Controllers;

use App\Models\Product;

class ShopController extends Controller
{
    // Mostrar todos los productos activos (visible para compradores)
    public function index()
    {
        $products = Product::where('status', 'active')
            ->with('seller') // ← cargar vendedor para WhatsApp
            ->latest()
            ->get();

        return inertia('Shop/Index', [
            'products' => $products,
        ]);
    }

    // Mostrar un solo producto
    public function show($id)
    {
        $product = Product::with('seller')->findOrFail($id);

        return inertia('Shop/Show', [
            'product' => $product,
        ]);
    }
}
