
import React from "react";
import Container from "@material-ui/core/Container";
import AcUnitOutlinedIcon from "@material-ui/icons/AcUnitOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import KeyboardArrowRightOutlinedIcon from "@material-ui/icons/KeyboardArrowRightOutlined";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    fontSize: 20,
    backgroundColor: "violet",
    "&:hover": {
      backgroundColor: "blue",
    },
  },
  title:{
    textDecoration: 'underline',
    marginBottom: 25
  }
});

export default function Create() {
  const classes = useStyles();

  return (
    <Container>
      <Typography 
      className={classes.title}
      variant="h3" 
      color="textSecondary" 
      gutterBottom>
        Create New a Notes
      </Typography>
      <Button
        
        onClick={() => console.log("you clicked me")}
        variant="contained"
        color="primary"
        endIcon={<KeyboardArrowRightOutlinedIcon />}
      >
        Submit
      </Button>
    </Container>
  );
}
