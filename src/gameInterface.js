const newGame = gameState => {
  setTimeout(() => {
    gameState.gameInitialized = true
    gameState.title = "Room title"
  }, 500);

  setTimeout(() => {
    gameState.players = Object.assign(
      {}, 
      gameState.players, 
      {'4': { id: 4, username: 'Tyler' }}
    );
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
