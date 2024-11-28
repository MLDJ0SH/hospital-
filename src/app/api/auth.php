<?php
include_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_GET['action'] === 'register') {
    $data = json_decode(file_get_contents("php://input"));
    $stmt = $conn->prepare("INSERT INTO users (full_name, email, password, phone) VALUES (?, ?, ?, ?)");
    $stmt->execute([
        $data->full_name,
        $data->email,
        password_hash($data->password, PASSWORD_DEFAULT),
        $data->phone
    ]);
    echo json_encode(["message" => "Usuario registrado exitosamente"]);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_GET['action'] === 'login') {
    $data = json_decode(file_get_contents("php://input"));
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$data->email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($data->password, $user['password'])) {
        echo json_encode(["message" => "Login exitoso", "user" => $user]);
    } else {
        echo json_encode(["message" => "Credenciales inválidas"]);
    }
}
?>
