$("#btn").click(function () {
    var pokeballSound = new Audio("audio/pokeball_sound_effects.mp3");
    pokeballSound.volume = 0.2;
    pokeballSound.play();
    let random = Math.floor(Math.random() * 100) + 1;
    getPoke(random)
})

function getPoke(id) {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    fetch(url, options)
        .then( response => response.json() ) /* review was created successfully */
        .then(data => {
            console.log(data)
            displayPoke(data);})
        .catch( error => console.error(error) ); /* handle errors */
}


function displayPoke(data){

    let output = `
    <div>
    <img src="${data.sprites.front_default}">
    <h4>Name: ${data.forms[0].name}</h4>
    <h4>Height: ${data.height}</h4>
    <h4>Weight: ${data.weight}</h4>
    <h4>Type: ${data.types[0].type.name}</h4>
    <h4>Abilities: ${data.abilities[0].ability.name}</h4>
    </div>
    `;
    $("#pokemon-container").append(output);
}