<?php
include "database/sql_connection.php";
session_start();
$db = new SQLConnect();
$conn = $db->connect();
// $user_id = $_SESSION['user_id'];
// if(!isset($user_id))
// {
//     header("location:login.php");
// }
// $query = $conn->prepare("SELECT * FROM `account_guest` WHERE id = '$user_id'");
// $query->execute();
// if ($query->rowCount() > 0) {
//     $user = $query->fetch();
// }
// ;
// if (isset($_POST['edit_name'])) {
//     $name = $_POST['user_name'];
//     $conn->exec("UPDATE `account_guest` SET name ='$name' WHERE id = '$user_id'");
//     header("location:user.php");
// }
// ;
// if (isset($_POST['edit_address'])) {
//     $address = $_POST['user_address'];
//     $conn->exec("UPDATE `account_guest` SET address ='$address' WHERE id = '$user_id'");
//     header("location:user.php");
// }
// ;
// if (isset($_POST['edit_phone'])) {
//     $phone = $_POST['user_phone'];
//     $conn->exec("UPDATE `account_guest` SET phone ='$phone' WHERE id = '$user_id'");
//     header("location:user.php");
// }
// ;
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trang cá nhân</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
</head>

<body>
<section>
        <ul>
            <li><a href="home.php"><i class="fa-solid fa-house"></i></a></li>
            <li><a href="search.php"><i class="fa-solid fa-magnifying-glass"></i></a></li>
            <li><a href="liked_content.php"><i class="fa-solid fa-heart"></i></a></li>
            <li><a href="profile.php"><i class="fa-solid fa-user"></i></a></li>
        </ul>
        Trang cá nhân
    </section>
</body>

</html>