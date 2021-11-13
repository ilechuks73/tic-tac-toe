import { useState, useEffect, useRef, forwardRef } from "react";
import { useStyles } from "./styles";
import {OnlineGameMenu, LocalGameMenu} from "./components"
import { useGameState, useNavigation } from "../../hooks";

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
  const [tabValues, setTabValues] = useState(1);
  const { gameState, startGame } = useGameState();
  const { goToLobbyScreen } = useNavigation()
  const [formState, setFormState] = useState({ offline: true });

  return (
    <div className={classes.WelcomeScreen}>
      <Fade in={gameState.screens.welcomeScreen} unmountOnExit>
        <MuiGrid container={true} alignContent={"center"} justify={"center"} >
          <MuiGrid xs={8} sm={6} md={5} lg={4} xl={3} item={true}>
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

  
}
