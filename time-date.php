<?php
// set time zone;
date_default_timezone_set('Europe/London');
// actual server time&date;
$date = date('D/d');
$time = date('H:i:s');

echo json_encode(array($date, $time));

?>