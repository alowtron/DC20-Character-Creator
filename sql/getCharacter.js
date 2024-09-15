let character, characterInfo;

async function getCharacter() {
    const urlParams = new URLSearchParams(window.location.search);
    const character_id = urlParams.get('character_id');
    
    console.log(character_id);

    let allData = new FormData();
    allData.append("character_id", character_id);


    // Perform the fetch request and wait for the result
    const response = await fetch("../sql/getCharacter.php", {
        method: 'POST',
        body: allData
    });

    // Wait for the response to be processed as text
    const processedData = await response.text();
    
    // Parse the response to get the character information
    character = JSON.parse(processedData)[0];
    console.log(character);
    
    characterInfo = JSON.parse(character['json']);
    console.log(characterInfo);

    // Return the characterInfo object
    return character, characterInfo;
}
