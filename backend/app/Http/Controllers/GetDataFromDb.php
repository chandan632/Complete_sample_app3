<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller;
use App\Models\User;

class GetDataFromDb extends Controller
{
    public function get()
    {
        $result = User::all();
        return json_encode($result);
    }
}
