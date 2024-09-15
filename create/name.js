async function initialize() {
    // Wait for getCharacter to finish and return characterInfo
    await getCharacter();

    // Now that characterInfo is available, you can safely use it
    document.getElementById('input').value = characterInfo['character_name'];
}

// Call the initialize function to ensure it runs after getCharacter
initialize();

async function next() {
    characterInfo['character_name'] = document.getElementById('input').value
    await updateCharacter()
    window.location.href = `attributes.php?character_id=${character['character_id']}`
}
async function save() {
    characterInfo['character_name'] = document.getElementById('input').value
    await updateCharacter()
}