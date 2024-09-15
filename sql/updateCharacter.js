async function updateCharacter() {
    // Convert characterInfo back to a JSON string
    const jsonString = JSON.stringify(characterInfo);
    
    // Create FormData object and append the necessary data
    let allData = new FormData()
    allData.append("character_id", character['character_id'])
    allData.append("json", jsonString)  // Add the JSON string

    // Perform the fetch request to update the character
    const response = await fetch("../sql/updateCharacter.php", {
        method: 'POST',
        body: allData
    })

    // Wait for the response and log it
    const processedData = await response.text()
    console.log(processedData)

    // Handle response if necessary (optional)
}

// Example: assuming character and characterInfo are already obtained
getCharacter().then(() => {
    // Modify characterInfo as needed
    characterInfo.newAttribute = "new value" // Example modification
    
    // Call the function to update the character info
    updateCharacter(character.character_id, characterInfo)
});
