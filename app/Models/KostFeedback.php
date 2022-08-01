<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KostFeedback extends Model
{
    use HasFactory;

    protected $fillable = ["kost_id", "name", "feedback", "stars"];
}
