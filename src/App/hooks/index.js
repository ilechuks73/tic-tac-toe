import { useContext } from "react";
import io from 'socket.io-client'

import { GameContext } from "../state/context";

export const useGameState = () => {
  function connect (){
    io.connect("http://localhost:3650/")
    io.emit("join_room", 'test');
  }
  function joinRoom (){
    
  }
  return{
    connect,
    joinRoom
  }

  
}

export const useBoardState = () => {
  const { boardState, setBoardState, turnState } = useContext(GameContext);

  function play(index) {
    setBoardState({
      type: "PLAY",
      payload: {
        index: index,
        letter: turnState,
      },
    });
  }

  function checkForWin(index) {
    const winningIndices = [
      [1, 2, 3],
      [1, 5, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 5, 7],
      [3, 6, 9],
      [4, 5, 6],
      [7, 8, 9],
    ];
    setTimeout(() => {
      winningIndices.forEach((item, index) => {
        let winArray = [];
        item.forEach((item) => {
          if (boardState[item - 1] === turnState) {
            winArray.push(true);
          }
        });
        if (winArray.length === 3) {
          alert("win");
        }
        winArray = [];
      });
    }, 0);
  }
  return {
    boardState,
    play,
    setBoardState,
    checkForWin,
  };
};

export function useTurnState() {
  const { turnState, setTurnState } = useContext(GameContext);
  function switchTurn() {
    setTimeout(() => {
      setTurnState({
        type: "SWITCH TURN",
      });
    }, 0);
  }

  return {
    turnState,
    switchTurn,
  };
}
