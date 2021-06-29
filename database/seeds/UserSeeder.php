<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Webpatser\Uuid\Uuid;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'firstName' => 'Admin',
            'lastName' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('1234'),
            'employeeId' => Uuid::generate(4),
            'photo' => '',
            'active' => 1,
            'branch' => 0,
            'parent_id' => 0,
            'role' => 2
        ]);
    }
}
