import { useContext, useEffect } from "react";
import { requestRoomID, createRoom as requestCreateRoom } from "../utils/apiRequest";
import { GameContext } from "../state/context";
import { handlePlay, handleJoinRoom } from "../utils/gameFunctions";

export function useGameState() {
  const { gameState, setGameState } = useContext(GameContext);

  function initializeWebSocket(webSocket) {
    setGameState({
      type: "INITIALIZE WEBSOCKET",
      payload: webSocket
    })
  }

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
        gameState.online.webSocket.emit("createRoom", {
          roomID: data.roomID.toString(),
          playerName: params.playerName.toString()
        })
      })

  }

  function joinRoom(params) {
    handleJoinRoom(gameState, setGameState, params)
    
  }

  function startGame() {
    setGameState({
      type: "START GAME",
    });
    setGameState({
      type: "GO TO GAMESCREEN"
    })
    if (gameState.online.active === true) {
      gameState.online.webSocket.emit("startGame", gameState.online.roomID.toString())
    }
  }

  function play(index) {
    if (gameState.turn.active) {
      handlePlay(gameState, setGameState, index)
      gameState.online.webSocket.emit("play", { roomID: gameState.online.roomID, index: index })
    }
    else {
      alert("not your turn")
    }

  }

  function leaveGame() {
    gameState.online.webSocket.emit("leaveGame", gameState.online.roomID)
    setGameState({
      type: "GO TO WELCOMESCREEN"
    });
    
  }

  return {
    createRoom,
    joinRoom,
    initializeGameState,
    initializeWebSocket,
    play,
    startGame,
    leaveGame,
    gameState
  };
};

export const useNavigation = () => {
  const { gameState, setGameState } = useContext(GameContext);

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

  }



  return {
    goToWelcomeScreen,
    goToLobbyScreen,
    goToGameScreen,
  }
}
