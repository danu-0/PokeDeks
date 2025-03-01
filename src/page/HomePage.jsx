import { useEffect, useState } from "react";
import Box from "../HomeSection/Box";
import "../style/index.css";
import Search from "../HomeSection/Search";
import BoxDetails from "../HomeSection/BoxDetails";
import BoxDetailsMobile from "../HomeSection/BoxDetailsMobile";
import fetchPokemonData from "../data/Pokemon";
import getStatColor from "../assets/colour.Stat";

function Home() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [search, setSearch] = useState("");
  const [pokemonData, setPokemonData] = useState([]); // Data dari API

  // Fetch Data Pokémon dari API
  useEffect(() => {
    const fetchAllPokemon = async () => {
      let fetchedPokemon = [];
      for (let i = 1; i <= 60; i++) { // Ambil 60 Pokémon pertama
        const pokemon = await fetchPokemonData(i);
        if (pokemon) {
          fetchedPokemon.push({
            id: i,
            name: pokemon.name,
            description: pokemon.description,
            types: pokemon.types,
            stats: pokemon.stats.map(stat => ({
              name: stat.name.toUpperCase(),
              value: stat.value,
              color: getStatColor(stat.name)
            })),
            image: pokemon.image, 
            imageBox: pokemon.boxImage,
            evolutionChain: pokemon.evolutionChain,
          });
        }
      }
      setPokemonData(fetchedPokemon);
    };

    fetchAllPokemon();
  }, []);

  // Fungsi untuk menentukan warna berdasarkan stat
  // const getStatColor = (statName) => {
  //   const colors = {
  //     hp: "bg-greenE",
  //     speed: "bg-yellowE",
  //     attack: "bg-redE",
  //     defense: "bg-blueE",
  //   };
  //   return colors[statName.toLowerCase()] || "bg-red";
  // };

  // Filter berdasarkan pencarian
  const filterSearch = pokemonData.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="h-full flex flex-col lg:flex-row bg-laravel">
      {/* Bagian Kanan */}
      {/* Main Content Area */}
      <div className="flex flex-col h-screen px-5 lg:w-2/3 overflow-y-auto">
        <Search search={search} setSearch={setSearch}/>
        <Box setSelectedPokemon={setSelectedPokemon} pokemonData={filterSearch}/>
      </div>
      {/* Bagian Kanan */}
      {/* weeb */}
      <BoxDetails selectedPokemon={selectedPokemon}/>
      {/* mobile */}
      <BoxDetailsMobile selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon}/>
    </div>
  );
}

export default Home;
