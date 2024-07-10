<?php
// include "database/sql_connection.php";
// if (isset($_POST['submit'])) {
//     $email = $_POST['email'];
//     $db = new SQLConnect();
//     $query = $db->connect();
//     $check = $query->prepare("SELECT * FROM `account_guest` WHERE email = '$email'");
//     $check->execute();
//     if ($_POST['password'] != $_POST['cpassword']) {
//         $message[] = "Mật khẩu không trùng khớp!";
//     } else if ($check->rowCount() > 0) {
//         $message[] = "Tài khoản đã tồn tại!";

//     } else {
//         $Execquery = $query->prepare("INSERT INTO `account_guest`(id,name, password, email) 
//         VALUES(NULL,:name, :password, :email)");
//         $Execquery->bindValue('email', $_POST['email']);
//         $Execquery->bindValue('name', $_POST['name']);
//         $Execquery->bindValue('password', password_hash($_POST['password'], PASSWORD_BCRYPT));
//         $Execquery->execute();
//         sleep(2);
//         header('location:index.php');
//     }

// }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link rel="stylesheet" href="css/style.css">
    <title>Đăng ký</title>
</head>

<body>
    <section>
        <ul>
            <li><a href="home.php"><i class="fa-solid fa-house"></i></a></li>
            <li><a href="search.php"><i class="fa-solid fa-magnifying-glass"></i></a></li>
            <li><a href="liked_content.php"><i class="fa-solid fa-heart"></i></a></li>
            <li><a href="profile.php"><i class="fa-solid fa-user"></i></a></li>
        </ul>

    </section>
    Đăng ký
    <form action="">
        <table>
            <tr>
            <td><input type="text" placeholder="Nhập tên..."></td>
            <td><input type="text" placeholder="Nhập email..."></td>
            <td><input type="text" placeholder="Nhập mật khẩu..."></td>
            <td><input type="text" placeholder="Nhập lại mật khẩu..."></td>
            </tr>
        </table>    
    </form>
    <script src="script.js"></script>
</body>

</html>