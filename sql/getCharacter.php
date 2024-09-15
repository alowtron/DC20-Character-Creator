<?php
require_once "../config.php";
session_start();

// Set appropriate headers to indicate JSON content early
header('Content-Type: application/json');

// Initialize the array to store response
$response = [];

$characterID = $_POST['character_id']; // Corrected array access

$link = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
if (!$link) {
    die("Connection failed: " . mysqli_connect_error());
}

try {
    // Check if the user is logged in
    if (!isset($_SESSION['id'])) {
        throw new Exception("User not logged in");
    }

    // Create SQL statement
    $sql = "SELECT * FROM characters WHERE character_id = ?";

    // Prepare the statement
    if ($stmt = mysqli_prepare($link, $sql)) {
        // Bind the parameters
        mysqli_stmt_bind_param($stmt, "i", $characterID);

        // Execute the statement
        if (mysqli_stmt_execute($stmt)) {
            // Get the result
            $result = mysqli_stmt_get_result($stmt);

            // Fetch rows and add them to the response array
            while ($row = mysqli_fetch_assoc($result)) {
                $response[] = $row;
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
