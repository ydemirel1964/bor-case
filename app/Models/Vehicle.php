<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;

    protected $table ='vehicles';

    protected $fillable = [
        'model',
        'year',
        'license_plate',
        'color',
        'date_of_purchase',
        'employee_id',
    ];
}
