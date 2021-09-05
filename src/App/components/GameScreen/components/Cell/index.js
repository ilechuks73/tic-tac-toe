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
import { Games } from "@material-ui/icons";

function Cell(props) {
  const classes = useStyles();
  const { play, gameState } = useGameState();
  return (
    <MuiGrid
      item={true}
      container
      className={classes.Cell}
      xs={4}
      onClick={() => {
        play(props.index);
      }}
    >
      <MuiGrid container>
        <MuiTypography>
          {
            gameState.board.state[props.index]
          }
        </MuiTypography>
      </MuiGrid>
    </MuiGrid>
  );
}

export default Cell;
