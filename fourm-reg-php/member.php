<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "fourm_reg";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$sql = "CREATE TABLE member (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
email VARCHAR(70) NOT NULL,
password VARCHAR(50) NOT NULL,
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";


if (mysqli_query($conn, $sql)) {
  echo "สร้างตารางสำเร็จ";
} else {
    if (mysqli_errno($conn) == 1050) { 
        // echo "พบตารางแล้ว<br>";

    } else {
        // echo "Error creating table: " . mysqli_error($conn);
        // echo "<br>";
    }
}

$name = $_POST["name"];
$email = $_POST["email"];
$password = $_POST["password"];

$sql = "SELECT * FROM member WHERE email = '$email'";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
  echo '    <link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
  crossorigin="anonymous"
/>
<div class="container text-center p-md-3">
 
<br><h1>อีเมลนี้มีผู้ใช้งานแล้ว</h1>
<br><button type="submit" onclick="history.back()" class="btn btn-primary btn-block mb-4">กลับไปยังหน้าหลัก</button></div>';
  exit();
}


$sql = "INSERT INTO member (name, email, password)
VALUES ('$name', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
    echo '    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"
  />
  <div class="container text-center p-md-3">
   
  <br><h1>สร้างบัญชีผู้ใช้สำเร็จ</h1>
  <h3>ชื่อผู้ใช้ ' . $name .' <br></h3>
  <h3>อีเมล ' . $email .' <br></h3>
  <h3>รหัสผ่าน ' . $password .' <br></h3>
  <br><button type="submit" onclick="history.back()" class="btn btn-primary btn-block mb-4">กลับไปยังหน้าหลัก</button></div>';
    exit();
 
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();





?>