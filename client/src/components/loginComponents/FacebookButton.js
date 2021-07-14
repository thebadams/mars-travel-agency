import React from "react";
import Button from "@material-ui/core/Button";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    button: {
        width: "140px",
        height: "40px",
        justifyContent: "space-around"
      },
    }));

    const FacebookButton = () => {
        const classes = useStyles();

        return(
            <Button
            variant="contained"
            color="default"
            className={classes.button}
            href='http://localhost:3001/auth/facebook'
          >
            <FontAwesomeIcon icon={faFacebookSquare} color="blue" size="3x"/>
          Sign In
          </Button>
        )
    }

    export default FacebookButton;