<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DC20 Edit Skills</title>
</head>
<body>
    <h2>
        Skills:
    </h2>
    <p>
        
    </p>
    <div id="skills">
        Points Left to Spend:
        <div id="skillPoints">

        </div>
        <h2>
            1 point skills
        </h2>
        <label>Awareness</label>
        <br>
        <input type="checkbox" id="awareness" onclick="updateSkills()"></input>
        <br>
        <label>agility save</label>
        <br>
        <input type="checkbox" id="agilitySave" onclick="updateSaveMasteries()"></input>
        <br>
        <label>charisma save</label>
        <br>
        <input type="checkbox" id="charismaSave" onclick="updateSaveMasteries()"></input>
        <br>
        <label>intelligence save</label>
        <br>
        <input type="checkbox" id="intelligenceSave" onclick="updateSaveMasteries()"></input>
    </div>
    <button onclick="next()">Next</button>
    <button onclick="save()">Save</button>
</body>

<script src="../sql/getCharacter.js" defer></script>
<script src="skills.js" defer></script>
<script src="../sql/updateCharacter.js" defer></script>
</html>