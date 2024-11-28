<?php
include_once 'config.php';

// Obtener todos los hospitales
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $stmt = $conn->prepare("SELECT * FROM hospitals");
    $stmt->execute();
    $hospitals = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($hospitals);
}

// Crear hospital
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $stmt = $conn->prepare("INSERT INTO hospitals (name, address, city, state, zip_code, description, phone, email, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([
        $data->name,
        $data->address,
        $data->city,
        $data->state,
        $data->zip_code,
        $data->description,
        $data->phone,
        $data->email,
        $data->latitude,
        $data->longitude
    ]);
    echo json_encode(["message" => "Hospital creado exitosamente"]);
}

// Actualizar hospital
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $data = json_decode(file_get_contents("php://input"));
    $stmt = $conn->prepare("UPDATE hospitals SET name = ?, address = ?, city = ?, state = ?, zip_code = ?, description = ?, phone = ?, email = ?, latitude = ?, longitude = ? WHERE id = ?");
    $stmt->execute([
        $data->name,
        $data->address,
        $data->city,
        $data->state,
        $data->zip_code,
        $data->description,
        $data->phone,
        $data->email,
        $data->latitude,
        $data->longitude,
        $data->id
    ]);
    echo json_encode(["message" => "Hospital actualizado exitosamente"]);
}

// Eliminar hospital
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $data = json_decode(file_get_contents("php://input"));
    $stmt = $conn->prepare("DELETE FROM hospitals WHERE id = ?");
    $stmt->execute([$data->id]);
    echo json_encode(["message" => "Hospital eliminado exitosamente"]);
}
?>

