async function initialize() {
    // Wait for getCharacter to finish and return characterInfo
    await getCharacter();

    // Now that characterInfo is available, you can safely use it
    document.getElementById('awareness').value = characterInfo['awareness']
    document.getElementById('athletics').value = characterInfo['athletics']
    document.getElementById('intimidation').value = characterInfo['intimidation']
    document.getElementById('acrobatics').value = characterInfo['acrobatics']
    document.getElementById('trickery').value = characterInfo['trickery']
    document.getElementById('stealth').value = characterInfo['stealth']
    document.getElementById('animal').value = characterInfo['animal']
    document.getElementById('influence').value = characterInfo['influence']
    document.getElementById('insight').value = characterInfo['insight']
    document.getElementById('investigation').value = characterInfo['investigation']
    document.getElementById('medicine').value = characterInfo['medicine']
    document.getElementById('survival').value = characterInfo['survival']

    document.getElementById('arcana').value = characterInfo['arcana']
    document.getElementById('history').value = characterInfo['history']
    document.getElementById('nature').value = characterInfo['nature']
    document.getElementById('occultism').value = characterInfo['occultism']
    document.getElementById('religion').value = characterInfo['religion']

    updateSkills()
    
}

function skillPoints() {
    let points =  5 + parseInt(characterInfo['intelligence'])
    if (document.getElementById('awareness').value == 1) {
        points -= 1
    }
    if (document.getElementById('athletics').value == 1) {
        points -= 1
    }
    if (document.getElementById('intimidation').value == 1) {
        points -= 1
    }
    if (document.getElementById('acrobatics').value == 1) {
        points -= 1
    }
    if (document.getElementById('trickery').value == 1) {
        points -= 1
    }
    if (document.getElementById('stealth').value == 1) {
        points -= 1
    }
    if (document.getElementById('animal').value == 1) {
        points -= 1
    }
    if (document.getElementById('influence').value == 1) {
        points -= 1
    }
    if (document.getElementById('insight').value == 1) {
        points -= 1
    }
    if (document.getElementById('investigation').value == 1) {
        points -= 1
    }
    if (document.getElementById('medicine').value == 1) {
        points -= 1
    }
    if (document.getElementById('survival').value == 1) {
        points -= 1
    }

    if (document.getElementById('arcana').value == 1) {
        points -= 0.5
    }
    if (document.getElementById('history').value == 1) {
        points -= 0.5
    }
    if (document.getElementById('nature').value == 1) {
        points -= 0.5
    }
    if (document.getElementById('occultism').value == 1) {
        points -= 0.5
    }
    if (document.getElementById('religion').value == 1) {
        points -= 0.5
    }


    return points
}

function updateSkills() {
    document.getElementById('skillPoints').innerHTML = skillPoints()
}

// Call the initialize function to ensure it runs after getCharacter
initialize()


async function next() {
    characterInfo['awareness'] = document.getElementById('awareness').value
    characterInfo['athletics'] = document.getElementById('athletics').value
    characterInfo['intimidation'] = document.getElementById('intimidation').value
    characterInfo['acrobatics'] = document.getElementById('acrobatics').value
    characterInfo['trickery'] = document.getElementById('trickery').value
    characterInfo['stealth'] = document.getElementById('stealth').value
    characterInfo['animal'] = document.getElementById('animal').value
    characterInfo['influence'] = document.getElementById('influence').value
    characterInfo['insight'] = document.getElementById('insight').value
    characterInfo['investigation'] = document.getElementById('investigation').value 
    characterInfo['medicine'] = document.getElementById('medicine').value
    characterInfo['survival'] = document.getElementById('survival').value 

    characterInfo['arcana'] = document.getElementById('arcana').value
    characterInfo['history'] = document.getElementById('history').value
    characterInfo['nature'] = document.getElementById('nature').value
    characterInfo['occultism'] = document.getElementById('occultism').value
    characterInfo['religion'] = document.getElementById('religion').value
    await updateCharacter()
    window.location.href = `trades.php?character_id=${character['character_id']}`
}

async function save() {
    characterInfo['awareness'] = document.getElementById('awareness').value
    characterInfo['athletics'] = document.getElementById('athletics').value
    characterInfo['intimidation'] = document.getElementById('intimidation').value
    characterInfo['acrobatics'] = document.getElementById('acrobatics').value
    characterInfo['trickery'] = document.getElementById('trickery').value
    characterInfo['stealth'] = document.getElementById('stealth').value
    characterInfo['animal'] = document.getElementById('animal').value
    characterInfo['influence'] = document.getElementById('influence').value
    characterInfo['insight'] = document.getElementById('insight').value
    characterInfo['investigation'] = document.getElementById('investigation').value 
    characterInfo['medicine'] = document.getElementById('medicine').value
    characterInfo['survival'] = document.getElementById('survival').value 

    characterInfo['arcana'] = document.getElementById('arcana').value
    characterInfo['history'] = document.getElementById('history').value
    characterInfo['nature'] = document.getElementById('nature').value
    characterInfo['occultism'] = document.getElementById('occultism').value
    characterInfo['religion'] = document.getElementById('religion').value
    await updateCharacter()
}