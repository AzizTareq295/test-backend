<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;

class ProductController extends Controller
{
    public function storeProduct(Request $request){
        $request->validate([
            'name' => 'required',
            'quantity' => 'required|numeric',
            'price' => 'required|numeric',
            'description' => 'required',
            'image' => 'required',
        ]);

        $base64image = explode(',', $request->image);

        $ini =substr($base64image[0], 11);
        $type = explode(';', $ini);

        $convertedImage = base64_decode($base64image[1]);

        $slug = strtolower($request->name);
        $new_slug = str_replace(' ','_',$slug);

        $fileName = $new_slug.''.'-'.time().'.'.$type[0];
        $path = ('uploads/products')."/".$fileName;

        file_put_contents($path, $convertedImage);

        $imageUrl = 'http://127.0.0.1:8000/uploads/products/'.$fileName;

        

        $product = new Product;

        $product->name = $request->name;
        $product->quantity = $request->quantity;
        $product->price = $request->price;
        $product->description = $request->description;
        $product->image = $imageUrl;
        $product->save();

        $allProducts = Product::orderBy('created_at', 'desc')->get();

        return response()->json(['message'=> 'Success', 'products'=> $allProducts]);
    }
}
