async function listCharacters() {
    try {
        const response = await fetch('../sql/characterListRetrieval.php')

        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }

        // Parse the JSON from the response
        const data = await response.json()

        console.log(data); // Handle the JSON data

        // Build the HTML for all characters first
        let charactersHTML = '';
        for (const character of data) {
            // Parse the `json` field to extract character details
            const characterDetails = JSON.parse(character['json'])
            // Append the character name to the HTML
            charactersHTML += `<button onclick="openCharacter(${character['character_id']}, ${character['user_id']})">${characterDetails['character_name']}</button><br>`
        }

        // Append the built HTML once to avoid multiple reflows
        document.getElementById('characterList').innerHTML = charactersHTML

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error)
    }
}

listCharacters()

function openCharacter(character_id, user_id) {
    window.location.href = `character.php?character_id=${character_id}`
}
