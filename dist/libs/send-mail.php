<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Путь к файлам библиотеки PHPMailer

// Получаем данные из формы
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Настройки SMTP сервера
$mail = new PHPMailer(true);
try {
    $mail->SMTPDebug = 0; // Режим отладки SMTP (0 = выключен)
    $mail->isSMTP(); // Указываем, что используем SMTP
    $mail->Host = 'smtp.example.com'; // Адрес SMTP сервера
    $mail->SMTPAuth = true; // Включение аутентификации на SMTP сервере
    $mail->Username = 'user@example.com'; // Логин для SMTP сервера
    $mail->Password = 'password'; // Пароль для SMTP сервера
    $mail->SMTPSecure = 'tls'; // Тип шифрования (tls или ssl)
    $mail->Port = 587; // Порт SMTP сервера
    
    // От кого будет отправлено письмо
    $mail->setFrom('user@example.com', 'My Website');
    
    // Кому будет отправлено письмо
    $mail->addAddress('recipient@example.com');
    
    // Тема письма
    $mail->Subject = 'New message from website';
    
    // Тело письма
    $mail->Body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";
    
    // Отправляем письмо
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Error: {$mail->ErrorInfo}";
}