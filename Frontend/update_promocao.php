<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

if ($data !== null) {
    file_put_contents('promocao.json', json_encode($data, JSON_PRETTY_PRINT));
    echo json_encode(array("message" => "Dados atualizados com sucesso"));
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Dados inválidos"));
}
?>