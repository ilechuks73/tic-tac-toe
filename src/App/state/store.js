import { useReducer } from "react";
import { GameContext } from "./context";

function Store(props) {
  const initialGameState = {
    active: false,
    online: {
      active: false,
      turn: {
        active: true,
        player: "",
      }
    },
    offline:{
      active: true,
      
    },
    turn: false,
    numberOfRounds: 0,
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
    players: [],
    spectators:[],
    screens:{
      welcomeScreen: true,
      lobbyScreen: false,
      gameScreen: false
    }
  };
  const [gameState, setGameState] = useReducer(reducer, initialGameState);

  const intiateGameState = ()=>{
    for (let i=0; i< Math.pow(initialGameState.board.size,2); i++){
      initialGameState.board.state.push("")
    }
  }
  intiateGameState()

  function reducer(state, { type, payload }) {
    
    switch (type) {

      case "INITIALIZE STATE":

      return {...state};

      case "START GAME":
        state.active = true
        return {...state};

      case "PLAY":
        state.board.state[payload.index] = payload.letter;
        return state;

      case "SWITCH TURN":
        if (state === "X") {
          state = "O";
        } else if (state === "O") {
          state = "X";
        }
        return state;

      case "UPDATE TURN":
        state = payload.letter;
        return state;

        //---NAVIGATION---//

      case "GO TO WELCOMESCREEN":
        state.screens = {
          welcomeScreen: true,
          lobbyScreen: false,
          gameScreen: false,
        }
        return {...state};

      case "GO TO LOBBYSCREEN":
        state.screens = {
          welcomeScreen: false,
          lobbyScreen: true,
          gameScreen: false,
        }
        return {...state};

      case "GO TO GAMESCREEN":
      state.screens = {
        welcomeScreen: false,
        lobbyScreen: false,
        gameScreen: true,
      }
      return {...state};

      

      default:
        return state;
    }
  }

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
