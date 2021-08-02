import { useStyles } from "./styles";
import { useGameState } from "../../../../hooks";

function Cells(props) {
  const classes = useStyles();
  const { play, gameState } = useGameState();
  return (
    <div
      className={classes.Cells}
      onClick={() => {
        play(props.index);
      }}
    >
      {}
    </div>
  );
}

export default Cells;
