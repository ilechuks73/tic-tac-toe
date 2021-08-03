import { useState } from "react";
import {useStyles} from './styles'
import { useGameState } from "../../hooks";

import {
  Typography as MuiTypography,
  Button as MuiButton,
  Grid as MuiGrid,
  Fade,
  Slide,
  Grow,
} from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";

function LobbyScreen() {
  const classes = useStyles()

  const {gameState} = useGameState()

  return (
    <MuiGrid className={classes.LobbyScreen}>

      <Grow in={gameState.screens.lobbyScreen}  timeout={800}>

        <MuiGrid >
          <MuiGrid container={true}  >
            <input type="text"/>
          </MuiGrid>
        </MuiGrid>

      </Grow>

    </MuiGrid>
  )
  
  function playersSection() {
    return (
      <MuiGrid>
        
      </MuiGrid>
    )
  }
}

export default LobbyScreen
