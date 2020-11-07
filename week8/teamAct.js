const url = "https://pokeapi.co/api/v2/type/5";

function convertToJson(response) {
    if (response.ok == true) {
        return response.json();
    } else {
        throw new Error(response.statusText);
    }
}

async function getPokemonAsync(url) {
    let pokemonData = await fetch(url).then(convertToJson);
    let pokemon = pokemonData.pokemon;
    displayPokemon(pokemon);
}

function displayPokemon(list) {
    // console.log(list);
    const listElement = document.getElementById("theList");

    const newArray = list.map((item) => {
        return `<li data-url = "${item.pokemon.url}">${item.pokemon.name}</li>`;
    });
    listElement.innerHTML = newArray.join("");
    //   console.log(newArray);

}

async function pokemonClicked(event) {
    console.log(event.target.dataset.url);
    const details = await fetch(event.target.dataset.url).then(convertToJson);
    console.log(details);
    //   console.log(currentTarget);
    displayDetails(details);
}

function displayDetails(details) {
    let section = document.getElementById("details");
    document.getElementById('theList').style.opacity = '0';

    let name = details.name;
    let type1 = details.types[0].type.name;
    //let type2 = details.types[1].type.name;
    //let pic = details.sprite;
    section.innerHTML = name + ' ' + type1;
    section.addEventListener('click', function() {
        document.getElementById('details').innerHTML = '';
        document.getElementById('theList').style.opacity = '100';
    });
}

getPokemonAsync(url);
document.getElementById("theList").addEventListener('click', pokemonClicked);