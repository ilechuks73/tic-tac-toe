import { useState, useEffect } from "react";
import { useGameState } from "../../../../../../hooks";
import styles from './styles.module.css'

import {
  Typography as MuiTypography,
  Button as MuiButton,
  Grid as MuiGrid,
  TextField as MuiTextField,
} from "@material-ui/core";

export default function JoinRoomMenu({ serverReachable }) {
  const [formState, setFormState] = useState({})
  const { gameState, setGameState, joinRoom } = useGameState()

  return (
    <MuiGrid >
      <MuiGrid className={styles.div000}>
        <MuiTextField
          size={"small"}
          variant={"outlined"}
          label="enter name"
          onChange={(e) => {
            setFormState({ ...formState, playerName: e.target.value })
          }}
        />
      </MuiGrid>

      <MuiGrid className={styles.div001}>
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
        {
          serverReachable ? "" : <MuiTypography className={styles.span000} variant={"span"}>You may be Offline!</MuiTypography>
        }
      </MuiGrid>

    </MuiGrid>
  );
}