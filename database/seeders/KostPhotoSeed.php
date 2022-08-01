<?php

namespace Database\Seeders;

use App\Models\KostPhoto;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class KostPhotoSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [];

        for ($i = 3; $i <= 6; $i++) {
            array_push($data, [
                "kost_id" => $i,
                "image_name" => "kos1.jpg",
                "priority" => 1,
                "created_at" => Carbon::now(),
                "updated_at" => Carbon::now(),
            ], [
                "kost_id" => $i,
                "image_name" => "kos2.jpg",
                "priority" => 2,
                "created_at" => Carbon::now(),
                "updated_at" => Carbon::now(),
            ], [
                "kost_id" => $i,
                "image_name" => "kos3.jpg",
                "priority" => 3,
                "created_at" => Carbon::now(),
                "updated_at" => Carbon::now(),
            ]);
        }

        KostPhoto::insert($data);
    }
}
