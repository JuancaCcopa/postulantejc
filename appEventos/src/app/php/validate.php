<?php

header("Access-Control-Allow-Origin: *");

 	$data = json_decode($_POST['datos']);
    $usuario = $data->usuario;
    $password = $data->password;
   
   $result=false;
   $mensaje='Usuario o Password Incorrecto';
   $tipo='';

   if($usuario=='postulante@tektonlabs.com' && $password=='123') {$result=1;$mensaje='ok'; $tipo='Invitado'; }
   if($usuario=='admin@tektonlabs.com' && $password=='123') {$result=1;$mensaje='ok'; $tipo='Admin'; }


	$std = new stdClass();
    $std->result =  $result;
    $std->mensaje =  $mensaje;
    $std->tipo = $tipo;
    $json = json_encode($std);

	echo $json;

function validateDominio($login)
{
	$domain = $login;
	$expr   = '/^(([a-z0-9]([-a-z0-9]*[a-z0-9]+)?){1,63}.)+[a-z]{2,6}/i';
	 echo $expr;
	if(preg_match($expr,strtolower($domain))){
	  return 'ok';
	}else{
	  return "el dominio no es válido";
	}
}





?>