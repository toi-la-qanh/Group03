function showProductsManagement() {
    document.getElementById("content").innerHTML = "";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "admin1.php", true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById("content").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

function showOrdersManagement() {
    document.getElementById("content").innerHTML = "";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "admin2.php", true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById("content").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}