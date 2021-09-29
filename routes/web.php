<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChatController;



Route::get('/', function () {
    return view('welcome');
});

Route::get('/chat', [ChatController::class,'Chat']);
Route::post('send', [ChatController::class,'send']);

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
