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


export default function CreateRoomMenu({ serverReachable }) {
  
  const { goToLobbyScreen } = useNavigation()
  const {gameState, createRoom} = useGameState()
  const [formState, setFormState] = useState({})

  return (
    <MuiGrid>
      <MuiGrid className={styles.div001}>
        <MuiTextField
          size={"small"}
          variant={"outlined"}
          label="enter name"
          onChange={(e) => {
            setFormState({ ...formState, playerName: e.target.value })
          }}
        />
      </MuiGrid>
      <MuiGrid className={styles.div000}>
        <MuiTextField
          variant="outlined"
          type="number"
          label="select number of rows"
          inputProps={{ min: "3", max: "3" }}
          onChange={(e) => {
            setFormState({ ...formState, boardSize: parseInt(e.target.value) })
          }}
        />
      </MuiGrid>
      <MuiGrid>
        <MuiButton size={"small"} variant={"outlined"} disabled={!serverReachable} onClick={() => {
          createRoom(formState)
        }}  >
          Create Room
        </MuiButton>
        {
          serverReachable ? "" : <MuiTypography className={styles.span000} variant={"span"}>You may be Offline!</MuiTypography>
        }
        
      </MuiGrid>
    </MuiGrid>
  );
}