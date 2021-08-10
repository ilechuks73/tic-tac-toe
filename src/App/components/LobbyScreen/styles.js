import {
  makeStyles
} from "@material-ui/styles";

export const useStyles = makeStyles({
  LobbyScreen: {
    "& > div": {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      "& > div": {
        backgroundColor: "purple",
        height: "100%",
        "& > div": {
          padding: "25px 10px",
          "& > div": {
            borderRadius: "10px",
            border: "1px solid grey",
            padding: "5px 10px",
            marginBottom: "10px"
          }
        }
      }
    }
  },

  PlayersSection:{

  },
  SpectatorsSecction:{
    
  }
})