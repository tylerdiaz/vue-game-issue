const asyncCase = 1;

const newGame = (gameObj) => {
  console.log('Launched new game');

  if (asyncCase === 1) { // SET STUFF AT DIFFERENT TIMES
    setTimeout(() => {
      console.log('set game data');
      gameObj.gameInitialized = true;
      gameObj.title = 'Room title';
    }, 1200);
    setTimeout(() => {
      console.log('set player');
      let player = gameObj.gameState.players[4];
  
      if (!player) {
        player = gameObj.gameState.players[4] = { id: 4, username: 'Tyler' };
      }
    }, 1300);
  } else if (asyncCase === 2) { // SET EVERYTHING AT THE SAME TIME
    setTimeout(() => {
      console.log('set game data and player');
      gameObj.gameInitialized = true;
      gameObj.title = 'Room title';
      let player = gameObj.gameState.players[4];
  
      if (!player) {
        player = gameObj.gameState.players[4] = { id: 4, username: 'Tyler' };
      }
    }, 1300);
  }

  return { some: 'game', object: 'goes', in: 'here' };
}

export default () => {
  console.log('Created new game interface');

  let game = null;
  let gameObj = {
    gameTitle: '',
    gameInitialized: false,
    gameState: {
      players: {},
    },
    launch() {
      if (!game) {
        game = newGame(gameObj);
      }
    },
  };

  return gameObj;
}