<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('employees')->insert([
            [
                'name' => 'Employee1',
                'job_title' => 'Job1',
                'phone' => '1234567890',
                'date_of_hire' => '2021-01-01',
                'date_of_birth' => '2021-01-01',
                'address' => 'Address1',
                'email' => 'employee1@gmail.com'
            ],
            [
                'name' => 'Employee2',
                'job_title' => 'Job2',
                'phone' => '1234567890',
                'date_of_hire' => '2021-01-01',
                'date_of_birth' => '2021-01-01',
                'address' => 'Address2',
                'email' => 'employee2@gmail.com'
            ],
            [
                'name' => 'Employee3',
                'job_title' => 'Job3',
                'phone' => '1234567890',
                'date_of_hire' => '2021-01-01',
                'date_of_birth' => '2021-01-01',
                'address' => 'Address3',
                'email' => 'employee3@gmail.com'
            ],
            [
                'name' => 'Employee4',
                'job_title' => 'Job4',
                'phone' => '1234567890',
                'date_of_hire' => '2021-01-01',
                'date_of_birth' => '2021-01-01',
                'address' => 'Address4',
                'email' => 'employee4@gmail.com'
            ],
            [
                'name' => 'Employee5',
                'job_title' => 'Job5',
                'phone' => '1234567890',
                'date_of_hire' => '2021-01-01',
                'date_of_birth' => '2021-01-01',
                'address' => 'Address5',
                'email' => 'employee5@gmail.com'
            ],
            [
                'name' => 'Employee6',
                'job_title' => 'Job6',
                'phone' => '1234567890',
                'date_of_hire' => '2021-01-01',
                'date_of_birth' => '2021-01-01',
                'address' => 'Address6',
                'email' => 'employee6@gmail.com'
            ],
            [
                'name' => 'Employee7',
                'job_title' => 'Job7',
                'phone' => '1234567890',
                'date_of_hire' => '2021-01-01',
                'date_of_birth' => '2021-01-01',
                'address' => 'Address7',
                'email' => 'employee7@gmail.com'
            ],
            [
                'name' => 'Employee8',
                'job_title' => 'Job8',
                'phone' => '1234567890',
                'date_of_hire' => '2021-01-01',
                'date_of_birth' => '2021-01-01',
                'address' => 'Address8',
                'email' => 'employee8@gmail.com'
            ],
            [
                'name' => 'Employee9',
                'job_title' => 'Job9',
                'phone' => '1234567890',
                'date_of_hire' => '2021-01-01',
                'date_of_birth' => '2021-01-01',
                'address' => 'Address9',
                'email' => 'employee9@gmail.com'
            ],
            [
                'name' => 'Employee10',
                'job_title' => 'Job10',
                'phone' => '1234567890',
                'date_of_hire' => '2021-01-01',
                'date_of_birth' => '2021-01-01',
                'address' => 'Address10',
                'email' => 'employee10@gmail.com'
            ]
        ]);
    }
}
