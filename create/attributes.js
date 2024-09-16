async function initialize() {
    // Wait for getCharacter to finish and return characterInfo
    await getCharacter();

    // Now that characterInfo is available, you can safely use it
    if (characterInfo['might_save'] == false) {
        document.getElementById('mightSave').value = on
    } else {
        document.getElementById('might').value = -2
    }
    if (characterInfo['agility'] != -10) {
        document.getElementById('agility').value = characterInfo['agility']
    } else {
        document.getElementById('agility').value = -2
    }
    if (characterInfo['charisma'] != -10) {
        document.getElementById('charisma').value = characterInfo['charisma']
    } else {
        document.getElementById('charisma').value = -2
    }
    if (characterInfo['intelligence'] != -10) {
        document.getElementById('intelligence').value = characterInfo['intelligence']
    } else {
        document.getElementById('intelligence').value = -2
    }
    updateAttributePoints()
    
}

function attributePoints() {
    let points =  0 - parseInt(document.getElementById('might').value) - parseInt(document.getElementById('agility').value) - parseInt(document.getElementById('charisma').value) - parseInt(document.getElementById('intelligence').value) + 4
    return points
}

function updateSaveMasteries() {
    document.getElementById('attributePointsLeft').innerHTML = attributePoints()
}

// Call the initialize function to ensure it runs after getCharacter
initialize()


async function Next() {
    characterInfo['might'] = document.getElementById('might').value
    characterInfo['agility'] = document.getElementById('agility').value
    characterInfo['charisma'] = document.getElementById('charisma').value
    characterInfo['intelligence'] = document.getElementById('intelligence').value
    await updateCharacter()
    window.location.href = `saveMasteries.php?character_id=${character['character_id']}`
}

async function save() {
    characterInfo['might'] = document.getElementById('might').value
    characterInfo['agility'] = document.getElementById('agility').value
    characterInfo['charisma'] = document.getElementById('charisma').value
    characterInfo['intelligence'] = document.getElementById('intelligence').value
    await updateCharacter()
}