<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'price',
        'stock',
        'sold'
    ];
    protected $attributes = [
        'sold' => false,
    ];

    protected $casts = [
        'sold' => 'boolean'
    ];

    public function category() {
        return $this->belongsTo(Category::class);
    }
    public function userProducts() {
        return $this->belongsToMany(User::class);
    }
    public function cartProducts() {
        return $this->belongsToMany(User::class, "cart", "ProductId");
    }
}
