<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Laravel\Sanctum\PersonalAccessToken;

class ProductController extends Controller
{
    //
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $accessToken = $request->bearerToken();

        $token = PersonalAccessToken::findToken($accessToken);

        if(!$token){
            return response()->json([
                'status' => false,
                'message' => 'invalid bearer token',
            ], Response::HTTP_BAD_REQUEST);
        }
        
        $user = User::find($token->tokenable_id);

        return response()->json([
            "status" => true,
            "message" => "Product List",
            "data" => $user->products,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $accessToken = $request->bearerToken();

        $token = PersonalAccessToken::findToken($accessToken);

        if(!$token){
            return response()->json([
                'status' => false,
                'message' => 'invalid bearer token',
            ], Response::HTTP_BAD_REQUEST);
        }

        $user = User::find($token->tokenable_id);
        
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'price' => 'required',
            'quantity' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Invalid Inputs',
                'error' => $validator->errors()
            ], Response::HTTP_BAD_REQUEST);
        }

        $product = new Product();
        $product->name = $request->name;
        $product->price = $request->price;
        $product->quantity = $request->quantity;
        $product->user_id = $user->id;

        $product->save();
        
        return response()->json([
            "status" => true,
            "message" => "Product created successfully.",
            "data" => $product
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        if (is_null($product)) {
            return response()->json([
                'status' => false,
                'message' => 'Product not found'
            ]);
        }

        return response()->json([
            "success" => true,
            "message" => "Product found.",
            "data" => $product
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {

        $accessToken = $request->bearerToken();

        $token = PersonalAccessToken::findToken($accessToken);

        if(!$token){
            return response()->json([
                'status' => false,
                'message' => 'invalid bearer token',
            ], Response::HTTP_BAD_REQUEST);
        }

        $userId = $token->tokenable_id;

        $request_data = $request->all();
        
        $validator = Validator::make($request_data, [
            'name' => 'required',
            'price' => 'required',
            'quantity' => 'required'
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => false,
                'message' => 'Invalid Inputs',
                'error' => $validator->errors()
            ], Response::HTTP_BAD_REQUEST);      
        }

        if($product->user_id !== $userId){
            return response()->json([
                'status' => false,
                'message' => 'Invalid token',
            ], Response::HTTP_BAD_REQUEST); 
        }

        $product->name = $request_data['name'];
        $product->price = $request_data['price'];
        $product->quantity = $request_data['quantity'];
        $product->save();
        
        return response()->json([
            "status" => true,
            "message" => "Product updated successfully.",
            "data" => $product
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Product $product)
    {
        $accessToken = $request->bearerToken();

        $token = PersonalAccessToken::findToken($accessToken);

        if(!$token){
            return response()->json([
                'status' => false,
                'message' => 'invalid bearer token',
            ], Response::HTTP_BAD_REQUEST);
        }

        $userId = $token->tokenable_id;

        if($product->user_id !== $userId){
            return response()->json([
                'status' => false,
                'message' => 'Invalid token',
            ], Response::HTTP_BAD_REQUEST); 
        }
        
        $product->delete();

        return response()->json([
            "status" => true,
            "message" => "Product deleted successfully.",
            "data" => $product
        ]);
    }
}
