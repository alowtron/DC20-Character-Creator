<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DC20 Edit Save Masteries</title>
</head>
<body>
    <h2>
        Save Masteries:
    </h2>
    <p>
        
    </p>
    <div id="save">
        Points Left to Spend:
        <div id="attributePointsLeft">

        </div>
        <label>might save</label>
        <br>
        <input type="radio" id="mightSave" onclick="updateAttributePoints()"></input>
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
    <button onclick="next()">Next</button>
    <button onclick="save()">Save</button>
</body>

<script src="../sql/getCharacter.js" defer></script>
<script src="attributes.js" defer></script>
<script src="../sql/updateCharacter.js" defer></script>
</html>