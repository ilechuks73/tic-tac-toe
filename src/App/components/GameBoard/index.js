import Cells from "./components/Cells";

import { useStyles } from "./styles";

import { useBoardState, useWebSocket } from "../../hooks";

function GameBoard() {
  const classes = useStyles();
  const { boardState } = useBoardState();
  const { connect, joinRoom } = useWebSocket();
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
        {boardState.map((data, index) => {
          return <Cells state={data} index={index} key={index} />;
        })}
      </div>
    </div>
  );
}

export default GameBoard;
