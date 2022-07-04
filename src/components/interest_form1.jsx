import {
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useEffect, useState } from 'react';
// import BasicDatePicker from './datePicker';

const Row = ({ children }) => {
  return <div class="flex gap-6 mb-4">{children && children}</div>;
};

function InitialForm() {
  const [input, setInput] = useState({});

  useEffect(() => {
    console.log(input);
  }, [input]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const renderRow = (item) => {
    // check if array
    if (Array.isArray(item)) {
      return <Row>{item.map((field) => textField(field))}</Row>;
    } else {
      return <Row>{textField(item)}</Row>;
    }
  };

  const textField = (val) => {
    const type =
      val === 'Email'
        ? 'email'
        : val === 'Password' || val === 'Confirm Password'
        ? 'password'
        : null;

    return (
      <div class="grow basis-0 min-w-0 ">
        <TextField
          fullWidth
          key={val}
          type={type}
          id="standard-basic"
          name={val}
          label={val}
          variant="standard"
          onChange={onInputChange}
        />
      </div>
    );
  };

  const boolRadio = (val) => (
    <FormControl class="grow" key={val}>
      <FormLabel id="demo-radio-buttons-group-label">
        Do you have an {val}?
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="No"
        name={val}
      >
        <FormControlLabel value="1" control={<Radio />} label="Yes" />
        <FormControlLabel value="0" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
  );

  const submitHandler = (e) => {
    // console.log(input)
    if (input['Password'] !== input['Confirm Password']) {
      alert('Passwords Do Not Match');
      e.preventDefault();
    }
  };

  return (
    <form
      class="w-3/4 m-auto mb-10 mt-10"
      method="POST"
      action="http://localhost:8000/api/upload-forms"
    >
      {[
        ['First Name', 'Middle Name', 'Last Name'],
        ['Cell Phone', 'Email'],
        'Street Address',
        'Street Address (line 2)',
        ['City', 'State', 'Zip/Postal Code', 'Country'],
        ['DOB', 'Country of Birth'],
        ['Country Issuing Passport', 'Citizenship'],
      ].map((item) => renderRow(item))}
      {/* {<BasicDatePicker />} */}
      {
        <div class='flex pt-5 pb-5'>
          {['Israeli Citizenship', 'Israeli Passport'].map((field) =>
            boolRadio(field)
          )}
        </div>
      }
      {[['Current School', 'Synogogue']].map((field) => renderRow(field))}
      {
        <div class="flex gap-10 pt-5 pb-5">
          {['High School Transcripts', 'Photo', 'Resume'].map((field) => (
            <Button fullWidth key={field} variant="contained" component="label">
              <div class="flex gap-1">
                <AddIcon />
                {field || 'Insurance Forms'}
              </div>
              <input type="file" name="field" hidden />
            </Button>
          ))}
        </div>
      }
      {[['Password', 'Confirm Password']].map((field) => renderRow(field))}
      <div class="mt-6">
        <Button type="submit" variant="outlined" onClick={submitHandler}>
          Submit
        </Button>
      </div>
    </form>
  );
}

export default InitialForm;
