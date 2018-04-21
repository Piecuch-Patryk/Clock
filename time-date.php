<?php
// time zone;
$str = $_REQUEST['time-zone'];
// set time zone depending on sent string;
if($str == 'London'){
    date_default_timezone_set('Europe/London');
}
if($str == 'New%20York'){
    date_default_timezone_set('America/New York');
}
if($str == 'Tokyo'){
    date_default_timezone_set('Asia/Tokyo');
}
if($str == 'Moscow'){
    date_default_timezone_set('Europe/Moscow');
}

// actual server time&date;
$day = date('l');
$date = date('d/M');
$time = date('H:i:s');
echo json_encode(array($day, $date, $time, $str));
?>