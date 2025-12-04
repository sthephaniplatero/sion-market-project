<?php

use App\Http\Controllers\SellerController;
use App\Http\Controllers\SellerProductController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Página principal
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    $products = \App\Models\Product::where('status', 'active')
        ->where('stock', '>', 0)
        ->limit(8)
        ->get();

    return inertia('Welcome', [
        'auth' => ['user' => auth()->user()],
        'products' => $products,
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');


/*
|--------------------------------------------------------------------------
| Tienda 
|--------------------------------------------------------------------------
*/

Route::get('/shop/{id}', [ShopController::class, 'show'])->name('shop.show');
Route::get('/shop', [ShopController::class, 'index'])->name('shop.index');



/*
|--------------------------------------------------------------------------
| Dashboard según rol
|--------------------------------------------------------------------------
*/

Route::get('/dashboard', function () {
    $user = auth()->user();

    if ($user->role === 'admin') {
        return redirect()->route('admin.dashboard');
    }

    if ($user->role === 'seller') {
        return redirect()->route('seller.dashboard');
    }

    return redirect()->route('buyer.dashboard');

})->middleware(['auth', 'verified'])->name('dashboard');


/*
|--------------------------------------------------------------------------
| Admin 
|--------------------------------------------------------------------------
*/

Route::middleware(['auth', 'admin'])->group(function () {

    Route::get('/admin/dashboard', [AdminController::class, 'dashboard'])
        ->name('admin.dashboard');
});


/*
|--------------------------------------------------------------------------
| Seller (CRUD de productos del vendedor)
|--------------------------------------------------------------------------
*/

Route::middleware(['auth', 'seller'])->group(function () {

    Route::get('/seller/dashboard', [SellerController::class, 'dashboard'])
        ->name('seller.dashboard');

    Route::get('/seller/products', [SellerProductController::class, 'index'])
        ->name('seller.products.index');

    Route::get('/seller/products/create', [SellerProductController::class, 'create'])
        ->name('seller.products.create');

    Route::post('/seller/products', [SellerProductController::class, 'store'])
        ->name('seller.products.store');

    Route::get('/seller/products/{id}/edit', [SellerProductController::class, 'edit'])
        ->name('seller.products.edit');

    Route::put('/seller/products/{id}', [SellerProductController::class, 'update'])
        ->name('seller.products.update');

    Route::delete('/seller/products/{id}', [SellerProductController::class, 'destroy'])
        ->name('seller.products.destroy');
});


/*
|--------------------------------------------------------------------------
| Buyer
|--------------------------------------------------------------------------
*/

Route::middleware(['auth', 'buyer'])->group(function () {
    Route::get('/buyer/dashboard', function () {
        return Inertia::render('Buyer/Dashboard');
    })->name('buyer.dashboard');
});


/*
|--------------------------------------------------------------------------
| Perfil
|--------------------------------------------------------------------------
*/

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


/*
|--------------------------------------------------------------------------
| Auth
|--------------------------------------------------------------------------
*/

require __DIR__.'/auth.php';
