import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  body: {
    height: "100vh",
    backgroundColor: "#F7CAC9",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    backgroundColor: "#FF6F61",
    borderRadius: "1rem 5rem",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    height: "12rem",
    width: 600,
    margin: "auto",
    resize: "both",
  },

  content: {
    margin: "auto",
  },

  action: {
    margin: "auto",
  },
}));

export default useStyles;
