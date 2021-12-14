<?php
//We are looking for name = submit in our html.
//isset() is a PHP function.
if(isset($_POST['submit']))
{
    //Getting data from user.
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mail_from = $_POST['mail'];
    $message = $_POST['message'];
    //Setting variable to my email.
    $my_email = "mikedick@umich.edu";
    //See who this is from.
    $headers = "From: ". $mail_from;
    //Custom message to my email when contact form is filled out.
    $txt = "You have received an email from". $name.".\n\n".$message;
    //Mail to, subject, the message, and applicable headers.
    mail($my_email, $subject, $txt,$headers);
    header("Location: index.php?mailsend");
}
?>