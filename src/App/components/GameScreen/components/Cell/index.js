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

function Cell(props) {
  const classes = useStyles();
  const { play, gameState } = useGameState();
  return (
    <MuiGrid
      item={true}
      container
      xs={4}
      className={classes.Cell}
      onClick={() => {
        play(props.index);
      }}
    >
      <MuiGrid container>
        {""}
      </MuiGrid>
    </MuiGrid>
  );
}

export default Cell;
