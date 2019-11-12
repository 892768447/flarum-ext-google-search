<?php

namespace Irony\Google\Search;

use Flarum\Extend;
use Flarum\Foundation\Application;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/forum.less')
        ->route('/google', 'irony_google_search', Content\GoogleSearch::class),
    (new Extend\Routes('api'))
        ->get('/google', 'irony_google_search_api', Content\GoogleSearchApi::class)
        ->post('/google', 'irony_google_search_api', Content\GoogleSearchApi::class),
    (new Extend\Locales(__DIR__ . '/resources/locale')),
];
