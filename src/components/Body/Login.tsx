import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
const url = require('./../../../server/url');
import axios from 'axios';
import {Button, Input} from '../controls';


const style = {
  borderRadius: 5,
  bgcolor: 'background.paper',
  position: 'fixed',
  top: '40%',
  left: '50%',
  display: 'flex',
  flexDirection: 'column',
  p: 3.5,
  transform: 'translate(-50%, -50%)',
  width: '50%',
  height: 'auto',
  border: '2px solid #fff',
  alignItems: "center",
  '& .MuiTextField-root': { m: 1, width: '90%' },
};

// Notes
// to do, import context setUser into this component
// on loging in, set user in context
// upon fetching user information from database
// set userId in context
// userId is what will be supplied for adding and
// removing favorites in other components

const Login = () => {

  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState('');

  const handleChange = (e: any) => {
    setUsername(e.target.value);
  };

  // Validates username
  const validate = () => {
    let noSpace = /^\S+$/g;
    let noSpecial = /^[a-zA-Z0-9]+$/g;

    if (username.length < 3) {//Too short
      setErrors('Username must be at least 3 characters');
      return false;

    } else if (username.length > 20) {//Too Long
      setErrors('Username must be at most 20 characters');
      return false;

    } else if ('0123456789'.includes(username[0])) {
      //Does not start with letter
      setErrors('Username must start with letter');
      return false;

    } else if (!username) {//Nothing entered
      setErrors('Username must be at least 3 characters');
      return false;

    } else if (!noSpace.test(username)) {//Has spaces
      setErrors('Username must have no space');
      return false;
    }

    else if (!noSpecial.test(username)) {//Has special Characters
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
      axios
        .post(`${url}/user`, {username})
        .then(result => {
          // set users id in context
          // use this for future favorites
          // result.data[0].id
        })
        .catch(err => err.msg);
      setUsername('');
      // set username in context
    }
  }

  return(
    <Stack direction='column' spacing='5' className="login">
      <Stack spacing={2} sx={style}>
        <div className="usernameHelper">
          <Input
            label="Enter your username..."
            name="username"
            value={username}
            onChange={handleChange}
            helperText={helperText()}
            error={errors ? true : false}
          />
        </div>
        <Button
          message="Enter"
          variant="text"
          onClick={handleSubmit}
          color="primary"
          size="large"
        />
      </Stack>
    </Stack>
  )
};

export default Login;