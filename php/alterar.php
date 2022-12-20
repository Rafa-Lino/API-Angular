<?php 

//Incluir a conexão

include("conexao.php");


//Obter dados

$obterDados = file_get_contents("php://input");


//Extrair dados

$extrair = json_decode($obterDados);

//separando os dados do JSON

$idCurso = $extrair->cursos->idCurso;
$nomeCurso = $extrair->cursos->nomeCurso;
$valorCurso = $extrair->cursos->valorCurso;


//SQL

$sql = "UPDATE cursos SET nomeCurso='$nomeCurso', valorCurso='$valorCurso' WHERE idCurso='$idCurso'";
mysqli_query($conexao, $sql);

//exportando JSON

$curso = [
    'nomeCurso' => $nomeCurso,
    'valorCurso' => $valorCurso
];

json_encode(['curso'=>$cursos]);








?>