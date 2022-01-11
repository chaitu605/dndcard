import React from "react";
import { useState, useEffect } from "react";
import Draggable from "react-draggable";
import { useToasts } from "react-toast-notifications";
import PacmanLoader from "react-spinners/PacmanLoader";
import {
  Typography,
  Button,
  Tooltip,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";
import useStyles from "./styles";

export default function DndCard() {
  const classes = useStyles();
  const { addToast } = useToasts();
  const [toggle, setToggle] = useState(true);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  const onStop = () => {
    addToast("Drag Successfully", {
      appearance: "success",
      autoDismiss: true,
      autoDismissTimeout: 2000,
    });
  };

  const toggler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <React.Fragment>
      <div className={classes.body}>
        {loader ? (
          <PacmanLoader
            color={"#34568B"}
            loading={loader}
            size={30}
          ></PacmanLoader>
        ) : (
          <Draggable disabled={toggle} onStop={onStop}>
            <Tooltip title="Drag Me" placement="top">
              <Card className={classes.card} variant="contained">
                <CardContent className={classes.content}>
                  <Typography color="Primary">Hello, Good Evenning</Typography>
                  <Typography color="Primary">How are you ?</Typography>
                  <Typography color="primary">
                    This is simple Card with drag and drop feature
                  </Typography>
                </CardContent>
                <CardActions className={classes.action}>
                  <Button
                    className={classes.button}
                    onClick={toggler}
                    size="small"
                    variant="contained"
                    color="primary"
                  >
                    Press me to toggle DND
                  </Button>
                </CardActions>
              </Card>
            </Tooltip>
          </Draggable>
        )}
      </div>
    </React.Fragment>
  );
}
