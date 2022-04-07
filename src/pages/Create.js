import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import AcUnitOutlinedIcon from "@material-ui/icons/AcUnitOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import KeyboardArrowRightOutlinedIcon from "@material-ui/icons/KeyboardArrowRightOutlined";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  btn: {
    fontSize: 20,
    backgroundColor: "violet",
    "&:hover": {
      backgroundColor: "blue",
    },
  },
  title: {
    textDecoration: "underline",
    marginBottom: 25,
  },
  field: {
    marginTop: "20px",
    marginBottom: "20px",
    display: "block",
  },
});

export default function Create() {
  const classes = useStyles();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState("");
  const [detailsError, setDetailsError] = useState("");
  const [category, setCategory] = useState("todos");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);
    if (title == "") {
      setTitleError(true);
    }
    if (detailsError == "") {
      setDetailsError(true);
    }

    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(()=> history.push('/'))
    }
  };

  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h3"
        color="textSecondary"
        gutterBottom
      >
        Create New a Notes
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          id="outlined-basic"
          label="Note Title"
          variant="outlined"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          id="outlined-basic"
          label="Details"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          required
          error={detailsError}
        />
        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="ToDos" />
            <FormControlLabel
              value="remainde"
              control={<Radio />}
              label="Remainder"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<KeyboardArrowRightOutlinedIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
