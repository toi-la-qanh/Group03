<?php
// include "database/sql_connection.php";

// if (isset($_POST['submit'])) {
//     $email = $_POST['email'];
//     $pass = $_POST['password'];

//     $database = new SQLConnect();
//     $query = $database->connect();
//     $Execquery = $query->prepare("SELECT * FROM `account_guest` WHERE email = '$email'");
//     $Execquery->execute();
//     $user = $Execquery->fetch();
//     if ($user) {
//         if (password_verify($_POST['password'], $user['password'])) {
//             session_start();
//             $_SESSION['user_id'] = $user['id'];
//             sleep(2);
//             header('location:home.php');
//         }
//     }
//     $message[] = "Sai tài khoản hoặc mật khẩu!";
// }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link rel="stylesheet" href="css/style.css" />
    <title>Đăng nhập</title>
</head>

<body>
    <section>
        <ul>
            <li><a href="home.php"><i class="fa-solid fa-house"></i></a></li>
            <li><a href="search.php"><i class="fa-solid fa-magnifying-glass"></i></a></li>
            <li><a href="liked_content.php"><i class="fa-solid fa-heart"></i></a></li>
            <li><a href="profile.php"><i class="fa-solid fa-user"></i></a></li>
        </ul>
        Đăng nhập
        <form action="">
            <input type="text" placeholder="Nhập email...">
            <input type="text" placeholder="Nhập mật khẩu...">
        </form>
    </section>
    
</body>

</html>