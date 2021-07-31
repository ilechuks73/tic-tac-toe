import { useStyles } from "./styles";
import { useGameState } from "../../../../hooks";

function Cells(props) {
  const classes = useStyles();
  const { play } = useGameState();
  return (
    <div
      className={classes.Cells}
      onClick={() => {
        play(props.index);
      }}
    >
      {props.state}
    </div>
  );
}

export default Cells;
