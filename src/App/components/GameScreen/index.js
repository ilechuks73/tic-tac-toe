import Cells from "./components/Cells";

import { useStyles } from "./styles";

import { useGameState, useWebSocket } from "../../hooks";

function GameBoard() {
  const classes = useStyles();
  const { gameState } = useGameState();
  const { connect, joinRoom } = useWebSocket()
  console.log(gameState.board.state)
  return (
    <div>
      <button 
        onClick={() => {
          connect();
          joinRoom();
        }}
      >
        connect
      </button>
      <div className={classes.GameBoard}>
        {
         gameState.board.state.map((item, index)=>{
           return(
              <Cells key={index} index={index}/>
            )
         })
            
          
        }
      </div>
    </div>
  );
}

export default GameBoard;
