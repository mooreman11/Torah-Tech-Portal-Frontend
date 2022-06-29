import {
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import React from "react";

const textField = (val) => (
  <TextField id="standard-basic" name={val} label={val} variant="standard" />
);

const boolRadio = (val) => (
  <FormControl>
    <FormLabel id="demo-radio-buttons-group-label">
      Do you have an {val}
    </FormLabel>
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="No"
      name="{val}?"
    >
      <FormControlLabel value="1" control={<Radio />} label="Yes" />
      <FormControlLabel value="0" control={<Radio />} label="No" />
    </RadioGroup>
  </FormControl>
);

function InitialForm() {
  return (
    <form method="POST" action="http://localhost:8000/api/upload-forms">
      {[
        "First Name",
        "Middle Name",
        "Last Name",
        "Cell Phone",
        "Email",
        "Street Address",
        "Street Address (line 2)",
        "City",
        "State",
        "Zip/Postal Code",
        "Country",
        "DOB",
        "Country of Birth",
        "Country Issuing Passport",
        "Citizenship",
      ].map((field) => textField(field))}
      {["Israeli Citizenship", "Israeli Passport"].map((field) =>
        boolRadio(field)
      )}
      {["Current School", "Synogogue"].map((field) => textField(field))}
      {["High School Transcripts", "Photo", "Resume"].map((field) => (
        <Button variant="contained" component="label">
          Insurance Forms
          <input type="file" name="field" hidden />
        </Button>
      ))}
      
      <Button type="submit" variant="outlined">
        Submit
      </Button>
    </form>
  );
}

export default InitialForm;
