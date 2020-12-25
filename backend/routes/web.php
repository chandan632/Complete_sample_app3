<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});


$router->put("/add_to_db", "AddToDb@add");
$router->delete("/remove_from_db/{id}", "RemoveFromDb@remove");
$router->get("/get_data", "GetDataFromDb@get");
$router->post("/update_data/{id}", "UpdateData@update");
