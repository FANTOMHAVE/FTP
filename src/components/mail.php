<?php 
$to = "boboev_karim@mail.ru";
$from = trim($_POST['user_email']);

$name = trim($_POST['user_name']);
$surname = trim($_POST['user_surname']);
$text = trim($_POST['user_text']);
$email = trim($_POST['user_email']);
$pit = "Получено сообщение от $email";

$message = htmlspecialchars($pit);
$message = urldecode($message);
$message = trim($message);

$headers = "От: $name $surname" . "\r\n" .
"Почта: $from" . "\r\n" .
"Сообщение: $text";

if(mail($to, $message, $headers)) {
    header('location: you.html');
    exit;
}
else {
    echo 'Письмо не отправлено';
}

?>