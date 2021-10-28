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

export default function JoinRoomMenu({ serverReachable }) {
  const [formState, setFormState] = useState({})
  const { JoinRoomMenu } = useStyles()
  const { gameState, setGameState, joinRoom } = useGameState()
  const { goToLobbyScreen } = useNavigation()

  return (
    <MuiGrid className={JoinRoomMenu} >
      <MuiGrid>
        <MuiTextField
          size={"small"}
          variant={"outlined"}
          label="enter name"
          onChange={(e) => {
            setFormState({ ...formState, playerName: e.target.value })
          }}
        />
      </MuiGrid>

      <MuiGrid>
        <MuiTextField
          label="Enter Room ID"
          size={"small"}
          variant="outlined"
          onChange={(e) => {
            setFormState({ ...formState, roomID: e.target.value })
          }}
        />
      </MuiGrid>

      <MuiGrid>
        <MuiButton size={"small"} variant={"outlined"} disabled={!serverReachable} onClick={() => {
          joinRoom(formState)
        }} >
          Join Room
        </MuiButton>
      </MuiGrid>

    </MuiGrid>
  );
}