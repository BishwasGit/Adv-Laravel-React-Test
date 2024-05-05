<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\PostRepository;
use App\Validators\PostValidator;

class PostController extends Controller
{
    protected $postRepository;

    public function __construct(PostRepository $postRepository)
    {
        $this->postRepository = $postRepository;
    }

    public function index()
    {
        return $this->postRepository->all();
    }

    public function store(Request $request)
    {
        $data = PostValidator::validate($request->all());
        return $this->postRepository->create($data);
    }

    public function show($id)
    {
        return $this->postRepository->find($id);
    }

    public function update(Request $request, $id)
    {
        $data = PostValidator::validate($request->all());
        return $this->postRepository->update($id, $data);
    }

    public function destroy($id)
    {
        return $this->postRepository->delete($id);
    }
}
