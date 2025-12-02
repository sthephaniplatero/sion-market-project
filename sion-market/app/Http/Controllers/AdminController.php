<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User; 
use App\Models\Product; 
use Illuminate\Support\Facades\DB;

/**
 * Controlador para el Dashboard del Administrador.
 * Gestiona la lógica para obtener estadísticas y mostrarlas en el panel.
 */
class AdminController extends Controller
{
    /**
     * Muestra el dashboard del administrador con todas las estadísticas.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        // 1. Estadísticas de Usuarios
        $totalSellers = User::where('role', 'seller')->count();

        // Últimos 5 sellers registrados
        $latestSellers = User::where('role', 'seller')
            ->latest()
            ->limit(5)
            ->get(['id', 'name', 'email']);

        // 2. Estadísticas de Productos (asumiendo que hay un campo 'is_active' booleano)
        $totalProducts = Product::count();
        
        $activeProducts = Product::where('is_active', true)->count();
        
        // Calculamos los inactivos restando los activos del total, o consultando directamente
        $inactiveProducts = $totalProducts - $activeProducts;
        
        // Obtenemos los últimos 5 productos agregados, seleccionando solo los campos necesarios.
        $latestProducts = Product::latest()
            ->limit(5)
            ->get(['id', 'name']);

        $activePercentage = $totalProducts ? round(($activeProducts / $totalProducts) * 100, 2) : 0;

        // 3. Compilamos el objeto de estadísticas para pasarlo al frontend
        $stats = [
            'totalSellers' => number_format($totalSellers),
            'totalProducts' => number_format($totalProducts),
            'activeProducts' => number_format($activeProducts),
            'inactiveProducts' => number_format($inactiveProducts),
            'latestSellers' => $latestSellers,
            'latestProducts' => $latestProducts,
        ];

        // 4. Retornamos la vista Inertia, pasando el objeto stats
        return Inertia::render('Admin/Dashboard', [
            'stats' => $stats,
        ]);
    }
}