import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const initialValues = {
  username: "",
  // password: "",
}

const Login = () => {

  const [input, setInput] = useState('');
  const [errors, setErrors] = useState('');

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  // Validates username
  const validate = () => {
    let noSpace = /^\S+$/g;
    let noSpecial = /^[a-zA-Z0-9]+$/g;

    if (input.length < 3) {//Too short
      setErrors('Username must be at least 3 characters');
      return false;

    } else if (input.length > 20) {//Too Long
      setErrors('Username must be at most 20 characters');
      return false;

    } else if ('0123456789'.includes(input[0])) {
      //Does not start with letter
      setErrors('Username must start with letter');
      return false;

    } else if (!input) {//Nothing entered
      setErrors('Username must be at least 3 characters');
      return false;

    } else if (!noSpace.test(input)) {//Has spaces
      setErrors('Username must have no space');
      return false;
    }

    else if (!noSpecial.test(input)) {//Has special Characters
      setErrors('No special characters allowed');
      return false;
    }

    setErrors('');
    return true;
  };

  const helperText = () => errors ? errors : `It does not have to be your email`;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let noErrors = validate();

    if (noErrors) {
      setInput('');
      //make request to database
      // to add to database
      // if not present already
    }
  }

  return(
    <Stack direction='column' spacing='5' className="login">
      <Stack direction='column' spacing='5' className="tab-container">
        <div className="form-content">
          <div className="inputHelper">
            <input
              type="text"
              className="form-control username"
              id="username"
              name="username"
              aria-describedby="usernameHelp"
              placeholder="What is your username?"
              value={input}
              onChange={handleChange}
            />
            <small id="usernameHelp" className={`form-text text-muted ${errors ? "errors" : ""}`}>{helperText()}</small>
          </div>
          <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
        </div>
      </Stack>
    </Stack>
  )
};

export default Login;