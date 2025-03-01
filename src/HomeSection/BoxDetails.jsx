import propTypes from "prop-types";
import getTypeColor from "../assets/colourType";

function BoxDetails({ selectedPokemon }) {
  return (
    <div className="w-1/4 h-[calc(100vh-200px)] rounded-t-3xl text-lightC shadow-[0_1px_10px_#D84040] bg-darkC p-4 fixed right-16 top-40 transition-all hidden lg:block">
      {selectedPokemon ? (
        <div className="flex flex-col h-full">
          <div className="w-40 h-40  mx-auto -mt-32">
            <img
              src={selectedPokemon.image}
              alt={selectedPokemon.name}
              className="pixelated h-full w-full drop-shadow-[0_1px_2px_#D84040]"
            />
          </div>
          <h2 className="text-2xl font-bold mt-4 text-center justify-start">
            {selectedPokemon.name}
          </h2>
          <div className="flex justify-center space-x-2">
            {selectedPokemon.types.map((type, index) => (
              <span
                key={index}
                className={`px-2 py-1 text-sm rounded-b-md text-white font-semibold ${getTypeColor(
                  type
                )}`}
              >
                {type}
              </span>
            ))}
          </div>

          <div className="mt-2 h-full w-full flex flex-col p-2 text-justify items-center justify-between overflow-y-auto scrollbar-hide">
            <p className="text-center px-2">{selectedPokemon.description}</p>
            <div className="flex flex-col justify-start items-center mt-2">
              <h1 className="font-bold text-lg">Stats</h1>
              <div className="grid grid-cols-4 gap-4 text-center w-full">
                {selectedPokemon.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center rounded-full h-20 justify-around bg-gray-300"
                  >
                    <p
                      className={`font-semibold rounded-full text-center text-xs m-1 p-2 ${
                        stat.name === "HP"
                          ? "bg-green-500"
                          : stat.name === "ATK"
                          ? "bg-red-500"
                          : stat.name === "DEF"
                          ? "bg-blue-500"
                          : stat.name === "SPD"
                          ? "bg-yellow-500"
                          : "bg-gray-400"
                      }`}
                    >
                      {stat.name}
                    </p>
                    <p className="text-darkC font-semibold">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-2 flex flex-col justify-start items-center">
              <h1 className="font-bold text-lg">Evolution</h1>
              <div className="flex flex-wrap gap-2 w-full h-32 justify-center items-center p-2 rounded-md">
                {selectedPokemon?.evolutionChain &&
                selectedPokemon.evolutionChain.length > 1 ? (
                  selectedPokemon.evolutionChain.map((evo, index) => (
                    <div
                      key={index}
                      className="h-20 w-20  flex flex-col items-center justify-end rounded-md p-1 shadow-md border-redC border"
                    >
                      <img
                        src={evo.image}
                        alt={evo.name}
                        className="w-16 h-16 pixelated"
                      />
                      <p className="text-white text-xs font-semibold">
                        {evo.name}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm">
                    No evolution available
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center relative text-gray-400 ml-6">
          <img
            src="fix.png"
            alt="No Dispal"
            className="w-44 h-44 mx-auto -mt-32 pixelated filter drop-shadow-[0_1px_3px_#F93827]"
          />
          <p className=" pt-32">Select a Pokemon to display here.</p>
        </div>
      )}
    </div>
  );
}

BoxDetails.propTypes = {
  selectedPokemon: propTypes.object,
};
export default BoxDetails;
