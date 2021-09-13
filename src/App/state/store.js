import { useReducer } from "react";
import { GameContext } from "./context";
import { GameReducer } from "./reducer";

function Store(props) {
  const initialGameState = {
    active: false,
    players: {
      player1: {
        name: "",
        score: 0,
        letter: ""
      },
      player2: {
        name: "",
        score: 0,
        letter: ""
      }
    },
    online: {
      active: true,
      host: "",
      roomID: "",
      playerID: ""
    },
    offline: {
      active: false,
    },
    turn: {
      active: true,
      letter: "X"
    },
    numberOfRounds: 2,
    board: {
      size: 3,
      state: [],
    },
    winningIndices: [
      [1, 2, 3],
      [1, 5, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 5, 7],
      [3, 6, 9],
      [4, 5, 6],
      [7, 8, 9],
    ],
    spectators: [],
    screens: {
      welcomeScreen: true,
      lobbyScreen: false,
      gameScreen: false
    }
  };
  const [gameState, setGameState] = useReducer(GameReducer, initialGameState);

  const intiateGameState = () => {
    for (let i = 0; i < Math.pow(initialGameState.board.size, 2); i++) {
      initialGameState.board.state.push("")
    }
  }
  intiateGameState()



  return (
    <GameContext.Provider
      value={{
        gameState,
        setGameState,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
}

export default Store;
