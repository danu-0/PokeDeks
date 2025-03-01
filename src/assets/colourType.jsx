const getTypeColor = (type) => {
  const colors = {
    grass: "bg-green-500",
    fire: "bg-red-500",
    water: "bg-blue-500",
    electric: "bg-yellow-400",
    bug: "bg-lime-500",
    normal: "bg-gray-500",
    poison: "bg-purple-500",
    ground: "bg-yellow-700",
    fairy: "bg-pink-500",
    fighting: "bg-orange-500",
    psychic: "bg-pink-400",
    rock: "bg-gray-700",
    ghost: "bg-indigo-600",
    dragon: "bg-indigo-800",
    dark: "bg-gray-900",
    steel: "bg-gray-400",
    flying: "bg-blue-300",
    ice: "bg-cyan-400",
  };

  return colors[type.toLowerCase()] || "bg-gray-500";
};

export default getTypeColor;
