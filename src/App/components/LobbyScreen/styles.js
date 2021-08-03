import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  LobbyScreen:{
    "& > div":{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "purple",
      "& > div":{
        backgroundColor: "green",
        "& > div":{
          backgroundColor: "blue"
        }
      }
    }
  }
})