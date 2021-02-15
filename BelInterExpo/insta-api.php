<?php
$client_id='444479859928742';
$token = 'IGQVJVZAFVURC1paVYzZAVgtODRmbEt1Vml0YnNMRTFVcDMzOFBkQjFzeUNFT0QxS09ocENmTWVKWkUzQlZA2VWZATTXZAPX1JrR3pOQlRCSFBsOFZAkMmpjUXlXX24yWk5FWWJDZAlQtNG1wdlN5QU5qSGY2ZAAZDZD';
$user_id = '36254095622';
$limit = 4; // количество фотографий для вывода
$output = array();
$img = array();

// инициализация cURL подключения
$instagram_cnct = curl_init();
curl_setopt( $instagram_cnct, CURLOPT_URL, "https://graph.instagram.com/" . $user_id . "?fields=id,username,media&access_token=" . $token ); // подключаемся
curl_setopt( $instagram_cnct, CURLOPT_RETURNTRANSFER, 1 ); // просим вернуть результат

// ограничиваем по времени
curl_setopt( $instagram_cnct, CURLOPT_TIMEOUT, 9 );
curl_setopt( $instagram_cnct, CURLOPT_CONNECTTIMEOUT, 9 );

// получаем и декодируем данные из JSON
$media = json_decode( curl_exec( $instagram_cnct ) ); // получаем и декодируем данные из JSON
$data = $media->media->data;

// функция array_slice() задает количество элементов, которые нам нужно получить из массива
// если нам нужно вывести все фото, тогда: foreach($data as $key => $value) {
foreach(array_slice($data, 0, $limit) as $key => $value) {
    $data_ids[] = $data[$key]->id; // создаем массив с id медиафайлов
}

// инициализируем мультипоточный запрос cURL
$multi = curl_multi_init();

// Записываем данные по каждому отдельномуэлементу в массив
foreach ($data_ids as $data_id) {
    $item = curl_init();
    curl_setopt($item, CURLOPT_URL, "https://graph.instagram.com/" . $data_id . "?fields=media_url,caption,permalink&access_token=" . $token ); // получаем данные файла
    curl_setopt($item, CURLOPT_HEADER, false);
    curl_setopt($item, CURLOPT_RETURNTRANSFER, true);
    curl_setopt( $instagram_cnct, CURLOPT_TIMEOUT, 9 );
    curl_setopt( $instagram_cnct, CURLOPT_CONNECTTIMEOUT, 9 );

    curl_multi_add_handle($multi, $item);

    $img[$data_id] =  $item;
}

// читаем заклинания
$active = null;
do {
    $mrc = json_decode( curl_multi_exec($multi, $active));
} while ($mrc == CURLM_CALL_MULTI_PERFORM);

while ($active && $mrc == CURLM_OK) {
    if (curl_multi_select($multi) == -1) {
        continue;
    }

    do {
        $mrc = json_decode( curl_multi_exec($multi, $active));
    } while ($mrc == CURLM_CALL_MULTI_PERFORM);
}

// Выводим данные элементов
foreach ($img as $data) {
    $data = json_decode(curl_multi_getcontent($data));

    $dataArray = array(
        'link' => $data->permalink,
        'img' => $data->media_url,
        'description' => $data->caption
    );

    echo $data->permalink;
    echo "\n";
    echo $data->media_url;
    echo "\n";
    curl_multi_remove_handle($multi, $img); // удаляем исполненные дескрипторы
}


curl_multi_close($multi); // закрываем мультисоединение
curl_close( $instagram_cnct ); // закрываем соединение
