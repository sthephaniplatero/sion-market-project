<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User; 
use App\Models\Product; 
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    /**
     * Muestra el dashboard del administrador con estadísticas.
     */
    public function index()
    {
        // 1. Estadísticas de Usuarios
        $totalSellers = User::where('role', 'seller')->count();

        $latestSellers = User::where('role', 'seller')
            ->latest()
            ->limit(5)
            ->get(['id', 'name', 'email']);

        // 2. Estadísticas de Productos
        $totalProducts = Product::count();
        $activeProducts = Product::where('status', 'active')->count();
        $inactiveProducts = $totalProducts - $activeProducts;

        $latestProducts = Product::latest()
            ->limit(5)
            ->get(['id', 'name']);

        // Compilar estadísticas
        $stats = [
            'totalSellers' => number_format($totalSellers),
            'totalProducts' => number_format($totalProducts),
            'activeProducts' => number_format($activeProducts),
            'inactiveProducts' => number_format($inactiveProducts),
            'latestSellers' => $latestSellers,
            'latestProducts' => $latestProducts,
        ];

        return Inertia::render('Admin/Dashboard', [
            'stats' => $stats,
        ]);
    }

    /**
     * Alias para rutas que usan 'dashboard'
     */
    public function dashboard()
    {
        // Simplemente reutiliza index()
        return $this->index();
    }
}
