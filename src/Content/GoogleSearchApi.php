<?php

namespace Irony\Google\Search\Content;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Zend\Diactoros\Response\JsonResponse;

require_once('simple_html_dom.php');

class GoogleSearchApi implements RequestHandlerInterface
{

    private function query($q, $num, $hl)
    {
        try {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, 'https://google.pyqt.site/search?newwindow=1&safe=active&num=' . $num . '&hl=' . $hl . '&gws_rd=ssl&q=' . $q);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
            curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.87 Safari/537.36');
            $headers = [
                'accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                'accept-language:' . $hl . ',zh;q=0.9, en;q=0.8',
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
            if ($htmls === false) {
                return new JsonResponse(array());
            }
            $html = str_get_html($htmls);

            // 遍历提取
            $data = array();
            $tables = get_html_translation_table(HTML_ENTITIES);
            foreach ($html->find('div[id=search]') as $divsearch) {
                foreach ($divsearch->find('.rc') as $divrc) {
                    foreach ($divrc->find('.r') as $divr) {
                        $a = $divr->find('a', 0);
                        // 网址
                        $url = str_replace('\\', '', $a->href);
                        // 标题
                        $title = str_replace('"', '', htmlspecialchars_decode($a->plaintext));
                        // 简介
                        $content = str_replace('"', '', htmlspecialchars_decode($divrc->find('.st', 0)->plaintext));
                        // 替换字符串
                        foreach ($tables as $key => $value) {
                            $title = str_replace($value, $key, $title);
                            $content = str_replace($value, $key, $content);
                        }

                        array_push($data, array(
                            'url' => $url,
                            'title' => $title,
                            'content' => $content
                        ));
                    }
                }
            }

            return new JsonResponse($data);
        } catch (Exception $e) {
            return new JsonResponse(array());
        }
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $session = $request->getAttribute('session');
        $user_id = $session->get('user_id') ?: '';
        $q = urlencode(trim(array_get($request->getQueryParams(), 'q')));
        if ($user_id === '' || empty($user_id) || $q === '' || empty($q)) {
            // 没有登录或者关键词为空
            return new JsonResponse(array());
        } else {
            // 谷歌搜索结果并返回
            $num = trim(array_get($request->getQueryParams(), 'num')) ?: '50';
            $hl = trim(array_get($request->getQueryParams(), 'hl')) ?: 'zh-CN';
            return $this->query($q, $num, $hl);
        }
    }
}
