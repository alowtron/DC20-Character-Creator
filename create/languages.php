<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DC20 Edit Languages</title>
</head>
<body>
    <h2>
        Languages:
    </h2>
    <p>
        
    </p>
    <div id="language">
        Points Left to Spend:
        <div id="languagePoints">

        </div>
        <label>Language 2</label>
        <br>
        <select id="language2">
            <option value="human">Human</option>
            <option value="dwarven">Dwarven</option>
            <option value="elvish">Elvish</option>
            <option value="gnomish">Gnomish</option>
            <option value="halfling">Halfling</option>
            <option value="orcish">Orcish</option>
            <option value="giant">Giant</option>
            <option value="draconic">Draconic</option>
            <option value="fey">Fey</option> 
            <option value="elemental">Elemental</option>
            <option value="celestial">Celestial</option>
            <option value="fiend">Fiend</option>
            <option value="deep speech">Deep Speech</option>
        </select>
        <br>
        <label>Language 2 Level</label>
        <br>
        <input type="number" id="language2Level" min="0" max="2" onclick="updateLanguages()"></input>
        <br>

        <label>Language 3</label>
        <br>
        <select id="language3">
            <option value="human">Human</option>
            <option value="dwarven">Dwarven</option>
            <option value="elvish">Elvish</option>
            <option value="gnomish">Gnomish</option>
            <option value="halfling">Halfling</option>
            <option value="orcish">Orcish</option>
            <option value="giant">Giant</option>
            <option value="draconic">Draconic</option>
            <option value="fey">Fey</option> 
            <option value="elemental">Elemental</option>
            <option value="celestial">Celestial</option>
            <option value="fiend">Fiend</option>
            <option value="deep speech">Deep Speech</option>
        </select>
        <br>
        <label>Language 3 Level</label>
        <br>
        <input type="number" id="language3Level" min="0" max="2" onclick="updateLanguages()"></input>
    
    </div>
    <button onclick="next()">Next</button>
    <button onclick="save()">Save</button>
</body>

<script src="../sql/getCharacter.js" defer></script>
<script src="languages.js" defer></script>
<script src="../sql/updateCharacter.js" defer></script>
</html>