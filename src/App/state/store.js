import { useReducer,  } from "react";
import { GameContext } from "./context";

function Store(props) {
 const initialBoardState = ["", "", "", "", "", "", "", "", ""];
 const initialTurnState = ["X", "O"][Math.round(Math.random())];
 const initialGameState = {active: false, numberOfRounds: undefined, players:[], }

 const [boardState, setBoardState] = useReducer(reducer, initialBoardState);
 const [turnState, setTurnState] = useReducer(reducer, initialTurnState);
const [gameState, setGameState] = useReducer(reducer, initialGameState)

 function reducer(state, { type, payload }) {
  switch (type) {
   case "PLAY":

    state[payload.index] = payload.letter;
    return state;

   case "SWITCH TURN":
    if (state === "X") {
     state = "O";
    } else if (state === "O") {
     state = "X";
    }
    return state;

   default:
    return state;
  }
 }

 return (
  <GameContext.Provider 
    value={{ 
      boardState, 
      setBoardState, 
      turnState, 
      setTurnState, 
      gameState, 
      setGameState
    }}
  >
   {props.children}
  </GameContext.Provider>
 );
}

export default Store;
