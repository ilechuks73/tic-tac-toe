import { useContext } from "react";
import io from "socket.io-client";

import { GameContext } from "../state/context";

export const useGameState = () => {
  const { gameState } = useContext(GameContext);
  const { updateBoardState, checkForWin } = useBoardState();
  const { switchTurn, turnState } = useTurnState();
  const { emitPlay } = useWebSocket(play);

  function play(index) {
    updateBoardState(index, turnState);
    checkForWin(index); 
    if (gameState.online === true) {
      emitPlay("test", index, turnState);
    }
    switchTurn();
  }

  return {
    play,
  };
};

export const useBoardState = () => {
  const { boardState, setBoardState } = useContext(GameContext);
  const { turnState} = useTurnState()

  function updateBoardState(index, letter) {
    console.log("updates")
    setBoardState({
      type: "PLAY",
      payload: {
        index: index,
        letter: letter
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
    updateBoardState,
    checkForWin,
  };
};

export function useTurnState() {
  const { turnState, setTurnState } = useContext(GameContext);
  function switchTurn() {
    setTimeout(() => {
      console.log("switched")
      console.log(turnState)
      setTurnState({
        type: "SWITCH TURN",
      });
    }, 0);
  }

  function updateTurn(letter){
    setTurnState({
      type: "UPDATE TURN",
      payload:{letter}
    });
  }

  return {
    turnState,
    switchTurn,
    updateTurn
  };
}
let socket;
export function useWebSocket(play) {
  // const { play } = useGameState();
  const {updateBoardState, boardState, checkForWin} = useBoardState()
  const {switchTurn, turnState, updateTurn} = useTurnState()
  
  function connect() {
    socket = io("http://localhost:3650/");
  }
  function joinRoom() {
    socket.emit("join_room", "test");
    socket.on("receivePlay", (data) => {
      console.log(data)
      updateBoardState(data.index, data.letter)
      checkForWin(data.index); 
      updateTurn(data.letter);
    });
  }
  function emitPlay(room, index, letter) {
    socket.emit("sendPlay", { room, index, letter});
  }

  return {
    connect,
    joinRoom,
    emitPlay,
  };
}
