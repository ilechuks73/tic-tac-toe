import { useContext } from "react";
import { GameContext } from "../state/context";
import io from "socket.io-client";
import { handlePlay } from "./gameFunctions";


export function useWebSocket() {
  const { gameState, setGameState } = useContext(GameContext)

  function connectWebSocket(callback) {
    const webSocket = io(process.env.REACT_APP_API_BASE_URL)
    callback(webSocket)
    activateListeners(webSocket)
  }

  function activateListeners(webSocket) {
    webSocket.on("connectionSuccess", (id) => {
      console.log(id)
    })
    webSocket.on("joinRoom", (playerName) => {
      setGameState({
        type: "JOIN ROOM",
        payload: { playerName: playerName }
      })
    })

    webSocket.on("joinedRoom", (playerName) => {
      const state = gameState
      state.players.player2.name = playerName
      setGameState({
        type: "UPDATE STATE",
        payload: state
      })
    })

    webSocket.on("startGame", (data) => {
      setGameState({
        type: "START GAME"
      })
      setGameState({
        type: "GO TO GAMESCREEN"
      })
    })
    webSocket.on("play", (data) => {
      handlePlay(gameState, setGameState, data.index)
    });

    webSocket.on("leaveGame", (data) => {
      alert("a player just left the room, click ok to return to lobby")
      setGameState({
        type: "GO TO WELCOMESCREEN"
      })
    })

    webSocket.on("message", (data) => {
      setGameState({
        type: "NEW MESSAGE",
        payload: {
          sender: data.sender,
          message: data.content,
        }
      })
    })
  }

  return {
    connectWebSocket
  };
}

