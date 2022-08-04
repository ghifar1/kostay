<?php

namespace Database\Seeders;

use App\Models\Kost;
use App\Models\KostFeedback;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class KostFeedbackSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $kosts = Kost::all();
        $data = [];

       foreach ($kosts as $kost) {
        array_push($data, [
                    "kost_id" => $kost->id,
                    "name" => "Ahmad Muaz",
                    "feedback" => "kerenn dahh",
                    "stars" => 5,
                    "created_at" => Carbon::now(),
                    "updated_at" => Carbon::now(),
                ], [
                    "kost_id" => $kost->id,
                    "name" => "Faiz Maulana",
                    "feedback" => "Syiip mah kalau saya",
                    "stars" => 5,
                    "created_at" => Carbon::now(),
                    "updated_at" => Carbon::now(),
                ], [
                    "kost_id" => $kost->id,
                    "name" => "Shella",
                    "feedback" => "Kurang di makanan aja ga dapet nich",
                    "stars" => 4,
                    "created_at" => Carbon::now(),
                    "updated_at" => Carbon::now(),
                ]);
       }


        // for ($i = 3; $i <= 6; $i++) {
        //     array_push($data, [
        //         "kost_id" => $i,
        //         "name" => "Ahmad Muaz",
        //         "feedback" => "kerenn dahh",
        //         "stars" => 5,
        //         "created_at" => Carbon::now(),
        //         "updated_at" => Carbon::now(),
        //     ], [
        //         "kost_id" => $i,
        //         "name" => "Faiz Maulana",
        //         "feedback" => "Syiip mah kalau saya",
        //         "stars" => 5,
        //         "created_at" => Carbon::now(),
        //         "updated_at" => Carbon::now(),
        //     ], [
        //         "kost_id" => $i,
        //         "name" => "Shella",
        //         "feedback" => "Kurang di makanan aja ga dapet nich",
        //         "stars" => 4,
        //         "created_at" => Carbon::now(),
        //         "updated_at" => Carbon::now(),
        //     ]);
        // }

        KostFeedback::insert($data);
    }
}
