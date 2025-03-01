const getStatColor = (statName) => {
    const colors = {
      hp: "bg-greenE",
      speed: "bg-yellowE",
      attack: "bg-redE",
      defense: "bg-blueE",
    };
    return colors[statName.toLowerCase()] || "bg-red";
  };

export default getStatColor;