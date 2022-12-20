<?php 

//Incluir a conexão

include("conexao.php");


//Obter dados

$obterDados = file_get_contents("php://input");


//Extrair dados

$extrair = json_decode($obterDados);

//separando os dados do JSON

$nomeCurso = $extrair->cursos->nomeCurso;
$valorCurso = $extrair->cursos->valorCurso;


//SQL

$sql = "INSERT INTO cursos (nomeCurso, valorCurso) VALUES ($nomeCurso, $valorCurso)";
mysqli_query($conexao, $sql);

//exportando JSON

$curso = [
    'nomeCurso' => $nomeCurso,
    'valorCurso' => $valorCurso
];

json_encode(['curso'=>$cursos]);









?>