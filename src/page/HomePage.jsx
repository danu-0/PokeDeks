import { useEffect, useState } from "react";
import Box from "../HomeSection/Box";
import "../style/index.css";
import Search from "../HomeSection/Search";
import BoxDetails from "../HomeSection/BoxDetails";
import BoxDetailsMobile from "../HomeSection/BoxDetailsMobile";
import fetchPokemonData from "../data/Pokemon";
// import getStatColor from "../assets/colour.Stat";

function Home() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [search, setSearch] = useState("");
  const [pokemonData, setPokemonData] = useState([]); // Data dari API

  // Fetch Data Pokémon dari API
  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        const promises = Array.from({ length: 60 }, (_, i) => fetchPokemonData(i + 1));
        const fetchedPokemon = await Promise.all(promises);
  
        // Hanya ambil data yang berhasil
        setPokemonData(fetchedPokemon.filter(pokemon => pokemon !== null));
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };
  
    fetchAllPokemon();
  }, []);


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
