import PropTypes from "prop-types";
import getTypeColor from "../assets/colourType";

function Box({ setSelectedPokemon, pokemonData }) {
  return (
    <div className="h-auto w-full flex flex-col">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
        {pokemonData.map((pokemon) => (
          <div
            key={pokemon.id}
            className="bg-darkC text-lightC shadow-lg rounded-lg p-4 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedPokemon(pokemon)}
          >
            <img
              src={pokemon.boxImage}
              alt={pokemon.name}
              className="w-32 h-32"
            />
            <h3 className="text-lg font-bold mt-2 capitalize">
              {pokemon.name}
            </h3>
            <div className="flex space-x-2 mt-2">
              {pokemon.types.map((type, index) => (
                <span
                  key={index}
                  className={`px-2 py-1 text-sm rounded-b-lg text-white font-semibold ${getTypeColor(
                    type
                  )}`}
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Box.propTypes = {
  setSelectedPokemon: PropTypes.func.isRequired,
  pokemonData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      imageBox: PropTypes.string.isRequired,
      types: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default Box;
