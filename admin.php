<!DOCTYPE html>
<html>
<head>
    <Meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Quản trị viên</title>
    <link rel="stylesheet" type="text/css" href="css/admin.css">
</head>
<body>
	<h1>Quản Trị Viên</h1>
	<nav>
		<ul>
			<li><a href="admin1.php" onclick="showProductsManagement()">Quản lý mặt hàng</a></li>
			<li><a href="admin2.php" onclick="showOrdersManagement()">Quản lý đơn hàng</a></li>
		</ul>
	</nav>
	
	<div id="content">
		<h2>Chào mừng bạn đến với trang Quản Trị Viên!</h2>
		<p>Vui lòng chọn một trong các tùy chọn trên để bắt đầu quản lý.</p>
	</div>
	
	<script src="js/admin.js">
	</script>	
</body>
</html>