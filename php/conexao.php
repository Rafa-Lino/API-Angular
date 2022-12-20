<?php 

//var de acesso

$url = "localhost";
$usuario = "root";
$senha = "";
$base = "api";

//conexão

$conexao = mysqli_connect($url, $usuario, $senha, $base);

//Arrumando os caracteres especiais

mysqli_set_charset($conexao, "utf8");


?>