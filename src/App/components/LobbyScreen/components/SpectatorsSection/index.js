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


export default function SpectatorsSection() {
  const classes = useStyles()
  return (
    <MuiGrid className={classes.SpectatorsSecction}>
      <MuiTypography>
        Spectators
      </MuiTypography>
      <MuiGrid>
        <MuiTypography>No Spectators</MuiTypography>
      </MuiGrid>
    </MuiGrid>
  )
}