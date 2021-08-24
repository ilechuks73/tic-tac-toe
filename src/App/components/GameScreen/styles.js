import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  GameScreen: {
    "& > div": {
      position: "fixed",
      top: 0,
      bottom: "0",
      left: 0,
      right: 0,
      "& > div:nth-child(2)": {
        paddingTop: "20px",
        backgroundColor: "black"
      },

    }
  },

  Header: {
    backgroundColor: "purple",
    padding: "8px 0",
    "& > div:nth-child(2)": {
    }
  },
  Board: {
    "& > div": {
      backgroundColor: "blue",
      width: "300px",
      height: "300px"
    },

  }
})