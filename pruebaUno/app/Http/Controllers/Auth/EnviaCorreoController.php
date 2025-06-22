<?php

namespace App\Http\Controllers\Auth;
use Illuminate\Support\Facades\Mail;
use App\Mail\VerificationCodeMail;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EnviaCorreoController extends Controller
{
    public function sendVerificationCode(Request $request)
    {
        // Validar que se proporcionó un correo electrónico
        $request->validate([
            'email' => 'required|email'
        ]);

        // Generar código de 6 dígitos
        $verificationCode = Str::random(6); // Genera string alfanumérico
        $verificationCode = strtoupper($verificationCode); // Opcional: convertir a mayúsculas
        $verificationCode = substr($verificationCode, 0, 6); // Asegurar 6 caracteres

        // Enviar el correo
        try {
            Mail::to($request->email)->send(new VerificationCodeMail($verificationCode));
            
            return response()->json([
                'success' => true,
                'message' => 'Código de verificación enviado correctamente',
                'code' => $verificationCode // Solo para desarrollo, quitar en producción
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al enviar el correo: ' . $e->getMessage()
            ], 500);
        }
    }
}
