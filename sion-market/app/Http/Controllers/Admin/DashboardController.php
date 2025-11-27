<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        dd('ESTOY EN EL DASHBOARD');
        // Contar vendedores activos
        $activeSellers = User::where('role', 'seller')->where('status', 'active')->count();

        // Contar clientes registrados
        $totalClients = User::where('role', 'client')->count();

        // Contar productos activos (opcional)
        $totalProducts = Product::where('status', 'active')->count();

        // Cargar vendedores para la tabla
        $sellers = User::with('products')
            ->where('role', 'seller')
            ->get()
            ->map(function ($seller) {
                return [
                    'id' => $seller->id,
                    'name' => $seller->name,
                    'whatsapp' => $seller->whatsapp_number,
                    'status' => $seller->status,
                    'activeProducts' => $seller->products->where('status', 'active')->count(),
                ];
            });

        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'activeSellers' => $activeSellers,
                'totalClients' => $totalClients,
                'pendingContacts' => 0, // luego se puede reemplazar
            ],
            'users' => [
                'sellers' => $sellers,
            ],
            'contacts' => [], // luego puedes cargar de la tabla contacts si existe
            'notifications' => [],
        ]);
    }
}
