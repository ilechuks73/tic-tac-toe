export function handleCreateRoom() {

}

export function handleJoinRoom() {

}

export function handleStartGame() {

}

export function handlePlay(gameState, setGameState, index) {
  setGameState({
    type: "PLAY",
    payload: {
      index: index,
      letter: gameState.turn.letter
    }
  })
  setTimeout(() => {
    handleCheckForWin(gameState, setGameState, gameState.turn.letter)
    handleCheckForDraw(gameState)
    handleSwitchTurn(setGameState)
  }, 100);

}

export function handleSwitchTurn(setGameState) {
  setGameState({
    type: "SWITCH TURN"
  })
}

export function handleCheckForWin(gameState, setGameState, letter) {
  gameState.winningIndices.every((item) => {
    let winArray = [];
    item.every((item, index) => {
      if (gameState.board.state[(parseInt(item) - 1)] === letter) {
        winArray.push(true);
      }
      else {
        return false;
      }
      return true
    });
    if (winArray.length === 3) {
      alert(letter + " wins")
      handleUpdateScore(gameState, setGameState, letter)
      handleResetGameBoard(gameState)
      winArray = []
      return false;

    }
    else {
      console.log("no winner")
      winArray = [];
    }
    return true
  });
}

function handleCheckForDraw(gameState) {
  let count = 0
  gameState.board.state.forEach((item) => {
    if (item !== "") {
      count++
    }
  })
  if (count >= 9) {
    alert("draw")
    handleResetGameBoard(gameState)
  }
  else {
    console.log("no draw")
  }
}

function handleUpdateScore(gameState, setGameState, letter) {
  const state = gameState
  const players = Object.keys(state.players)
  players.forEach((item) => {
    if (state.players[item].letter === letter) {
      state.players[item].score++
    }
  })
}

export function handleResetGameBoard(gameState){
  const state = gameState

  state.board.state = []
  for (let i = 0; i < Math.pow(state.board.size, 2); i++) {
    state.board.state.push("")
  }
}