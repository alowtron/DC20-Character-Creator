async function initialize() {
    // Wait for getCharacter to finish and return characterInfo
    await getCharacter();

    // Now that characterInfo is available, you can safely use it
    document.getElementById('language2').value = characterInfo['language2']


    

    updateLanguages()
    
}

function languagePoints() {
    let points =  2
    if (document.getElementById('language2Level').value != 0) {
        points -= document.getElementById('language2Level').value
    }
    if (document.getElementById('language3Level').value != 0) {
        points -= document.getElementById('language3Level').value
    }

    


    return points
}

function updateLanguages() {
    document.getElementById('ancestriesPoints').innerHTML = languagePoints()
}

// Call the initialize function to ensure it runs after getCharacter
initialize()


async function next() {
    characterInfo['language2'] = document.getElementById('language2').value
    characterInfo['language2_level'] = document.getElementById('language2Level').value
    characterInfo['language3'] = document.getElementById('language3').value
    characterInfo['language3_level'] = document.getElementById('language3Level').value

    await updateCharacter()
    window.location.href = `languages.php?character_id=${character['character_id']}`
}

async function save() {
    characterInfo['language2'] = document.getElementById('language2').value
    characterInfo['language2_level'] = document.getElementById('language2Level').value
    characterInfo['language3'] = document.getElementById('language3').value
    characterInfo['language3_level'] = document.getElementById('language3Level').value

    await updateCharacter()
}