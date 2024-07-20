<!DOCTYPE html>
<html>
<head>
    <Meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Quản lý mặt hàng</title>
    <link rel="stylesheet" type="text/css" href="css/admin.css">
</head>
<body>
	<h1>Quản lý mặt hàng</h1>
	<nav>
		<ul>
			<li><a href="admin2.php" onclick="showOrdersManagement()">Quản lý đơn hàng</a></li>
			<li><a href="admin.php" onclick="showDashboard()">Trang chủ</a></li>
		</ul>
	</nav>
	
	<h2>Danh sách mặt hàng</h2>
	
	<table id="product-table">
		<thead>
			<tr>
				<th>Mã sản phẩm</th>
				<th>Tên sản phẩm</th>
				<th>Giá sản phẩm</th>
				<th>Chỉnh sửa</th>
			</tr>
		</thead>
		<tbody id="product-list">
			<tr>
				<td>001</td>
				<td>Sản phẩm 1</td>
				<td>100,000 VND</td>
				<td>
					<button>Sửa</button>
					<button>Xoá</button>
				</td>
			</tr>
			<tr>
				<td>002</td>
				<td>Sản phẩm 2</td>
				<td>200,000 VND</td>
				<td>
					<button>Sửa</button>
					<button>Xoá</button>
				</td>
			</tr>
		</tbody>
	</table>
	
	<h2>Thêm mặt hàng mới</h2>
	
	<form>
		<label for="product-name">Tên sản phẩm:</label>
		<input type="text" id="product-name" name="product-name"><br><br>
		<label for="product-price">Giá sản phẩm:</label>
		<input type="number" id="product-price" name="product-price" min="0"><br><br>
		<button type="submit">Thêm sản phẩm</button>
	</form>
</body>
</html>