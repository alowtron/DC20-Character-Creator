<?php
session_start();
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header('Location: account/login.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DC20 Home</title>
</head>
<body>
    <a href="characters/list.php">Your Characters</a>
    </br>
    <a href="create/createPlayerCharacter.php">Create Character</a>
</body>
</html>
