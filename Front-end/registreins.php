<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$database = "carbscounter";
$conn = new mysqli ($servername, $username, $password, $database);
if ($conn -> connect_error) {
die ("Conexão Falhou:". $conn->connect_error);
}
if( isset($_SESSION['nome']) && isset($_SESSION['idade']) && isset($_SESSION['tipo']) && isset($_SESSION['peso']) && isset($_SESSION['altura']) && isset($_SESSION['comorbidade']))  { 
     $nome_cad = $_SESSION['nome_cad'];
$email_cad = $_SESSION['email_cad'];
$senha_cad = $_SESSION['senha_cad'];

}


$sql = "INSERT INTO formulario VALUES";
$sql .= "('$nome_cad','$email_cad','$senha_cad')";
if($conn->query($sql) == TRUE){
echo "<br>Usuario incluido com sucesso!";
}
else{
echo "Erro: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>