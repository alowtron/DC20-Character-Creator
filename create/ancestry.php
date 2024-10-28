<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DC20 Edit Ancestry</title>
</head>
<body>
    <h2>
        Ancestries:
    </h2>
    <p>
        
    </p>
    <div id="ancestries">
        Points Left to Spend:
        <div id="ancestriesPoints">

        </div>
        <label>ancestry 1</label>
        <br>
        <select id="ancestry1">
            <option value="human">Human</option>
            <option value="elf">Elf</option>
            <option value="dwarf">Dwarf</option>
            <option value="halfling">Halfling</option>
            <option value="gnome">gnome</option>
            <option value="orc">Orc</option>
            <option value="dragonborn">Dragonborn</option>
            <option value="giantborn">Giantborn</option>
            <option value="angelborn">Angelborn</option>
            <option value="fiendborn">Fiendborn</option>
            <option value="beastborn">Beastborn</option>
        </select>
        <br>
    
    </div>
    <button onclick="next()">Next</button>
    <button onclick="save()">Save</button>
</body>

<script src="../sql/getCharacter.js" defer></script>
<script src="ancestry.js" defer></script>
<script src="../sql/updateCharacter.js" defer></script>
</html>