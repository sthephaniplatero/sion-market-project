<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SellerMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if (auth()->user()->role !== 'seller') {
            return redirect()->route('buyer.dashboard');
        }

        return $next($request);
    }
}
