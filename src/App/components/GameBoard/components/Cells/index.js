import { useStyles } from "./styles";
import { useBoardState, useTurnState } from "../../../../hooks";

function Cells(props) {
  const classes = useStyles();
  const { play, checkForWin } = useBoardState();
  const { switchTurn } = useTurnState();
  return (
    <div
      className={classes.Cells}
      onClick={() => {
        if (props.state === "") {
          play(props.index);
          checkForWin(props.index);
          switchTurn();
        } else {
          return false;
        }
      }}
    >
      {props.state}
    </div>
  );
}

export default Cells;
