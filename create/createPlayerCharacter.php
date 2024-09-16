<?php
// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once "../config.php";
session_start();

if (!isset($_SESSION["id"])) {
    die("Session ID is not set.");
}

// Prepare JSON data
$json = array(
    "character_name" => "Not Named",
    "class" => "",
    "subclass" => "",
    "ancestry" => "",
    "background" => "",
    "level" => -10,
    "combat_mastery" => -10,
    "prime" => -10,
    "awareness" => 0,
    "might" => -10,
    "might_save" => false,
    "athletics" => 0,
    "intimidation" => 0,
    "agility" => -10,
    "agility_save" => false,
    "acrobatics" => 0,
    "trickery" => 0,
    "stealth" => 0,
    "charisma" => -10,
    "charisma_save" => false,
    "animal" => 0,
    "influence" => 0,
    "insight" => 0,
    "intelligence" => -10,
    "intelligence_save" => false,
    "investigation" => 0,
    "medicine" => 0,
    "survival" => 0,
    "arcana" => 0,
    "history" => 0,
    "nature" => 0,
    "occultism" => 0,
    "religion" => 0,
    "stamina_points" => -10,
    "mana_points" => -10,
    "hit_points" => -10,
    "temp_hit_points" => -10,
    "physical_defense" => -10,
    "pdr" => -10,
    "mystical_defense" => -10,
    "mdr" => -10,
);
$json_json = json_encode($json);

$userId = $_SESSION["id"];

// Connect to the database using MySQLi
$link = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
if (!$link) {
    die("Connection failed: " . mysqli_connect_error());
}

// SQL query to insert data
$sql = "INSERT INTO characters (user_id, json) VALUES (?, ?)";

// Prepare the statement
$stmt = $link->prepare($sql);
if ($stmt === false) {
    die("Error preparing the SQL statement: " . $link->error);
}

// Bind the parameters
$bindResult = $stmt->bind_param("is", $userId, $json_json);
if ($bindResult === false) {
    die("Error binding parameters: " . $stmt->error);
}

// Execute the statement
$executeResult = $stmt->execute();
if ($executeResult === false) {
    die("Error executing the SQL statement: " . $stmt->error);
}

// Retrieve the last inserted ID
$lastId = $link->insert_id;

// Store the ID in the session
$_SESSION['character_id'] = $lastId;

// Close the statement and connection
$stmt->close();
$link->close();

// Confirm success
echo "Character Created Successfully!";

$stringID = strVal($lastId);
// Redirect to another page
header("Location: name.php?character_id=" . $stringID);
exit;
?>
