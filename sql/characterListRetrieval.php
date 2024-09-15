<?php
require_once "../config.php";
session_start();

// Set appropriate headers to indicate JSON content early
header('Content-Type: application/json');

// Initialize the array to store response
$response = [];


$link = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
if (!$link) {
    die("Connection failed: " . mysqli_connect_error());
}

try {
    // Check if the user is logged in
    if (!isset($_SESSION['id'])) {
        throw new Exception("User not logged in");
    }

    // Get the user's ID
    $userId = $_SESSION["id"];

    // Create SQL statement
    $sql = "SELECT * FROM characters WHERE user_id = ?";

    // Prepare the statement
    if ($stmt = mysqli_prepare($link, $sql)) {
        // Bind the parameters
        mysqli_stmt_bind_param($stmt, "i", $userId);

        // Execute the statement
        if (mysqli_stmt_execute($stmt)) {
            // Get the result
            $result = mysqli_stmt_get_result($stmt);

            // Fetch rows and add them to the response array
            while ($row = mysqli_fetch_assoc($result)) {
                $response[] = $row;
            }

            // Close statement and connection
            mysqli_stmt_close($stmt);
            mysqli_close($link);

        } else {
            throw new Exception("Failed to execute query");
        }
    } else {
        throw new Exception("Failed to prepare query");
    }
} catch (Exception $e) {
    // Catch any exceptions and add an error to the response
    $response = ["error" => $e->getMessage()];
} finally {
    // Ensure valid JSON is always returned
    echo json_encode($response);
    exit;
}
?>
