import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  Cell:{
    margin: 0,
    backgroundColor: "black",
    padding: "10px",
    "& > div":{
      backgroundColor: "#fff1bc",
      borderRadius: "20%"
    }
  }
})