<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\User; // si los vendedores son usuarios
use Inertia\Inertia;

class AdminController extends Controller
{
    public function dashboard()
    {
        // Estadísticas generales del marketplace
        $stats = [
            // Cantidad total de vendedores (si tienes un rol 'seller')
            'totalSellers' => User::where('role', 'seller')->count(),

            // Productos totales
            'totalProducts' => Product::count(),

            // Productos activos
            'activeProducts' => Product::where('status', 'active')->count(),

            // Productos inactivos
            'inactiveProducts' => Product::where('status', 'inactive')->count(),

            // Productos con bajo stock
            'lowStock' => Product::where('stock', '<=', 5)->count(),

            // Últimos 5 productos creados
            'latestProducts' => Product::latest()->take(5)->get(),

            // Últimos 5 vendedores registrados
            'latestSellers' => User::where('role', 'seller')
                ->latest()
                ->take(5)
                ->get(),
        ];

        return Inertia::render('Admin/Dashboard', [
            'stats' => $stats,
        ]);
    }
}
