<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Laravel\Sanctum\PersonalAccessToken;

class AuthController extends Controller
{
    /**
     * Register a User.
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:3|max:50',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|confirmed|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Invalid Inputs',
                'error' => $validator->errors()
            ], 401);
        }

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();

        $token = $user->createToken('MyAppToken')->plainTextToken;

        return response()->json([
            'status' => true,
            'message' => 'User successfully registered',
            'user' => $user,
            'token' => $token
        ], 201);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:8'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Invalid Inputs',
                'error' => $validator->errors()
            ], 422);
        }

        if (Auth::attempt(['email'=>$request->email, 'password'=>$request->password])) {
            $user = Auth::user();
            $token = $user->createToken('MyAppToken')->plainTextToken;
            $minutes = 1440;
            $timestamp = now()->addMinute($minutes);
            $expires_at = date('M d, Y H:i A', strtotime($timestamp));
            return response()->json([
                'status' => true,
                'message' => 'Login successful',
                'access_token' => $token,
                'token_type' => 'bearer',
                'expires_at' => $expires_at
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Invalid Credentials',
            ], 400);
        }
    }

    public function logout(Request $request)
    {

        // Get bearer token from the request
        $accessToken = $request->bearerToken();
        
        // Get access token from database
        $token = PersonalAccessToken::findToken($accessToken);

        if(!$token){
            return [
                'message' => 'invalid bearer token.',
            ];
        }

        // Revoke token
        $token->delete();

        return [
            'message' => 'user logged out.',
        ];
    }
}
