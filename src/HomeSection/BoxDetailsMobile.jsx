import PropTypes from "prop-types";
import getTypeColor from "../assets/colourType";

function BoxDetailsMobile({ selectedPokemon, setSelectedPokemon }) {
  return (
    <div
      className={`w-full h-screen bg-laravel text-white p-4 fixed top-0 left-0 z-50 transition-all lg:hidden ${
        selectedPokemon ? "flex" : "hidden"
      } items-center justify-center`}
    >
      {selectedPokemon && (
        <div className="bg-darkC text-lightC w-11/12 max-w-md rounded-2xl shadow-lg p-6 flex flex-col items-center relative">
          {/* Tombol Close */}
          <button
            className="absolute top-4 right-4 text-redC text-2xl"
            onClick={() => setSelectedPokemon(null)}
          >
            ❌
          </button>

          {/* Gambar Pokémon */}
          <img
            src={selectedPokemon.image}
            alt={selectedPokemon.name}
            className="w-20 h-20w-2 object-contain drop-shadow-lg"
          />

          {/* Nama & Tipe Pokémon */}
          <h2 className="text-3xl font-bold mt-2">{selectedPokemon.name}</h2>
          <div className="flex justify-center space-x-2 mt-2">
            {selectedPokemon.types.map((type, index) => (
              <span
                key={index}
                className={`px-3 py-1 text-sm font-semibold rounded-full text-white ${getTypeColor(
                  type
                )}`}
              >
                {type}
              </span>
            ))}
          </div>

          {/* Deskripsi Pokémon */}
          <p className="mt-4 px-4 text-sm text-lightC text-center italic leading-relaxed">
            {selectedPokemon.description}
          </p>

          {/* Stats Pokémon */}
          <div className="mt-4 w-full">
            <h1 className="font-bold text-lg text-center">Stats</h1>
            <div className="grid grid-cols-2 gap-4 mt-2 w-full">
              {selectedPokemon.stats.length > 0 ? (
                selectedPokemon.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center bg-gray-100 p-3 rounded-lg shadow-md w-full"
                  >
                    <p className="text-sm font-semibold text-gray-600">
                      {stat.name.toUpperCase()}
                    </p>
                    <p className="text-lg font-bold text-blue-700">
                      {stat.value}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 col-span-2">
                  No stats available
                </p>
              )}
            </div>
          </div>

          {/* Evolusi Pokémon */}
          {selectedPokemon.evolutionChain &&
          selectedPokemon.evolutionChain.length > 0 ? (
            <div className="mt-6 w-full">
              <h1 className="font-bold text-lg text-center">Evolution</h1>
              <div className="flex flex-wrap justify-center gap-4 mt-2">
                {selectedPokemon.evolutionChain.map((evo, index) => (
                  <div
                    key={index}
                    className="h-24 w-24 flex flex-col items-center p-2 bg-gray-100 rounded-xl shadow-md hover:scale-105 transition-transform"
                  >
                    <img
                      src={evo.image}
                      alt={evo.name}
                      className="h-16 w-16 object-contain"
                    />
                    <p className="text-xs text-gray-700 font-medium">
                      {evo.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-4">
              No evolutionChain data available
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// PropTypes
BoxDetailsMobile.propTypes = {
  selectedPokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      })
    ),
    evolutionChain: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
    ),
  }),
  setSelectedPokemon: PropTypes.func.isRequired,
};

export default BoxDetailsMobile;
