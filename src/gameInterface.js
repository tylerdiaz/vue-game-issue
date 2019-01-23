const newGame = (gameState, setState) => {
  setTimeout(() => {
    setState(gameState, "gameInitialized", true);
    setState(gameState, "title", "Room title");
    console.log(setState);
  }, 500);

  setTimeout(() => {
    let player = gameState.players[4];

    if (!player) {
      setState(gameState.players, 4, { id: 4, username: "Tyler" });
    }
  }, 2500);

  return { some: "game", object: "goes", in: "here" };
};

export default () => {
  let gameInstance = null;

  return {
    gameTitle: "",
    gameInitialized: false,
    launch(gameState, setState) {
      if (!gameInstance) {
        gameInstance = newGame(gameState, setState);
      }
    }
  };
};
