
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
  const { gameState, leaveGame } = useGameState()
  const {goToWelcomeScreen} = useNavigation()
  
  return (
    <MuiGrid className={classes.Header} container={true} justify={"space-around"} alignItems={"center"}>
      <MuiGrid>
        <MuiTypography>active</MuiTypography>
      </MuiGrid>
      <MuiGrid xs={4} container={true} justify={"space-between"} item={true}>
        <MuiGrid item={true}>
          <MuiTypography>{gameState.players.player1.name}</MuiTypography>
          <MuiTypography align={"center"}>{gameState.players.player1.score}</MuiTypography>
        </MuiGrid>
        <MuiTypography>{"|"}</MuiTypography>
        <MuiGrid>
          <MuiTypography>{gameState.players.player2.name}</MuiTypography>
          <MuiTypography align={"center"}>{gameState.players.player2.score}</MuiTypography>
        </MuiGrid>
      </MuiGrid>
      <MuiGrid>
        <MuiButton color={"secondary"} variant={"contained"} onClick={()=>{
          leaveGame()
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

