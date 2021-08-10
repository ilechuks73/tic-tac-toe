import { useState } from "react";
import { useStyles } from './styles'
import { useGameState } from "../../hooks";

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

  const { gameState } = useGameState()

  return (
    <MuiGrid className={classes.LobbyScreen}>

      <Grow in={gameState.screens.lobbyScreen} timeout={800}>

        <MuiGrid>
          <MuiGrid container={true} justify={"center"} alignItems={"center"}>
            <MuiGrid xs={9} item={true}>
              <PlayersSection />
              <SpectatorsSection />
              <MuiButton variant={"contained"}>
                Start
              </MuiButton>
            </MuiGrid>
          </MuiGrid>
        </MuiGrid>
      </Grow>

    </MuiGrid>
  )

  function PlayersSection() {
    return (
      <MuiGrid >
        <MuiTypography>Players</MuiTypography>
        <MuiGrid container={true}>
          <MuiAvatar />
          <MuiGrid>Joshua</MuiGrid>
        </MuiGrid>
        
      </MuiGrid>
    )
  }
  function SpectatorsSection() {
    return (
      <MuiGrid>
        <MuiTypography>
          Spectators
        </MuiTypography>
        <MuiAvatar>
        </MuiAvatar>
      </MuiGrid>
    )
  }
}

export default LobbyScreen
