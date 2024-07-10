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
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tìm kiếm bài viết</title>
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
        <form action="">
            <input type="text" placeholder="Tìm kiếm ?"><button>Tìm</button>
        </form>
    </section>
</body>

</html>