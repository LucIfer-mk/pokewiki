async function getPokeData() {
    const pokeName = document.getElementById("namePokemon").value;
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
        if (!response.ok) {
            throw new Error("101 Not Found! Something is Wrong 😢");
        }
        const data = await response.json();
        const pokemonImg =  data.sprites.front_default;
        const addImage = document.getElementById("pokemonImage")
        addImage.src =pokemonImg;

        const pokename = document.getElementById("pokeName");
        pokename.textContent=data.name
    } catch (error) {
        alert(error);
    }
}
