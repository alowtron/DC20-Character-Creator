async function initialize() {
    // Wait for getCharacter to finish and return characterInfo
    await getCharacter();

    // Now that characterInfo is available, you can safely use it
    document.getElementById('trade1').value = characterInfo['trade1']
    document.getElementById('trade1Level').value = characterInfo['trade1_level']
    document.getElementById('trade2').value = characterInfo['trade2']
    document.getElementById('trade2Level').value = characterInfo['trade2_level']
    document.getElementById('trade3').value = characterInfo['trade3']
    document.getElementById('trade3Level').value = characterInfo['trade3_level']
    

    updateTrades()
    
}

function tradePoints() {
    let points =  3
    if (document.getElementById('trade1Level').value != 0) {
        points -= document.getElementById('trade1Level').value
    }
    if (document.getElementById('trade2Level').value != 0) {
        points -= document.getElementById('trade2Level').value
    }
    if (document.getElementById('trade2Level').value != 0) {
        points -= document.getElementById('trade2Level').value
    }
    


    return points
}

function updateTrades() {
    document.getElementById('tradePoints').innerHTML = tradePoints()
}

// Call the initialize function to ensure it runs after getCharacter
initialize()


async function next() {
    characterInfo['trade1'] = document.getElementById('trade1').value
    characterInfo['trade1_level'] = document.getElementById('trade1Level').value
    characterInfo['trade2'] = document.getElementById('trade2').value
    characterInfo['trade2_level'] = document.getElementById('trade2Level').value
    characterInfo['trade3'] = document.getElementById('trade3').value
    characterInfo['trade3_level'] = document.getElementById('trade3Level').value

    await updateCharacter()
    window.location.href = `languages.php?character_id=${character['character_id']}`
}

async function save() {
    characterInfo['trade1'] = document.getElementById('trade1').value
    characterInfo['trade1_level'] = document.getElementById('trade1Level').value
    characterInfo['trade2'] = document.getElementById('trade2').value
    characterInfo['trade2_level'] = document.getElementById('trade2Level').value
    characterInfo['trade3'] = document.getElementById('trade3').value
    characterInfo['trade3_level'] = document.getElementById('trade3Level').value

    await updateCharacter()
}