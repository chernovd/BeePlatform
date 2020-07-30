<?php

if($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST["submit"])) {
    if(isset($_FILES['icon']) && isset($_FILES['bg'])){
   $title = $_POST['title'];
    
    $errors= array();
    $file_name = $_FILES['icon']['name'];
    $file_size = $_FILES['icon']['size'];
    $file_tmp = $_FILES['icon']['tmp_name'];
    $file_type = $_FILES['icon']['type'];
    $tmp = explode('.', $file_name);
    $file_ext = strtolower($tmp[1]);


    $file_name2 = $_FILES['bg']['name'];
    $file_size2 = $_FILES['bg']['size'];
    $file_tmp2 = $_FILES['bg']['tmp_name'];
    $file_type2 = $_FILES['bg']['type'];
    $tmp2 = explode('.', $file_name2);
    $file_ext2 = strtolower($tmp2[1]);
 
    
    $extensions= array("jpeg","jpg","png");
    
    if(in_array($file_ext,$extensions)=== false && in_array($file_ext2,$extensions)=== false){
       $errors[]="extension not allowed, please choose a JPEG or PNG file.";
    }
    
    if($file_size > 2097152 && $file_size2 > 2097152 ) {
       $errors[]='File size must be excately 2 MB';
    }
    
    if(empty($errors)==true) {
       
       move_uploaded_file($file_tmp,"images/".$file_name);
       move_uploaded_file($file_tmp2,"images/".$file_name2);
       include('db_config.php');

       $sql = "INSERT INTO beehive (icon, bg, title)
       VALUES (?, ?, ?)";
       $stmt = mysqli_prepare($conn,$sql);
       $stmt->bind_param("sss", $file_name, $file_name2, $title);
       $stmt->execute(); 

       $conn->close();
   
       

       
    }else{
       print_r($errors);
    }
 }
}
 
if(isset($_POST["submit2"])) {
    $title = $_POST['title'];
    include('db_config.php');

      $sql = "DELETE FROM beehive WHERE title=?";
      $stmt = mysqli_prepare($conn,$sql);
      $stmt->bind_param("s", $title);
      $stmt->execute();    
      $stmt->close();

      $conn->close();
 
 }
?>