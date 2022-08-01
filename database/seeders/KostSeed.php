<?php

namespace Database\Seeders;

use App\Models\Kost;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class KostSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                "name" => "Kost Mang Windah",
                "position" => "Mampang",
                "address" => "Jl. Mampang Prapatan No.70",
                "facilities" => "Wifi,AC,Kasur,Meja",
                "price" => 1500000,
                "price_display" => "bulanan",
                "minimum_rent" => "bulanan",
                "available_rent" => '["bulanan", "triwulan", "semester", "tahunan"]',
                "gender" => "man",
                "details" => "Luas kamar: 2 x 3 Meter. Fasilitas: WiFi, AC, kamar mandi luar, dapur bersama, kasur, lemari, meja belajar. Ket: Harga belum termasuk air dan listrik.",
                "created_at" => Carbon::now(),
                "updated_at" => Carbon::now(),
            ],
            [
                "name" => "Kost Bedul",
                "position" => "Tegal Parang",
                "address" => "Jl. Gang Rahmat No.55",
                "facilities" => "Wifi,Kasur,Meja",
                "price" => 700000,
                "price_display" => "bulanan",
                "minimum_rent" => "bulanan",
                "available_rent" => '["bulanan", "triwulan", "semester", "tahunan"]',
                "gender" => "man",
                "details" => "Luas kamar: 2 x 3 Meter. Fasilitas: WiFi, AC, kamar mandi luar, dapur bersama, kasur, lemari, meja belajar. Ket: Harga belum termasuk air dan listrik.",
                "created_at" => Carbon::now(),
                "updated_at" => Carbon::now(),
            ],
            [
                "name" => "Kost Shella",
                "position" => "Bekasi",
                "address" => "Jl. Bekasi Timur No.12",
                "facilities" => "Wifi,AC,Kolam Renang",
                "price" => 2000000,
                "price_display" => "bulanan",
                "minimum_rent" => "bulanan",
                "available_rent" => '["bulanan", "triwulan", "semester", "tahunan"]',
                "gender" => "woman",
                "details" => "Luas kamar: 2 x 3 Meter. Fasilitas: WiFi, AC, kamar mandi luar, dapur bersama, kasur, lemari, meja belajar. Ket: Harga belum termasuk air dan listrik.",
                "created_at" => Carbon::now(),
                "updated_at" => Carbon::now(),
            ],
            [
                "name" => "Rumah Singgah",
                "position" => "Bali",
                "address" => "Jl. Papandayan No.5",
                "facilities" => "Wifi,Kasur",
                "price" => 300000,
                "price_display" => "harian",
                "minimum_rent" => "harian",
                "available_rent" => '["harian","bulanan"]',
                "gender" => "unisex",
                "details" => "Mari berlibur ke bali",
                "created_at" => Carbon::now(),
                "updated_at" => Carbon::now(),
            ]
        ];

        Kost::insert($data);
    }
}
