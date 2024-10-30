async function initialize() {
    // Wait for getCharacter to finish and return characterInfo
    await getCharacter();

    // Now that characterInfo is available, you can safely use it
    document.getElementById('ancestry1').value = characterInfo['ancestry1']


    

    updateAncestries()
    
}

function ancestryPoints() {
    let points =  5
    if (document.getElementById('ancestry2Level').value != 0) {
        points -= document.getElementById('ancestry2Level').value
    }
    if (document.getElementById('ancestry3Level').value != 0) {
        points -= document.getElementById('ancestry3Level').value
    }

    return points
}

function updateAncestries() {
    document.getElementById('ancestriesPoints').innerHTML = ancestryPoints()
}

// Call the initialize function to ensure it runs after getCharacter
initialize()


document.getElementById('ancestry1').addEventListener('change', function() {
    let ancestry1 = document.getElementById('ancestry1').value
    console.log(ancestry1)
    // clear the display traits section
    document.getElementById('ancestryTrait0').innerHTML = ""
    document.getElementById('ancestryTrait0Info').innerHTML = ""
    document.getElementById('ancestryTrait1').innerHTML = ""
    document.getElementById('ancestryTrait1Info').innerHTML = ""
    document.getElementById('ancestryTrait2').innerHTML = ""
    document.getElementById('ancestryTrait2Info').innerHTML = ""
    document.getElementById('ancestryTrait3').innerHTML = ""
    document.getElementById('ancestryTrait3Info').innerHTML = ""
    document.getElementById('ancestryTrait4').innerHTML = ""
    document.getElementById('ancestryTrait4Info').innerHTML = ""
    document.getElementById('ancestryTrait5').innerHTML = ""
    document.getElementById('ancestryTrait5Info').innerHTML = ""
    document.getElementById('ancestryTrait6').innerHTML = ""
    document.getElementById('ancestryTrait6Info').innerHTML = ""
    document.getElementById('ancestryTrait7').innerHTML = ""
    document.getElementById('ancestryTrait7Info').innerHTML = ""
    document.getElementById('ancestryTrait8').innerHTML = ""
    document.getElementById('ancestryTrait8Info').innerHTML = ""
    // Eventually check to see if "simple mode" is on.
    if (ancestry1 == "human") {
        document.getElementById('ancestryTrait0').innerHTML = "Undying"
        document.getElementById('ancestryTrait0Info').innerHTML = "You have ADV on Saves against the Doomed Condition"
        document.getElementById('ancestryTrait1').innerHTML = "Attribute Increase"
        document.getElementById('ancestryTrait1Info').innerHTML = "Choose an Attribute, the chosen Attribute increases by 1 (up to the Attribute Limit)"
        document.getElementById('ancestryTrait2').innerHTML = "Resilience"
        document.getElementById('ancestryTrait2Info').innerHTML = "Choose an Attribute, the chosen Attribute gains Save Mastery"
        document.getElementById('ancestryTrait3').innerHTML = "Human Resolve"
        document.getElementById('ancestryTrait3Info').innerHTML = "Your Death's Door Threshold value is expanded by 1"
    }
})

async function next() {
    characterInfo['ancestry2'] = document.getElementById('ancestry2').value
    characterInfo['ancestry2_level'] = document.getElementById('ancestry2Level').value
    characterInfo['ancestry3'] = document.getElementById('ancestry3').value
    characterInfo['ancestry3_level'] = document.getElementById('ancestry3Level').value

    await updateCharacter()
    window.location.href = `language.php?character_id=${character['character_id']}`
}

async function save() {
    characterInfo['ancestry2'] = document.getElementById('ancestry2').value
    characterInfo['ancestry2_level'] = document.getElementById('ancestry2Level').value
    characterInfo['ancestry3'] = document.getElementById('ancestry3').value
    characterInfo['ancestry3_level'] = document.getElementById('ancestry3Level').value

    await updateCharacter()
}