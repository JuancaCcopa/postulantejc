<?php

header("Access-Control-Allow-Origin: *");

 	$data = json_decode($_POST['datos']);
    $usuario = $data->usuario;
   
   $validateResul=validateDominio($usuario);
   $message	=$validateResul != 'ok' ? $validateResul : 'ok';


   $arr = array('message' => $message);

   echo json_encode($arr);


function validateDominio($login)
{
	$domain = $login;
	$expr   = '/^(([a-z0-9]([-a-z0-9]*[a-z0-9]+)?){1,63}.)+[a-z]{2,6}/i';
	 
	if(preg_match($expr,strtolower($domain))){
	  return 'ok';
	}else{
	  return "el dominio no es válido";
	}
}


?>