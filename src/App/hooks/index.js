import { useContext, useEffect } from "react";
import io from "socket.io-client";
import { requestRoomID, createRoom as requestCreateRoom } from "../utils/networkRequest";

import { GameContext } from "../state/context";

function handlePlay(gameState, setGameState, index) {
  setGameState({
    type: "PLAY",
    payload: {
      index: index,
      letter: gameState.turn.letter
    }
  })
  checkForWin(gameState, setGameState, gameState.turn.letter.toString())
  setGameState({
    type: "SWITCH TURN"
  })
}

function checkForWin(gameState, setGameState, letter) {
  console.log(gameState.board.state, letter)
  gameState.winningIndices.every((item) => {
    let winArray = [];
    item.every((item) => {
      if (gameState.board.state[(item - 1)] === letter){
        winArray.push(true);
      }
      else{
        return false;
      }
      return true
    });
    if (winArray.length === 3) {
      console.log(letter + " wins")
      winArray = []
      return false;
      
    }
    else{
      console.log("no winner")
      winArray = [];
    }
    return true
  });
}

export function useGameState() {
  const { gameState, setGameState } = useContext(GameContext);
  const { emitPlay, connect, emitJoinRoom, emitCreateRoom, emitLeaveGame } = useWebSocket();



  function initializeGameState() {
    setGameState({
      type: "INITIALIZE GAME STATE"
    })
  }

  function createRoom(params) {
    requestRoomID()
      .then((data) => {
        console.log(data)
        params = { ...params, roomID: data.roomID }
        setGameState({
          type: "CREATE ROOM",
          payload: params
        })
        emitCreateRoom({
          roomID: data.roomID.toString(),
          playerName: params.playerName.toString()
        })
      })

  }

  function joinRoom(params) {
    setGameState({
      type: "JOIN ROOM",
      payload: params
    })
    emitJoinRoom({
      roomID: params.roomID,
      playerName: params.playerName
    })
  }

  function startGame() {
    setGameState({
      type: "START GAME",
    });

  }

  function play(index) {
    if (gameState.turn.active) {
      handlePlay(gameState, setGameState, index)
      emitPlay(gameState.online.roomID.toString(), index)
    }
    else {
      alert("not your turn")
    }

  }

  function leaveGame() {
    setGameState({
      type: "GO TO WELCOMESCREEN"
    });
    emitLeaveGame(gameState.online.roomID)
  }

  return {
    createRoom,
    joinRoom,
    initializeGameState,
    play,
    startGame,
    leaveGame,
    gameState
  };
};

export const useNavigation = () => {
  const { gameState, setGameState } = useContext(GameContext);
  const { emitStartGame } = useWebSocket();

  function goToWelcomeScreen() {
    setGameState({
      type: "GO TO WELCOMESCREEN"
    })

  }

  function goToLobbyScreen() {
    setGameState({
      type: "GO TO LOBBYSCREEN"
    })
  }

  function goToGameScreen() {
    setGameState({
      type: "GO TO GAMESCREEN"
    })
    if (gameState.online.active === true) {
      emitStartGame(gameState.online.roomID.toString())
    }
  }



  return {
    goToWelcomeScreen,
    goToLobbyScreen,
    goToGameScreen,
  }
}

// export const useBoardState = () => {
//   const { boardState, setBoardState } = useContext(GameContext);
//   const { turnState} = useTurnState()

//   function updateBoardState(index, letter) {
//     console.log("updates")
//     setBoardState({
//       type: "PLAY",
//       payload: {
//         index: index,
//         letter: letter
//       },
//     });
//   }

//   function checkForWin(index) {
//     const winningIndices = [
//       [1, 2, 3],
//       [1, 5, 9],
//       [1, 4, 7],
//       [2, 5, 8],
//       [3, 5, 7],
//       [3, 6, 9],
//       [4, 5, 6],
//       [7, 8, 9],
//     ];
//     setTimeout(() => {
//       winningIndices.forEach((item, index) => {
//         let winArray = [];
//         item.forEach((item) => {
//           if (boardState[item - 1] === turnState) {
//             winArray.push(true);
//           }
//         });
//         if (winArray.length === 3) {
//           alert("win");
//         }
//         winArray = [];
//       });
//     }, 0);
//   }
//   return {
//     boardState,
//     updateBoardState,
//     checkForWin,
//   };
// };

// export function useTurnState() {
//   const { turnState, setTurnState } = useContext(GameContext);
//   function switchTurn() {
//     setTimeout(() => {
//       console.log("switched")
//       console.log(turnState)
//       setTurnState({
//         type: "SWITCH TURN",
//       });
//     }, 0);
//   }

//   function updateTurn(letter){
//     setTurnState({
//       type: "UPDATE TURN",
//       payload:{letter}
//     });
//   }

//   return {
//     turnState,
//     switchTurn,
//     updateTurn
//   };
// }
let socket;
export function useWebSocket() {
  const { gameState, setGameState } = useContext(GameContext);

  function connect() {
    socket = io("http://localhost:3650");
    activateListeners()
  }

  function emitCreateRoom(params) {
    socket.emit("createRoom", params);
  }

  function emitJoinRoom(params) {
    socket.emit("joinRoom", params);
  }

  function emitStartGame(roomID) {
    socket.emit("startGame", roomID)
  }

  function emitPlay(roomID, index) {
    socket.emit("play", { roomID, index });
  }

  function emitLeaveGame(roomID) {
    socket.emit("leaveGame", { roomID });
  }

  function activateListeners() {
    socket.on("connectionSuccess", (id) => {
      console.log(id)
    })
    socket.on("joinRoom", (playerName) => {
      setGameState({
        type: "JOIN ROOM",
        payload: { playerName: playerName }
      })
    })

    socket.on("joinedRoom", (playerName) => {
      setGameState({
        type: "UPDATE STATE",
        payload: {
          players: {
            ...gameState.players,
            player2: {
              ...gameState.players.player2,
              name: playerName
            }
          }
        }
      })
    })

    socket.on("startGame", () => {
      setGameState({
        type: "START GAME"
      })
      setGameState({
        type: "GO TO GAMESCREEN"
      })
    })
    socket.on("play", (data) => {
      handlePlay(gameState, setGameState, data.index)
    });

    socket.on("leaveGame", (data) => {
      alert("a player just left the room, click ok to return to lobby")
      setGameState({
        type: "GO TO WELCOMESCREEN"
      })
    })

    socket.on("test", () => {
      alert("test")
    })
  }

  return {
    connect,
    emitCreateRoom,
    emitJoinRoom,
    emitStartGame,
    emitPlay,
    emitLeaveGame
  };
}

