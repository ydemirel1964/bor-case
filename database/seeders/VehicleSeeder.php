<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VehicleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('vehicles')->insert([
            [
                'model' => 'Model1',
                'year' => '2021',
                'license_plate' => 'ABC123',
                'color' => 'Red',
                'date_of_purchase' => '2021-01-01',
                'employee_id' => '1',
            ]
        ]);

        DB::table('vehicles')->insert([
            [
                'model' => 'Model2',
                'year' => '2021',
                'license_plate' => 'ABC123',
                'color' => 'Red',
                'date_of_purchase' => '2021-01-01',
                'employee_id' => '2',
            ]
        ]);

        DB::table('vehicles')->insert([
            [
                'model' => 'Model3',
                'year' => '2021',
                'license_plate' => 'ABC123',
                'color' => 'Red',
                'date_of_purchase' => '2021-01-01',
                'employee_id' => '3',
            ]
        ]);

        DB::table('vehicles')->insert([
            [
                'model' => 'Model4',
                'year' => '2021',
                'license_plate' => 'ABC123',
                'color' => 'Red',
                'date_of_purchase' => '2021-01-01',
                'employee_id' => '4',
            ]
        ]);



    }
}
