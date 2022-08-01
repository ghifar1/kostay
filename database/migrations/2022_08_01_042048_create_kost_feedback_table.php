<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKostFeedbackTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kost_feedback', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('kost_id');
            $table->foreign('kost_id')->references('id')->on('kosts');
            $table->string('name');
            $table->string('feedback');
            $table->integer('stars');
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
        Schema::dropIfExists('kost_feedback');
    }
}
