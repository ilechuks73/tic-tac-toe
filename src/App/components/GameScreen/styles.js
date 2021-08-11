import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  GameScreen:{
    "& > div":{
      position: "fixed",
      top:0,
      bottom:"0",
      left: 0,
      right: 0,
      "& > div:nth-child(2)":{
        //board wrapper styling here, dont go any deeper
      },
      
    }
  },

  Header:{
    backgroundColor: "purple",
    padding: "5px 0"
  },
  Board: {
    width: "200px",
    height: "200px",
    backgroundColor: "blue",
    display: "flex",
    flexWrap: "wrap",
    border: "1px solid white",
    boxSizing: "border-box"
  }
})