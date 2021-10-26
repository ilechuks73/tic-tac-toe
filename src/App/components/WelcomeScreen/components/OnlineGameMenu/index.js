import { useState, useEffect, useRef, forwardRef } from "react";
import { useGameState, useNavigation } from "../../../../hooks";
import { useStyles } from "./styles";

import { testConnection } from "../../../../utils/apiRequest";
import { useWebSocket } from "../../../../utils/webSocket";

import { CreateRoomMenu, JoinRoomMenu } from "./components";

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

export default function OnlineGameMenu() {
  const [serverReachable, setServerReachable] = useState(true)
  const { gameState, initializeWebSocket } = useGameState()
  const {connectWebSocket} = useWebSocket()
  useEffect(() => {
    testConnection()
      .then(() => {
        setServerReachable(true)
        connectWebSocket((webSocket)=>{
          initializeWebSocket(webSocket)
        })
      })
      .catch((err) => setServerReachable(false))
  }, [])

  const [value, setValue] = useState({
    type: "",
    helperText: "Select a MultiPlayer Mode",
  });

  const { OnlineGameMenu } = useStyles()

  return (
    <MuiGrid className={OnlineGameMenu}>
      <MuiGrid xs={12} item>
        <MuiFormControl component="fieldset">
          <MuiRadioGroup
            value={JSON.stringify(value)}
            onChange={(event) => {
              setValue(JSON.parse(event.target.value));
            }}
          >
            <MuiGrid container>
              <MuiGrid xs={6} item>
                <MuiFormControlLabel
                  value={JSON.stringify({
                    type: "create",
                    helperText: "Create room",
                  })}
                  control={<MuiRadio size="small" />}
                  label="Create Room"
                />
              </MuiGrid>
              <MuiGrid xs={6} item>
                <MuiFormControlLabel
                  value={JSON.stringify({
                    type: "join",
                    helperText: "Join room",
                  })}
                  control={<MuiRadio size="small" />}
                  label="Join Room"
                />
              </MuiGrid>
            </MuiGrid>
          </MuiRadioGroup>

          <Fade in={value.type === "join"} exit={false} unmountOnExit>
            <MuiGrid>
              <JoinRoomMenu serverReachable={serverReachable} />
            </MuiGrid>
          </Fade>
          <Fade in={value.type === "create"} exit={false} unmountOnExit>
            <MuiGrid>
              <CreateRoomMenu serverReachable={serverReachable} />
            </MuiGrid>
          </Fade>
          <MuiFormHelperText>{value.helperText}</MuiFormHelperText>
        </MuiFormControl>
      </MuiGrid>
    </MuiGrid>

  );


}