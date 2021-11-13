import { useState, useEffect, useRef, forwardRef } from "react";
import { useGameState, useNavigation } from "../../../../../../hooks";
import styles from './styles.module.css'


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
  const { goToLobbyScreen } = useNavigation()
  return (
    <MuiGrid className={styles.MultiPlayerGameMenu}>
      <MuiGrid>
        <MuiGrid className={styles.d000}>
          <MuiTypography className={styles.p000}>X</MuiTypography>
          <MuiTextField
            variant="outlined"
            size={"small"}
            label="enter player name"
          />
        </MuiGrid>
        <MuiGrid className={styles.d001}>
          <MuiTypography className={styles.p001}>O</MuiTypography>
          <MuiTextField
            variant="outlined"
            size={"small"}
            label="enter player name"
            inputProps={{ min: "1", max: "5" }}
          />
        </MuiGrid>
        <MuiGrid className={styles.d004}>
          <MuiTextField
          className = {styles.i000}
            variant="outlined"
            size={"small"}
            type="number"
            label="select number of rows"
            inputProps={{ min: "1", max: "5" }}
          />
        </MuiGrid>

      </MuiGrid>
      <MuiGrid>
        <MuiButton variant={"outlined"} onClick={() => {
          goToLobbyScreen()
        }}>
          Play
        </MuiButton>
      </MuiGrid>
    </MuiGrid>
  );
}
