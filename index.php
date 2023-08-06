<?php

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokedex</title>
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.css" />

</head>
<style>
    h1 {
        color: #fff;
    }
    </style>


<body style="background-image: url('images/background-hengar.png');">
    <div class="container-fluid" >
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="card" style="background-color :#6d32c8;">
                    <div class="header" style="text-align: center;">
                        <div>
                            <h1>Pókedex</h1>
                        </div>
                    </div>
                    <div>
                        <table class="table table-dark table-striped" id="pokedex">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Tipo</th>
                                    <th scope="col">height</th>
                                    <th scope="col">Picture</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="footer" style="background-color :#6d32c8;">
                    <h1>Pokedex version 0.SATOSHI</h1>
                </div>
            </div>
        </body>
</html>
<script src="https://code.jquery.com/jquery-3.7.0.slim.min.js" integrity="sha256-tG5mcZUtJsZvyKAxYLVXrmjKBVLd6VpVccqz/r4ypFE=" crossorigin="anonymous"></script>
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
<script src="./main.js"></script>