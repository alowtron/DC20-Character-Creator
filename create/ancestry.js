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
    // Eventually check to see if "simple mode" is on.
    if (ancestry1 == "human") {
        document.getElementById('ancestryTrait1').innerHTML = "Attribute Increase"
        document.getElementById('ancestryTrait1Info').innerHTML = "Choose an Attribute, the chosen Attribute increases by 1 (up to the Attribute Limit)"
    
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