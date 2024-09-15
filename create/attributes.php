<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DC20 Edit Attributes</title>
</head>
<body>
    <h2>
        Attributes:
    </h2>
    <p>
        
    </p>
    <div id="attributes">
        Points Left to Spend:
        <div id="attributePointsLeft">

        </div>
        <label>might</label>
        <br>
        <input type="number" id="might" min="-2" max="3" onclick="updateAttributePoints()"></input>
        <br>
        <label>agility</label>
        <br>
        <input type="number" id="agility" min="-2" max="3" onclick="updateAttributePoints()"></input>
        <br>
        <label>charisma</label>
        <br>
        <input type="number" id="charisma" min="-2" max="3" onclick="updateAttributePoints()"></input>
        <br>
        <label>intelligence</label>
        <br>
        <input type="number" id="intelligence" min="-2" max="3" onclick="updateAttributePoints()"></input>
    </div>
    <button onclick="Next()">Next</button>
    <button onclick="save()">Save</button>
</body>

<script src="../sql/getCharacter.js" defer></script>
<script src="attributes.js" defer></script>
<script src="../sql/updateCharacter.js" defer></script>
</html>