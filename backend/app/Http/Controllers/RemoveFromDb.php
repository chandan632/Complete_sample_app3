<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\User;

class RemoveFromDb extends BaseController
{
    public function remove(Request $request, $id)
    {

        $result = User::where("_id", $id)->delete();

        if ($result) {
            return json_encode(array("msg" => "Deleted successfully!"));
        } else {
            return json_encode(array("msg" => "Can't delete!"));
        }
    }
}
