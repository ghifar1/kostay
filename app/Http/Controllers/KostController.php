<?php

namespace App\Http\Controllers;

use App\Models\Kost;
use Illuminate\Http\Request;

class KostController extends Controller
{
    public function index()
    {
        $result = Kost::with('Feedback', 'Photos')->get();
        return response()->json($result, 200);
    }

    public function show($id)
    {
        $result = Kost::with('Feedback', 'Photos')->where('id', $id)->first();
        return response()->json($result, 200);
    }
}
