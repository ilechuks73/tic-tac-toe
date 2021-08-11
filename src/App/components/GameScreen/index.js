import Cells from "./components/Cells";

import { useStyles } from "./styles";

import { useGameState, useWebSocket } from "../../hooks";

import {
  Typography as MuiTypography,
  Avatar as MuiAvatar,
  Button as MuiButton,
  Grid as MuiGrid,
  Fade,
  Slide,
  Grow,
} from "@material-ui/core";


function GameScreen() {
  const { gameState } = useGameState()
  const classes = useStyles()
  return (
    <MuiGrid className={classes.GameScreen}>
      <Grow in={gameState.screens.gameScreen} timeout={800}>
        <MuiGrid>
          <Header />
          <MuiGrid container justify={"center"}>
            <Board />
          </MuiGrid>

        </MuiGrid>
      </Grow>

    </MuiGrid>
  )
}

export default GameScreen


function Header() {
  const classes = useStyles()
  return (
    <MuiGrid className={classes.Header} container={true} justify={"space-around"} alignItems={"center"}>
      <MuiGrid>
        <MuiTypography>active</MuiTypography>
      </MuiGrid>
      <MuiGrid>
        <MuiGrid container>
          <MuiGrid>
            <MuiTypography>Player1</MuiTypography>
          </MuiGrid>
          <MuiGrid>
            <MuiTypography>Player2</MuiTypography>
          </MuiGrid>
        </MuiGrid>

      </MuiGrid>
      <MuiGrid>
        <MuiButton color={"secondary"} variant={"contained"}>Leave</MuiButton>
      </MuiGrid>
    </MuiGrid>
  )
}



function Board() {
  const classes = useStyles();
  const { gameState } = useGameState();
  console.log(gameState.board.state)
  return (
    <MuiGrid>
      <div className={classes.Board}>
        {
          gameState.board.state.map((item, index) => {
            return (
              <Cells key={index} index={index} />
            )
          })


        }
      </div>
    </MuiGrid>
  );
}

