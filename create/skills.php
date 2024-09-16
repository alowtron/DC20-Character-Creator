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
        <h3>
            1 point skills
        </h3>
        <label>Awareness</label>
        <br>
        <input type="number" id="awareness" min="0" max="1" onclick="updateSkills()"></input>
        <br>
        <label>Athletics</label>
        <br>
        <input type="number" id="athletics" min="0" max="1" onclick="updateSkills()"></input>
        <br>
        <label>Intimidation</label>
        <br>
        <input type="number" id="intimidation" min="0" max="1" onclick="updateSkills()"></input>
        <br>
        <label>Acrobatics</label>
        <br>
        <input type="number" id="acrobatics" min="0" max="1" onclick="updateSkills()"></input>
        <br>
        <label>Trickery</label>
        <br>
        <input type="number" id="trickery" min="0" max="1" onclick="updateSkills()"></input>
        <br>
        <label>Stealth</label>
        <br>
        <input type="number" id="stealth" min="0" max="1" onclick="updateSkills()"></input>
        <br>
        <label>Animal</label>
        <br>
        <input type="number" id="animal" min="0" max="1" onclick="updateSkills()"></input>
        <br>
        <label>Influence</label>
        <br>
        <input type="number" id="influence" min="0" max="1" onclick="updateSkills()"></input>
        <br>
        <label>Insight</label>
        <br>
        <input type="number" id="insight" min="0" max="1" onclick="updateSkills()"></input>
        <br>
        <label>Investigation</label>
        <br>
        <input type="number" id="investigation" min="0" max="1" onclick="updateSkills()"></input>
        <br>
        <label>Medicine</label>
        <br>
        <input type="number" id="medicine" min="0" max="1" onclick="updateSkills()"></input>
        <br>
        <label>Survival</label>
        <br>
        <input type="number" id="survival" min="0" max="1" onclick="updateSkills()"></input>
        <br>

        <h3>
            0.5 point skills
        </h3>
        <label>Arcana</label>
        <br>
        <input type="number" id="arcana" min="0" max="1" onclick="updateSkills()"></input>
        <br>
        <label>History</label>
        <br>
        <input type="number" id="history" min="0" max="1" onclick="updateSkills()"></input>
        <br>
        <label>Nature</label>
        <br>
        <input type="number" id="nature" min="0" max="1" onclick="updateSkills()"></input>
        <br>
        <label>Occultism</label>
        <br>
        <input type="number" id="occultism" min="0" max="1" onclick="updateSkills()"></input>
        <br>
        <label>Religion</label>
        <br>
        <input type="number" id="religion" min="0" max="1" onclick="updateSkills()"></input>
        <br>

    </div>
    <button onclick="next()">Next</button>
    <button onclick="save()">Save</button>
</body>

<script src="../sql/getCharacter.js" defer></script>
<script src="skills.js" defer></script>
<script src="../sql/updateCharacter.js" defer></script>
</html>