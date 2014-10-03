<?php 
require 'libs/phpmailer/PHPMailerAutoload.php';
require 'content.php';

$mail = new PHPMailer;
$mail->isSMTP();                                      
$mail->Host = 'smtp.mail.ru';  
$mail->SMTPAuth = true;                              
$mail->SMTPSecure = 'ssl';                           
$mail->Port = 465;
$mail->CharSet = 'UTF-8';                                    

$mail->Username = 'ozeron.95@mail.ru';
$mail->Password = $_ENV["SECRET"];

$mail->SetFrom('ozeron.95@mail.ru','Css3Button');
$mail->AddAddress($_GET["email"],"");

$mail->WordWrap = 50;                              
$mail->isHTML(true); 

$mail->Subject = 'Сss3Button button code';
$mail->Body = $html;


if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
?>