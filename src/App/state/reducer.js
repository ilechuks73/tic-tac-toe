export function GameReducer(state, { type, payload }) {

  switch (type) {
    
    case "START GAME":
      state.active = true


      //CHECKS FOR INITIAL TURN
      if (state.online.active) {
        if (state.players.player1.letter !== "X") {
          state.turn.active = false
        }
      }
      return { ...state };

    case "INITIALIZE WEBSOCKET":
      state.online.webSocket = payload
      return { ...state }

    case "CREATE ROOM":
      state.players.player1.name = payload.playerName
      state.players.player1.letter = "X"
      state.players.player2.letter = "O"
      state.online.roomID = payload.roomID
      state.online.host = "player1"
      return { ...state };

    case "JOIN ROOM":
      switch (state.online.host) {
        case "player1":
          state.players.player2.name = payload.playerName
          break;
        default:
          state.players.player1.name = payload.playerName
          state.players.player1.letter = "O"
          state.players.player2.letter = "X"
          state.online.roomID = payload.roomID
          state.online.host = "player2"
          break;
      }
      return { ...state };

    case "PLAY":
      //state.splice(2, 1, "r");
      state.board.state.splice(payload.index, 1, payload.letter)

      return { ...state };

    case "SWITCH TURN":
      if (state.turn.letter === "X") {
        state.turn.letter = "O";
      } else if (state.turn.letter === "O") {
        state.turn.letter = "X";
      }

      if (state.online.active) {
        state.turn.active = !state.turn.active
      }
      return { ...state };

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
      return { ...state };

    case "GO TO LOBBYSCREEN":
      state.screens = {
        welcomeScreen: false,
        lobbyScreen: true,
        gameScreen: false,
      }
      return { ...state };

    case "GO TO GAMESCREEN":
      state.screens = {
        welcomeScreen: false,
        lobbyScreen: false,
        gameScreen: true,
      }
      return { ...state };

    case "UPDATE STATE":
      return {...payload }

    default:
      return state;
  }
}