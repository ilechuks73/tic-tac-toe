
import Cells from "./components/Cell";

import { useStyles } from "./styles";

import { useGameState, useNavigation, useWebSocket } from "../../hooks";

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
      <Grow in={gameState.screens.gameScreen} timeout={800} unmountOnExit>
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
  const {goToWelcomeScreen} = useNavigation()
  
  return (
    <MuiGrid className={classes.Header} container={true} justify={"space-around"} alignItems={"center"}>
      <MuiGrid>
        <MuiTypography>active</MuiTypography>
      </MuiGrid>
      <MuiGrid xs={4} container={true} justify={"space-between"} item={true}>
        <MuiGrid item={true}>
          <MuiTypography>Player1</MuiTypography>
          <MuiTypography align={"center"}>2</MuiTypography>
        </MuiGrid>
        <MuiTypography>{"|"}</MuiTypography>
        <MuiGrid>
          <MuiTypography>Player2</MuiTypography>
          <MuiTypography align={"center"}>8</MuiTypography>
        </MuiGrid>
      </MuiGrid>
      <MuiGrid>
        <MuiButton color={"secondary"} variant={"contained"} onClick={()=>{
          goToWelcomeScreen()
        }}>Leave</MuiButton>
      </MuiGrid>
    </MuiGrid>
  )
}



function Board() {
  const classes = useStyles();
  const { gameState } = useGameState();
  return (
    <MuiGrid item className={classes.Board}>
      <MuiGrid container>
        {
          gameState.board.state.map((item, index) => {
            return (
              <Cells key={index} index={index} />
            )
          })
        }
      </MuiGrid>
    </MuiGrid>
  );
}

function Footer() {
  return (
    <div>
      
    </div>
  )
}

