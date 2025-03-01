const baseUrl = "https://pokeapi.co/api/v2/pokemon";
const fetchPokemonData = async (pokemonId) => {
  try {
    const res = await fetch(`${baseUrl}/${pokemonId}`);
    const data = await res.json();

    const name = data.name;
    const types = data.types.map((type) => type.type.name);
    const image =
      data.sprites.versions["generation-v"]["black-white"].animated
        .front_default;
    const boxImage =
      data.sprites.versions["generation-iv"].platinum.front_default;

    const statMapping = {
      hp: "HP",
      attack: "ATK",
      defense: "DEF",
      speed: "SPD",
    };

    const stats = data.stats
      .filter((stat) => Object.keys(statMapping).includes(stat.stat.name))
      .map((stat) => ({
        name: statMapping[stat.stat.name], // Ganti dengan singkatan
        value: stat.base_stat,
        color: getStatColor(stat.stat.name),
      }));

    const speciesRes = await fetch(data.species.url);
    const speciesData = await speciesRes.json();

    const descriptionEntry = speciesData.flavor_text_entries.find(
      (entry) => entry.language.name === "en"
    );
    const description = descriptionEntry
      ? descriptionEntry.flavor_text.replace(/\n|\f/g, " ")
      : "No description available.";

    // Fetch evolusi
    const evolutionRes = await fetch(speciesData.evolution_chain.url);
    const evolutionData = await evolutionRes.json();

    const evolutionChain = [];
    let evoData = evolutionData.chain;

    while (evoData) {
      const evoName = evoData.species.name;
      const evoImgRes = await fetch(
        `${baseUrl}/${evoName}`
      );
      const evoImgData = await evoImgRes.json();
      const evoImg =
        evoImgData.sprites.versions["generation-v"]["black-white"].animated
          .front_default;

      evolutionChain.push({
        name: evoName,
        image: evoImg,
      });

      evoData = evoData.evolves_to.length ? evoData.evolves_to[0] : null;
    }

    return {
      name,
      types,
      stats,
      image,
      evolutionChain,
      description,
      boxImage,
    };
  } catch (error) {
    console.error(`Error fetching data for Pokémon ID ${pokemonId}:`, error);
    return null;
  }
};

const getStatColor = (statName) => {
  const colors = {
    hp: "bg-greenE",
    attack: "bg-redE",
    defense: "bg-blueE",
    speed: "bg-yellowE",
  };
  return colors[statName.toLowerCase()] || "bg-red";
};

export default fetchPokemonData;
