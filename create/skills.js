async function initialize() {
    // Wait for getCharacter to finish and return characterInfo
    await getCharacter();

    // Now that characterInfo is available, you can safely use it
    document.getElementById('awareness').value = characterInfo['awareness']
    document.getElementById('agilitySave').checked = characterInfo['agility_save']
    document.getElementById('charismaSave').checked = characterInfo['charisma_save']
    document.getElementById('intelligenceSave').checked = characterInfo['intelligence_save']

    updateSaveMasteries()
    
}

function attributePoints() {
    let points =  5 + characterInfo['intelligence']
    if (document.getElementById('mightSave').checked == true) {
        points -= 1
    }
    
    return points
}

function updateSkills() {
    document.getElementById('skillPoints').innerHTML = attributePoints()
}

// Call the initialize function to ensure it runs after getCharacter
initialize()


async function Next() {
    characterInfo['might_save'] = document.getElementById('mightSave').checked
    characterInfo['agility_save'] = document.getElementById('agilitySave').checked
    characterInfo['charisma_save'] = document.getElementById('charismaSave').checked
    characterInfo['intelligence_save'] = document.getElementById('intelligenceSave').checked
    await updateCharacter()
    window.location.href = `skills.php?character_id=${character['character_id']}`
}

async function save() {
    characterInfo['might_save'] = document.getElementById('mightSave').checked
    characterInfo['agility_save'] = document.getElementById('agilitySave').checked
    characterInfo['charisma_save'] = document.getElementById('charismaSave').checked
    characterInfo['intelligence_save'] = document.getElementById('intelligenceSave').checked
    await updateCharacter()
}