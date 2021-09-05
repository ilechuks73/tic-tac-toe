import { useState } from "react";
import { useStyles } from './styles'
import { useGameState, useNavigation } from "../../../../hooks";

import {
  Typography as MuiTypography,
  Avatar as MuiAvatar,
  Button as MuiButton,
  Grid as MuiGrid,
  Fade,
  Slide,
  Grow,
} from "@material-ui/core";


export default function PlayersSection() {
  const classes = useStyles()
  const {gameState} = useGameState()
  return (
    <MuiGrid className={classes.PlayersSection}>
      <MuiTypography>Players</MuiTypography>
      <MuiGrid container={true} spacing={1}>

        <MuiGrid item>
          <MuiAvatar />
        </MuiGrid>

        <MuiGrid item>
          <MuiTypography display={"block"}>{`Name: ${gameState.players.player1.name}`}</MuiTypography>
          <MuiTypography display={"block"}>{`Letter: ${gameState.players.player1.letter}`}</MuiTypography>
        </MuiGrid>

      </MuiGrid>
      <MuiGrid container={true} spacing={1}>

        <MuiGrid item>
          <MuiAvatar />
        </MuiGrid>

        <MuiGrid item>
          <MuiTypography display={"block"}>{`Name: ${gameState.players.player2.name}`}</MuiTypography>
          <MuiTypography display={"block"}>{`Letter: ${gameState.players.player2.letter}`}</MuiTypography>
        </MuiGrid>

      </MuiGrid>

    </MuiGrid>
  )
}