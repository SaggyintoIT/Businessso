<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

// Database connection
$host = 'localhost:3307';
$dbname = 'Business';
$user = 'root';
$pass = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Database connection failed: ' . $e->getMessage()]);
    exit;
}

// Get query parameters
$email = isset($_GET['email']) ? trim($_GET['email']) : '';
$password = isset($_GET['password']) ? trim($_GET['password']) : '';

if (empty($email) || empty($password)) {
    echo json_encode(['error' => 'Email and Password are required.']);
    exit;
}

$sql = "SELECT * FROM users WHERE email = :email";
$stmt = $pdo->prepare($sql);
$stmt->execute(['email' => $email]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$user) {
    echo json_encode(['error' => 'User not found.']);
    exit;
}

if (password_verify($password, $user['password'])) {
    echo json_encode(['success' => 'Data is present.']);
} else {
    echo json_encode(['error' => 'Invalid email or password.']);
}
?>
