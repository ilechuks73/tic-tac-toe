import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  GameBoard: {
    width: "200px",
    height: "200px",
    backgroundColor: "blue",
    display: "flex",
    flexWrap: "wrap",
    border: "1px solid white",
    boxSizing: "border-box"
  }
})