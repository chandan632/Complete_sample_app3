<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UpdateData extends Controller
{
    public function update(Request $request, $id)
    {

        $user = User::find($id);

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

        $result = $user->save();

        if ($result) {
            return json_encode(array("msg" => "Updated Successfully!"));
        } else {
            return json_encode(array("msg" => "Can't update!"));
        }
    }
}
