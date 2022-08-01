<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KostPhoto extends Model
{
    use HasFactory;

    protected $fillable = ["kost_id", "image_name", "priority"];
}
