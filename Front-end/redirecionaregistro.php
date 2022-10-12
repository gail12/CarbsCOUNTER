<?php
session_start();
?>
<html lang= "pt-br">
<head>
<title>Cadastro</title>
<meta charset="UTF-B">
<meta http-equiv= "Content-Type" content= "text/html; charset=utf-8">
<link rel="stylesheet" type="text/css" href="stylesession1.css"/>
<link rel="icon" type="image/png" href="img/favicon1.png" />
</head>

<body>

<?php
ini_set('default_charset','UTF-8');
$_SESSION['nome_cad'] = $_POST['nome_cad'];
$_SESSION['email_cad'] = $_POST['email_cad'];
$_SESSION['senha_cad'] = $_POST['senha_cad'];

if(isset($_POST['cadastrar']))
{ 
echo '<script>window.location.replace("cadastramento.html");</script>';

include 'registreins.php';
}

else echo "<br>Cancelado";

?>

</body>
</html>