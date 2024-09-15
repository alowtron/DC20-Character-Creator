<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DC20 Edit Name</title>
</head>
<body>
    <h2>
        Name:
    </h2>
    <input id="input"></input>
    <button onclick="next()">Next</button>
    <button onclick="save()">Save</button>
</body>

<script src="../sql/getCharacter.js" defer></script>
<script src="name.js" defer></script>
<script src="../sql/updateCharacter.js" defer></script>
</html>