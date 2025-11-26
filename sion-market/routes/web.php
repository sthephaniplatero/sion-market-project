<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Página principal
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Dashboard general: redirige según rol
Route::get('/dashboard', function () {
    $user = auth()->user();

    if ($user->role === 'admin') {
        return redirect()->route('admin.dashboard');
    }

    if ($user->role === 'seller') {
        return redirect()->route('seller.dashboard');
    }

    return redirect()->route('buyer.dashboard'); // buyer por defecto
})->middleware(['auth', 'verified'])->name('dashboard');


// =========================
//      ADMIN DASHBOARD
// =========================
Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('admin.dashboard');
});


// =========================
//      SELLER DASHBOARD
// =========================
Route::middleware(['auth', 'seller'])->group(function () {
    Route::get('/seller/dashboard', function () {
        return Inertia::render('Seller/Dashboard');
    })->name('seller.dashboard');
});


// =========================
//      BUYER DASHBOARD
// =========================
Route::middleware(['auth', 'buyer'])->group(function () {
    Route::get('/buyer/dashboard', function () {
        return Inertia::render('Buyer/Dashboard');
    })->name('buyer.dashboard');
});


// Perfil de usuario
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Rutas de autenticación (login/register/logout)
require __DIR__.'/auth.php';
