<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kosts', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('position');
            $table->string('address');
            $table->string('facilities');
            $table->string('price');
            $table->enum('price_display', ['harian', 'mingguan', 'bulanan', 'triwulan', 'semester', 'tahunan']);
            $table->enum('minimum_rent', ['harian', 'mingguan', 'bulanan', 'triwulan', 'semester', 'tahunan']);
            $table->json('available_rent');
            $table->enum('gender', ['man', 'woman', 'unisex']);
            $table->longText('details');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('kosts');
    }
}
