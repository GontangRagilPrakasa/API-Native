<?php
  $ambildatajson = file_get_contents('data/pizza.json');
  $menu = json_decode($ambildatajson,true);
  // var_dump($menu["menu"]["0"]["nama"]);
  $menu = $menu["menu"];
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
  </head>
  <body>

  <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src = "img/logo.png" width=120px>
      </a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#">All Menu</a>
        </div>
      </div>
    </div>
</nav>

<div class="container">
  <div class="row">
    <div class="col mt-3">
        <h1>All Menu</h1>
    </div>
  </div>

  <div class="row">
  
    <?php foreach ($menu as $row): ?>
      <div class="col-md-4">
        <div class="card mb-3">
          <img class="card-img-top" src="img/menu/<?= $row["gambar"]; ?>" alt="Card image cap">
          <div class="card-block">
            <h4 class="card-title"><?= $row["nama"]; ?></h4>
            <p class="card-text"><?= $row["deskripsi"]; ?></p>
            <h5 class="card-title"><?= $row["harga"];  ?></h5>
            <a href="#" class="btn btn-primary">Pesan Sekarang</a>
          </div>
        </div>
      </div>
    <?php endforeach; ?>
  </div>


</div>

    <!-- jQuery first, then Tether, then Bootstrap JS. -->
    <!-- download jquery cdn ganti dari jquery slim -->
    <!-- <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script> -->
    <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
  </body>
</html>