<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request; // ¡Asegúrate de agregar esto!

class ShopController extends Controller
{
    // Mostrar todos los productos activos (visible para compradores)
    public function index(Request $request) // <-- Agregar $request aquí
    {
        // 1. Obtener los parámetros de la URL enviados por Inertia
        $sort = $request->input('sort');
        $search = $request->input('search');

        // 2. Iniciar la consulta base
        $query = Product::where('status', 'active')
            ->with('seller'); // Cargar vendedor

        // 3. Lógica de Filtrado por Búsqueda (Search)
        if ($search) {
            $query->where(function ($q) use ($search) {
                // Buscar en el nombre o descripción del producto
                $q->where('name', 'like', '%' . $search . '%')
                  ->orWhere('description', 'like', '%' . $search . '%');
            });
        }

        // 4. Lógica de Ordenación (Sort)
        switch ($sort) {
            case 'price_asc':
                $query->orderBy('price', 'asc');
                break;
            case 'price_desc':
                $query->orderBy('price', 'desc');
                break;
            case 'latest':
                $query->latest(); // Ordena por created_at descendente
                break;
            default:
                // Orden por defecto si no se selecciona ninguna opción o si se busca
                $query->latest();
                break;
        }

        // 5. Ejecutar la consulta y obtener los productos
        $products = $query->get();

        // 6. Devolver la respuesta a Inertia
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