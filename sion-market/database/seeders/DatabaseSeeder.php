<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Crear o actualizar usuario de prueba
        User::updateOrCreate(
            ['email' => 'test2@example.com'], // criterio único
            [
                'name' => 'Test User',
                'password' => bcrypt('password123'), // puedes usar cualquier contraseña de prueba
                'role' => 'buyer', // rol por defecto
                'whatsapp_number' => '00000000', // opcional
            ]
        );

        // Llamar al AdminSeeder para crear o actualizar el admin
        $this->call([
            AdminSeeder::class,
        ]);
    }
}
