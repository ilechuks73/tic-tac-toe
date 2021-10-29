import { Translate } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  Cell:{
    margin: 0,
    padding: "10px",
    "& > div":{
      backgroundColor: "#083e00",
      borderRadius: "20%",
      fontSize: "20px",
      position:"relative",
      '& > p':{
        position: "absolute",
        top: "50%",
        left: "50%",
        fontSize: "50px",
        transform: "translate(-50%, -50%)",
        color: "white"
      }
    }
  }
})