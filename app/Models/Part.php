<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

// https://github.com/mehradsadeghi/laravel-filter-querystring
use Mehradsadeghi\FilterQueryString\FilterQueryString;

class Part extends Model
{
    use HasFactory, FilterQueryString;
    
    protected $filters = ['make', 'model', 'type'];
}
