<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Bee Platform</title>
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700">
    <link rel="stylesheet" href="assets/fonts/ionicons.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pikaday/1.6.1/css/pikaday.min.css">
    <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
</head>

<body>
    <nav class="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
        <div class="container"><a class="navbar-brand logo" href="index.php">Bee Platform</a>
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item" role="presentation"><a class="nav-link" href="statistics.html">Statistics</a></li>
                </ul>
        </div>
    </nav>
    <main class="page landing-page">
    	<div class="container-items">
   	<div class="options">
   <!-- <div class="option active" style="--optionBackground:url(https://content.presspage.com/uploads/1241/1920_albertheijn-802873.jpg?10000);">
      <div class="shadow"></div>
      <div class="label">
         <div class="icon">
            <img src="ah.png" alt="logo">
         </div>
         <div class="info">
            <a href ="statistics.html"><div class="main">Beehive #1</div></a>
            <div id="sub">Temp: 5&#176; - Humidity: 79% - Weight: 50.1kg</div>
         </div>
      </div>
   </div>
   <div class="option" style="--optionBackground:url(https://upload.wikimedia.org/wikipedia/commons/0/0d/Jumbo_Supermarkten.jpg);">
      <div class="shadow"></div>
      <div class="label">
         <div class="icon">
            <img src="jumbo.jpg" alt="logo">
         </div>
         <div class="info">
            <a href ="statistics.html"><div class="main">Beehive #2</div></a>
            <div id="sub">Temp: 5&#176; - Humidity: 79% - Weight: 50.1kg</div>
         </div>
      </div>
   </div>
   <div class="option" style="--optionBackground:url(https://www.supermarketnews.com/sites/supermarketnews.com/files/styles/article_featured_retina/public/Aldi%20store-St%20Charles%20IL.png?itok=igwsh2_b);">
      <div class="shadow"></div>
      <div class="label">
         <div class="icon">
            <img src="aldi.png" alt="logo">
         </div>
         <div class="info">
            <a href ="statistics.html"><div class="main">Beehive #3</div></a>
            <div id="sub">Temp: 5&#176; - Humidity: 79% - Weight: 50.1kg</div>
         </div>
      </div>
   </div> -->


<?php 

include('update.php');
include('db_config.php');
$sql = "SELECT icon, bg, title FROM beehive";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
   $count = 1;
  while($row = $result->fetch_assoc()) {
     if($count == 1)
     {
      echo "<div class='option active' style='--optionBackground:url(http://localhost:8080/BeePlatformTest/images/".$row['bg'].");'><div class='shadow'></div><div class='label'><div class='icon'><img src='images/".$row['icon']."' alt='logo'></div><div class='info'><a href ='statistics.html'><div class='main'>".$row['title']."</div></a><div id='sub'>Temp: 5&#176; - Humidity: 79% - Weight: 50.1kg</div></div></div></div>";
     }
     else{
      echo "<div class='option' style='--optionBackground:url(http://localhost:8080/BeePlatformTest/images/".$row['bg'].");'><div class='shadow'></div><div class='label'><div class='icon'><img src='images/".$row['icon']."' alt='logo'></div><div class='info'><a href ='statistics.html'><div class='main'>".$row['title']."</div></a><div id='sub'>Temp: 5&#176; - Humidity: 79% - Weight: 50.1kg</div></div></div></div>";
     }
     $count++;
  }
} 
$conn->close();
    
 ?>
 


   </div>
   <a href="#" id="add" onclick="openForm()">+</a>
   <a href="#" id="delete" onclick="openForm2()">-</a>
   <div class="form-popup" id="myForm" style="display: none;">
      <form action=""  method="POST" class="form-container" enctype="multipart/form-data">
        <input type="text" id="title" placeholder="Title" name="title" required>
        <p>Icon: <input type="file" name="icon"></p> 
        <p>Bg: <input type="file" name="bg"></p> 
        <button type="submit" class="btn" name="submit">Add</button>
        <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
      </form>
   </div> 
     <div class="form-popup" id="myForm2" style="display: none;">
      <form action=""  method="POST" class="form-container">
        <input type="text" id="title" placeholder="Title" name="title" required>
        <button type="submit" class="btn" name="submit2">Delete</button>
        <button type="button" class="btn cancel" onclick="closeForm2()">Close</button>
      </form>
     </div> 
   
</div>
</div>
    </main>
    <footer class="page-footer">
      
        <div class="container">
            <div class="links"><a href="">Bij de Drenth</a></div>
            <div class="social-icons"></div>
        </div>
    </footer>
    <script>
      if (window.history.replaceState ) {
         window.history.replaceState( null, null, window.location.href );
         }
   </script>
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/vue.js"></script>
    <style scoped lang="scss">
@import 'assets/css/style.scss';
</style>
    <script src="assets/js/main.js"></script>
    <script src="assets/js/mainpage.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pikaday/1.6.1/pikaday.min.js"></script>
    <script src="assets/js/script.min.js"></script>
</body>

</html>