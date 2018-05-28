<?php

header("Access-Control-Allow-Origin: *");

 	$data = json_decode($_POST['datos']);
    $usuario = $data->usuario;
    //$postalCode = $data->password	;
    //$returnData = json_encode($data);
   $validateResul=validateDominio($usuario);
   $message	=$validateResul != 'ok' ? $validateResul : 'ok';

   //$json = '{"message":'$message'}';
   //$dJson=json_decode($json);

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