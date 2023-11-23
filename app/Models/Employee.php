<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $table ='employees';
    protected $fillable = [
        'name',
        'job_title',
        'phone',
        'date_of_hire',
        'date_of_birth',
        'address',
        'email',
    ];

}
