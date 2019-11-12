<?php

namespace Irony\Google\Search\Content;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Zend\Diactoros\Response\JsonResponse;

require_once('simple_html_dom.php');

class GoogleSearchApi implements RequestHandlerInterface
{

    private function query($q) {
        try {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, 'https://www.google.com/search?newwindow=1&safe=active&num=50&hl=zh-CN&gws_rd=ssl&q='.$q);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.87 Safari/537.36');
            $headers = [
                'accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                'accept-language:zh-CN,zh;q=0.9',
                'dnt:1',
                'referer:https://www.google.com/',
                'sec-ch-ua:Google Chrome 78',
                'sec-fetch-dest:document',
                'sec-fetch-mode:navigate',
                'sec-fetch-site:same-origin',
                'sec-origin-policy:0',
                'upgrade-insecure-requests:1'
            ];
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
            $htmls = curl_exec($ch);
            curl_close($ch);
            $html = str_get_html($htmls);
            
            // 遍历提取
            $result = array();
            $data = array();
            foreach ($html->find('div[id=search]') as $divsearch) {
                foreach ($divsearch->find('.rc') as $divrc) {
                    foreach ($divrc->find('.r') as $divr) {
                        $a = $divr->find('a', 0);
                        // 网址
                        $url = str_replace('\\', '', $a->href);
                        // 标题
                        $title = str_replace('"', '', $a->plaintext);
                        // 简介
                        $content = str_replace('quot', '', $divrc->find('.st', 0)->plaintext);

                        array_push($data, array(
                            'type'=>'posts',
                            'attributes'=>array(
                                'number'=>1,
                                'contentType'=>'comment',
                                'contentHtml'=>$content,
                                'content'=>$content,
                                'url'=>$url,
                                'title'=>$title
                            )
                        ));
                    }
                }
            }
            
            $result['data'] = $data;
            return new JsonResponse($result);
        } catch (Exception $e) {
            return new JsonResponse(array('data'=>[]));
        }
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $session = $request->getAttribute('session');
        $user_id = $session->get('user_id') ?: '';
        $q = urlencode(trim(array_get($request->getQueryParams(), 'q')));
        if ($user_id === '' || empty($user_id) || $q === '' || empty($q)) {
            // 没有登录或者关键词为空
            return new JsonResponse(array('data'=>[]));
        } else {
            // 谷歌搜索结果并返回
            $data = array();
            array_push($data, array(
                'type'=>'search',
                "id"=>"1",
                'attributes'=>array(
                    'content'=>'内容',
                    'url'=>'https://www.baidu.com',
                    'title'=>'标题'
                    )
                ), array(
                    'type'=>'search',
                    "id"=>"2",
                    'attributes'=>array(
                        'content'=>'内33容',
                        'url'=>'https://www.baidu.com',
                        'title'=>'444标题'
                        )
                    )
            );
            return new JsonResponse(array('data'=>$data));
            //return $this->query($q);
        }
    }
}