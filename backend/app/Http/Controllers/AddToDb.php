<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\User;

class AddToDb extends BaseController
{
    public function add(Request $request)
    {
        $firstname = $request->input("firstname");
        $lastname = $request->input("lastname");
        $dob = $request->input("dob");
        $number = $request->input("number");
        $email = $request->input("email");
        $address = $request->input("address");
        $country = $request->input("country");
        $city = $request->input("city");
        $gender = $request->input("gender");
        $language = $request->input("language");
        $comments = $request->input("comments");

        $user = new User;

        $user->firstname = $firstname;
        $user->lastname = $lastname;
        $user->dob = $dob;
        $user->number = $number;
        $user->email = $email;
        $user->address = $address;
        $user->country = $country;
        $user->city = $city;
        $user->gender = $gender;
        $user->language = $language;
        $user->comments = $comments;

        $user->save();

        return json_encode(User::all());
    }
}
