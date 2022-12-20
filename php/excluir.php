<?php 

//Incluir a conexão

include("conexao.php");


//Obter dados

$obterDados = file_get_contents("php://input");


//Extrair dados

$extrair = json_decode($obterDados);

//separando os dados do JSON

$idCurso = $extrair->cursos->idCurso;


//SQL

$sql = "DELETE FROM cursos WHERE idCurso=$idCurso";
mysqli_query($conexao, $sql);


?>