<?php
require_once "../config.php";
session_start();

// Set appropriate headers to indicate JSON content early
header('Content-Type: application/json');

// Initialize the array to store the response
$response = [];

// Check if character_id and json data are set in POST
if (!isset($_POST['character_id']) || !isset($_POST['json'])) {
    echo json_encode(['error' => 'Invalid request. Missing parameters.']);
    exit;
}

$characterID = $_POST['character_id']; // Character ID
$characterJson = $_POST['json']; // JSON data to update



$link = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
if (!$link) {
    die("Connection failed: " . mysqli_connect_error());
}

try {
    // Check if the user is logged in
    if (!isset($_SESSION['id'])) {
        throw new Exception("User not logged in");
    }

    $userID = $_SESSION['id']; // User ID from session

    // Create SQL statement to update the character's JSON for the logged-in user
    $sql = "UPDATE characters SET json = ? WHERE character_id = ? AND user_id = ?";

    // Prepare the statement
    if ($stmt = mysqli_prepare($link, $sql)) {
        // Bind the parameters: json string, character ID, and user ID
        mysqli_stmt_bind_param($stmt, "sii", $characterJson, $characterID, $userID);

        // Execute the statement
        if (mysqli_stmt_execute($stmt)) {
            // Check if any rows were affected
            if (mysqli_stmt_affected_rows($stmt) > 0) {
                $response = ['success' => 'Character updated successfully'];
            } else {
                throw new Exception("No rows updated. Either the character does not exist or you do not have permission to update it."  . $characterJson . $userID);
            }
        } else {
            throw new Exception("Failed to execute query");
        }

        // Close the statement
        mysqli_stmt_close($stmt);
    } else {
        throw new Exception("Failed to prepare query");
    }
} catch (Exception $e) {
    // Catch any exceptions and add an error to the response
    $response = ["error" => $e->getMessage()];
} finally {
    // Ensure the connection is closed and valid JSON is always returned
    mysqli_close($link);
    echo json_encode($response);
    exit;
}
?>
