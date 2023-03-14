<?php 
$lista = file_get_contents(json_decode(__DIR__ . '/../data/dischi.json'));
$lista_decoded = json_decode($lista);

header('Content-Type: application/json; charset=utf-8');
echo json_encode($lista_decoded);
?>