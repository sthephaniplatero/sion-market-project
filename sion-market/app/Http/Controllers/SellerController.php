<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SellerController extends Controller
{
    public function dashboard()
    {
        $sellerId = Auth::id();

        // 1. CONSULTA: Obtenemos la colección de productos con stock bajo (<= 5)
        $lowStockProducts = Product::where('seller_id', $sellerId)
            // Asegúrate de que esta condición sea la misma que usa tu sistema
            ->where('stock', '<=', 5) 
            // Seleccionamos id, name y stock, ya que React solo usa estos campos
            ->get(['id', 'name', 'stock']); 

        $stats = [
            'totalActive' => Product::where('seller_id', $sellerId)->where('status', 'active')->count(),
            'totalInactive' => Product::where('seller_id', $sellerId)->where('status', 'inactive')->count(),
            
            // 2. CONTADOR: Usamos el conteo de la colección recién creada
            'lowStock' => $lowStockProducts->count(),
            
            // 3. LISTA: Incluimos la colección en las estadísticas
            'lowStockProducts' => $lowStockProducts, // ¡ESTO FALTABA!
            
            'latestProducts' => Product::where('seller_id', $sellerId)->latest()->take(5)->get(),
        ];

        return Inertia::render('Seller/Dashboard', [
            'stats' => $stats,
        ]);
    }
}