<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Product extends Model
{
    protected $fillable = [
        'name',
        'price',
        'stock',
        'description',
        'image',
        'seller_id',
        'status',
    ];

    // Relación: un producto pertenece a un vendedor (usuario)
    public function seller()
    {
        return $this->belongsTo(User::class, 'seller_id');
    }
}
