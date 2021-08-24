import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  OnlineGameMenu: {
    "& > div": {
      "& > fieldset": {
        width: "100%",
        "& > div:first-child": {
          "& > div": {
            "& > div": {
              "& > label": {
                margin: 0,
                display: "inline",
                "& > span:nth-child(2)": {
                  fontSize: "14px",
                },
              },
            },
          },
        },
      },
    },

  }
})