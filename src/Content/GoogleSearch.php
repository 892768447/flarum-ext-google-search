<?php

namespace Irony\Google\Search\Content;

use Flarum\Frontend\Document;
use Flarum\Http\Exception\RouteNotFoundException;
use Flarum\Api\Client;
use Illuminate\Contracts\View\Factory;
use Psr\Http\Message\ServerRequestInterface;

class GoogleSearch
{
    /**
     * @var Client
     */
    protected $api;

    /**
     * @var Factory
     */
    private $view;

    public function __construct(Client $api, Factory $view)
    {
        $this->api = $api;
        $this->view = $view;
    }

    public function __invoke(Document $document, ServerRequestInterface $request)
    {
        return $document;
    }
}
