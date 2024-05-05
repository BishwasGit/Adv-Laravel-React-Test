<?php

namespace App\Validators;

use Illuminate\Support\Facades\Validator;

class PostValidator
{
    public static function validate($data)
    {
        return Validator::make($data, [
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ])->validate();
    }
}
