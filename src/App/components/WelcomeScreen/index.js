import { useState, useEffect, useRef, forwardRef } from "react";
import { useStyles } from "./styles";
import { useGameState } from "../../hooks";

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

function handleClick(setTabValues, value) {
  setTabValues((tableValues) => {
    return value;
  });
}

export default function WelcomeScreen() {
  const classes = useStyles();
  const [tabValues, setTabValues] = useState(0);
  const { gameState, startGame, goToLobby } = useGameState();
  const [formState, setFormState] = useState({ offline: true });

  return (
    <div className={classes.WelcomeScreen}>
      <Fade in={gameState.screens.welcomeScreen}>
        <MuiGrid container={true} alignContent={"center"} justify={"center"}>
          <MuiGrid xs={8} item={true}>
            <MuiGrid container={true}>
              <MuiGrid xs={6} item>
                <MuiTypography align={"center"}>TIC</MuiTypography>
              </MuiGrid>
              <MuiGrid xs={6} item>
                <MuiTypography align={"center"}>TAC</MuiTypography>
              </MuiGrid>
              <MuiGrid xs={12} item={true}>
                <MuiTypography align={"center"}>TOE</MuiTypography>
              </MuiGrid>
            </MuiGrid>
            <MuiGrid xs={12} item>
              <MuiTabs value={tabValues} centered>
                <MuiTab
                  label={"Local"}
                  onClick={() => {
                    handleClick(setTabValues, 0);
                    setFormState((prevState) => {
                      return { ...prevState, offline: true, online: false };
                    });
                  }}
                />
                <MuiTab
                  label={"Online"}
                  onClick={() => {
                    handleClick(setTabValues, 1);
                    setFormState((prevState) => {
                      return { ...prevState, offline: false, online: true };
                    });
                  }}
                />
              </MuiTabs>
            </MuiGrid>
            <MuiGrid xs={12} item>
              <Slide
                direction={"left"}
                in={tabValues === 1 ? true : false}
                exit={false}
                unmountOnExit
              >
                <MuiGrid>
                  <OnlineGameMenu />
                </MuiGrid>
              </Slide>

              <Slide
                direction={"left"}
                in={tabValues === 0 ? true : false}
                exit={false}
                unmountOnExit
              >
                <MuiGrid>
                  <LocalGameMenu />
                </MuiGrid>
              </Slide>
            </MuiGrid>
          </MuiGrid>
        </MuiGrid>
      </Fade>
    </div>
  );

  function OnlineGameMenu() {
    const [value, setValue] = useState({
      type: "",
      helperText: "Select a MultiPlayer Mode",
    });

    return (
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
                  control={<MuiRadio />}
                  label="Create Room"
                  onClick={() => {
                    setFormState();
                  }}
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
              <JoinRoomMenu />
            </MuiGrid>
          </Fade>
          <Fade in={value.type === "create"} exit={false} unmountOnExit>
            <MuiGrid>
              <CreateRoomMenu />
            </MuiGrid>
          </Fade>
          <MuiFormHelperText>{value.helperText}</MuiFormHelperText>
        </MuiFormControl>
      </MuiGrid>
    );
    function CreateRoomMenu() {
      return (
        <MuiGrid>
          <MuiTextField
            size={"small"}
            variant={"outlined"}
            label="enter name"
          />
          <MuiTextField
            variant="outlined"
            type="number"
            label="select number of rows"
            inputProps={{ min: "1", max: "6" }}
          />
          <MuiButton size={"small"} variant={"outlined"}>
            Create Room
          </MuiButton>
          <MuiTypography>{"Room Code: XXXX-XXXX"}</MuiTypography>
        </MuiGrid>
      );
    }
    function JoinRoomMenu() {
      return (
        <MuiGrid>
          <MuiTextField
            size={"small"}
            variant={"outlined"}
            label="enter name"
          />
          <MuiTextField
            label="Enter Room Code"
            size={"small"}
            variant="outlined"
          />

          <MuiButton size={"small"} variant={"outlined"}>
            Join Room
          </MuiButton>
        </MuiGrid>
      );
    }
  }

  function LocalGameMenu() {
    const [tabValues, setTabValues] = useState({
      type: "multiplayer",
      helperText: "Same computer",
    });
    return (
      <MuiGrid>
        <MuiFormControl component="fieldset">
          <MuiRadioGroup
            value={JSON.stringify(tabValues)}
            onChange={(event) => {
              setTabValues(JSON.parse(event.target.value));
            }}
          >
            <MuiGrid xs={12} item>
              <MuiFormControlLabel
                value={JSON.stringify({
                  type: "computer",
                  helperText: "Play against AI",
                })}
                disabled
                control={<MuiRadio size="small" />}
                label="Computer"
              />
              <MuiFormControlLabel
                value={JSON.stringify({
                  type: "multiplayer",
                  helperText: "Same computer",
                })}
                control={<MuiRadio size="small" />}
                label="Multiplayer"
              />
            </MuiGrid>
          </MuiRadioGroup>

          <Fade in={tabValues.type === "computer"} exit={false} unmountOnExit>
            <MuiGrid></MuiGrid>
          </Fade>
          <Fade
            in={tabValues.type === "multiplayer"}
            exit={false}
            unmountOnExit
          >
            <MuiGrid>
              <MultiplayerGameMenu />
            </MuiGrid>
          </Fade>
          <MuiFormHelperText>{tabValues.helperText}</MuiFormHelperText>
        </MuiFormControl>
      </MuiGrid>
    );

    function MultiplayerGameMenu() {
      return (
        <MuiGrid>
          <MuiGrid>
            <MuiTextField
              variant="outlined"
              type="number"
              label="select number of rows"
              inputProps={{ min: "1", max: "6" }}
            />
          </MuiGrid>
        </MuiGrid>
      );
    }
  }
}
