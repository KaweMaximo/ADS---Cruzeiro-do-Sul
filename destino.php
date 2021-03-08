<?php
var_dump($_POST);

$servidor = $_POST['contact.html'];

            // Parametros da requisição
            $content = http_build_query(array(
                'txtXML' => $_POST['txtXML']
            ));

            $context = stream_context_create(array(
                'http' => array(
                    'method' => 'POST',                    
                    'header' => "Connection: close\r\n".
                                "Content-type: application/x-www-form-urlencoded\r\n".
                                "Content-Length: ".strlen($content)."\r\n",
                    'content' => $content                               
                )
            ));
            // Realize comunicação com o servidor
            $contents = file_get_contents($contact, null, $context);            
            $resposta = json_decode($contents);  //Parser da resposta Json

?>

