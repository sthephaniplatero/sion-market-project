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

        $stats = [
            'totalActive' => Product::where('seller_id', $sellerId)->where('status', 'active')->count(),
            'totalInactive' => Product::where('seller_id', $sellerId)->where('status', 'inactive')->count(),
            'lowStock' => Product::where('seller_id', $sellerId)->where('stock', '<=', 5)->count(),
            'latestProducts' => Product::where('seller_id', $sellerId)->latest()->take(5)->get(),
        ];

        return Inertia::render('Seller/Dashboard', [
            'stats' => $stats,
        ]);
    }
}
