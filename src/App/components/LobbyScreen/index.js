import { useState } from "react";
import { useStyles } from './styles'
import { useGameState, useNavigation } from "../../hooks";

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
  const {goToGameScreen} = useNavigation()

  return (
    <MuiGrid className={classes.LobbyScreen}>

      <Grow in={gameState.screens.lobbyScreen} timeout={800} unmountOnExit>

        <MuiGrid>
          <MuiGrid container={true} justify={"center"} alignItems={"center"}>
            <MuiGrid xs={9} item={true}>
              <PlayersSection />
              <SpectatorsSection />
              <MuiButton variant={"contained"} onClick={()=>{
                goToGameScreen()
              }}>
                Start
              </MuiButton>
            </MuiGrid>
          </MuiGrid>
        </MuiGrid>
      </Grow>

    </MuiGrid>
  )

  function PlayersSection() {
    const classes = useStyles()
    return (
      <MuiGrid className={classes.PlayersSection}>
        <MuiTypography>Players</MuiTypography>
        <MuiGrid container={true} spacing={1}>

          <MuiGrid item>
            <MuiAvatar />
          </MuiGrid>

          <MuiGrid item>
            <MuiTypography display={"block"}>{`Name: Joshua`}</MuiTypography>
            <MuiTypography display={"block"}>{`Letter: x`}</MuiTypography>
          </MuiGrid>

        </MuiGrid>

      </MuiGrid>
    )
  }
  function SpectatorsSection() {
    const classes = useStyles()
    return (
      <MuiGrid className={classes.SpectatorsSecction}>
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
