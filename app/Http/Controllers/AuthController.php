<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        info("deneme");
        $credentials = $request->validated();
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        }
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        return response(
            compact(
                'user',
                'token'
            )
        );
    }

    public function logout(Request $request)
    {
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response('', 204);
    }
}
