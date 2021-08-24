import { useState, useEffect, useRef, forwardRef } from "react";
import { useGameState, useNavigation } from "../../../../hooks";

import { MultiplayerGameMenu, SinglePlayerGameMenu } from "./components";

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

export default function LocalGameMenu() {
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

}

