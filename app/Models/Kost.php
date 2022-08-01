<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kost extends Model
{
    use HasFactory;

    protected $fillable = [
        "name", "position", "address", "facilities", "price",
        "price_display", "minimum_rent", "available_rent", "gender",
        "details"
    ];

    public function Feedback()
    {
        return $this->hasMany(KostFeedback::class);
    }

    public function Photos()
    {
        return $this->hasMany(KostPhoto::class);
    }
}
