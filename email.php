<?php
  require 'PHPmailer/PHPMailer.php';
  require 'PHPmailer/SMTP.php';
  require 'PHPmailer/Exception.php';

  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\SMTP;
  use PHPMailer\PHPMailer\Exception;

  $name = $_POST['name'];
  $email = $_POST['email'];
  $nachricht = $_POST['nachricht'];

  echo '<script>alert("Welcome to Geeks for Geeks")</script>';

  Sendmail($name, $email, $nachricht);
  
  function Sendmail($name, $email, $nachricht) {

  $mail = new PHPMailer();
  $mail->CharSet = "UTF-8";

  $mail ->isSMTP();

  $mail->Host = "smtp.gmail.com"; //Auswählen des Host SMTP Servers

  $mail->SMTPAuth = "true";

  $mail->SMTPSecure = "tls";

  $mail->Port = "587";

  $mail->Username = "sunenpower@gmail.com";

  $mail->Password = "SunEnPowerPasswort";

  $mail->Subject = "Anfrage von " . $name;

  $mail->setFrom("sunenpower@gmail.com");

  $mail->Body = $name. " Stellt eine Anfrage über das Kontaktformular\n" . $nachricht . "\nAntwort bitte an die E-Mail: " . $email. " senden!";

  $mail->addAddress("sunenpower@gmail.com");

  $success = $mail->Send();

  $mail->smtpClose();

  return $success;

  }
?>