import { useState, useEffect, useRef, forwardRef } from "react";
import { useGameState, useNavigation } from "../../../../../../hooks";
import { useStyles } from "./styles";

import {
  Typography as MuiTypography,
  Button as MuiButton,
  ButtonGroup as MuiButtonGroup,
  FormControl as MuiFormControl,
  FormControlLabel as MuiFormControlLabel,
  RadioGroup as MuiRadioGroup,
  Radio as MuiRadio,
  FormHelperText as MuiFormHelperText,
  Grid as MuiGrid,
  Tabs as MuiTabs,
  Tab as MuiTab,
  TextField as MuiTextField,
  InputLabel as MuiInputLabel,
  Input as MuiInput,
  Fade,
  Slide,
  Grow,
} from "@material-ui/core";

export default function MultiplayerGameMenu() {
  const classes = useStyles()
  const {goToLobbyScreen} = useNavigation()
  return (
    <MuiGrid className={classes.MultiPlayerGameMenu}>
      <MuiGrid>
        <MuiTextField
          variant="outlined"
          type="number"
          label="select number of rows"
          inputProps={{ min: "1", max: "5" }}
        />
      </MuiGrid>
      <MuiGrid>
        <MuiButton variant={"contained"} onClick={()=>{
          goToLobbyScreen()
        }}>
          Play
        </MuiButton>
      </MuiGrid>
    </MuiGrid>
  );
}
