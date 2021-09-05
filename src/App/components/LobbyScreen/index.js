import { useState, useEffect } from "react";
import { useStyles } from './styles'
import { useGameState, useNavigation } from "../../hooks";

import { PlayersSection, SpectatorsSection } from "./components";

import {
  Typography as MuiTypography,
  Avatar as MuiAvatar,
  Button as MuiButton,
  Grid as MuiGrid,
  Fade,
  Slide,
  Grow,
} from "@material-ui/core";

function LobbyScreen() {
  const classes = useStyles()

  const { gameState, startGame } = useGameState()
  const { goToGameScreen } = useNavigation()
  useEffect(() => {
    console.log(gameState)
  }, [gameState])

  return (
    <MuiGrid className={classes.LobbyScreen}>

      <Grow in={gameState.screens.lobbyScreen} timeout={800} unmountOnExit>

        <MuiGrid>
          <MuiGrid container={true} justify={"center"} alignItems={"center"}>
            <MuiGrid xs={9} item={true}>
              <PlayersSection />
              <SpectatorsSection />
              {
                gameState.online.host === "player2"
                  ?
                  " "
                  :
                  <MuiButton variant={"contained"} onClick={() => {
                    startGame()
                    goToGameScreen()
                  }}>
                    Start
                  </MuiButton>
              }
            </MuiGrid>
          </MuiGrid>
        </MuiGrid>
      </Grow>

    </MuiGrid>
  )
}

export default LobbyScreen
