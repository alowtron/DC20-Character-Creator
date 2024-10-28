<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DC20 Edit Trades</title>
</head>
<body>
    <h2>
        Trades:
    </h2>
    <p>
        
    </p>
    <div id="trades">
        Points Left to Spend:
        <div id="tradePoints">

        </div>
        <label>Trade 1</label>
        <br>
        <select id="trade1">
            <option value="alchemy">Alchemy</option>
            <option value="blacksmithing">Blacksmithing</option>
            <option value="brewing">Brewing</option>
            <option value="carpentry">Carpentry</option>
            <option value="cartography">Cartography</option>
            <option value="disguise">Disguise</option>
            <option value="gaming">Gaming</option>
            <option value="glassblowing">Glassblowing</option>
            <option value="herbalism">Herbalism</option>
            <option value="illustration">Illustration</option>
            <option value="jeweler">Jeweler</option>
            <option value="leatherworking">Leatherworking</option>
            <option value="lockpicking">Lockpicking</option>
            <option value="masonry">Masonry</option>
            <option value="musician">Musician</option>
            <option value="sculpting">Sculpting</option>
            <option value="theatre">Theatre</option>
            <option value="tinkering">Tinkering</option>
            <option value="weaving">Weaving</option>
            <option value="vehicles">Vehicles</option>
        </select>
        <br>
        <label>Trade 1 Level</label>
        <br>
        <input type="number" id="trade1Level" min="0" max="1" onclick="updateTrades()"></input>
        <br>
        <label>Trade 2</label>
        <br>
        <select id="trade2">
            <option value="alchemy">Alchemy</option>
            <option value="blacksmithing">Blacksmithing</option>
            <option value="brewing">Brewing</option>
            <option value="carpentry">Carpentry</option>
            <option value="cartography">Cartography</option>
            <option value="disguise">Disguise</option>
            <option value="gaming">Gaming</option>
            <option value="glassblowing">Glassblowing</option>
            <option value="herbalism">Herbalism</option>
            <option value="illustration">Illustration</option>
            <option value="jeweler">Jeweler</option>
            <option value="leatherworking">Leatherworking</option>
            <option value="lockpicking">Lockpicking</option>
            <option value="masonry">Masonry</option>
            <option value="musician">Musician</option>
            <option value="sculpting">Sculpting</option>
            <option value="theatre">Theatre</option>
            <option value="tinkering">Tinkering</option>
            <option value="weaving">Weaving</option>
            <option value="vehicles">Vehicles</option>
        </select>
        <br>
        <label>Trade 2 Level</label>
        <br>
        <input type="number" id="trade2Level" min="0" max="1" onclick="updateTrades()"></input>
        <br>
        <label>Trade 3</label>
        <br>
        <select id="trade3">
            <option value="alchemy">Alchemy</option>
            <option value="blacksmithing">Blacksmithing</option>
            <option value="brewing">Brewing</option>
            <option value="carpentry">Carpentry</option>
            <option value="cartography">Cartography</option>
            <option value="disguise">Disguise</option>
            <option value="gaming">Gaming</option>
            <option value="glassblowing">Glassblowing</option>
            <option value="herbalism">Herbalism</option>
            <option value="illustration">Illustration</option>
            <option value="jeweler">Jeweler</option>
            <option value="leatherworking">Leatherworking</option>
            <option value="lockpicking">Lockpicking</option>
            <option value="masonry">Masonry</option>
            <option value="musician">Musician</option>
            <option value="sculpting">Sculpting</option>
            <option value="theatre">Theatre</option>
            <option value="tinkering">Tinkering</option>
            <option value="weaving">Weaving</option>
            <option value="vehicles">Vehicles</option>
        </select>
        <br>
        <label>Trade 3 Level</label>
        <br>
        <input type="number" id="trade3Level" min="0" max="1" onclick="updateTrades()"></input>
    
    </div>
    <button onclick="next()">Next</button>
    <button onclick="save()">Save</button>
</body>

<script src="../sql/getCharacter.js" defer></script>
<script src="trades.js" defer></script>
<script src="../sql/updateCharacter.js" defer></script>
</html>