import { useStyles } from "./styles";
import { useGameState } from "../../../../hooks";

import {
  Typography as MuiTypography,
  Avatar as MuiAvatar,
  Button as MuiButton,
  Grid as MuiGrid,
  Fade,
  Slide,
  Grow,
} from "@material-ui/core";

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
