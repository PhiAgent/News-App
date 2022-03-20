import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
const url = require('./../../../server/url');
import axios from 'axios';
import {Button, Input} from '../controls';
import useNews from './../../context/context';
import {News} from './../controls/NewsList/NewsList'


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


const Login = () => {

  const [user, setUsername] = useState('');
  const [errors, setErrors] = useState('');
  const {
    setUser,
    setUserID,
    setFavorites,
    setTechNews,
    setBusinessNews,
    setWorldNews,
    username
  } = useNews();

  const handleChange = (e: any) => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    // fetch business news
    axios
      .get(`${url}/business`)
      .then(result => setBusinessNews && setBusinessNews(result.data))
      .catch(err => {
        console.log(err.data);
      })

    // fetch world news
    axios
      .get(`${url}/world`)
      .then(result => setWorldNews && setWorldNews(result.data))
      .catch(err => err)

    // fetch tech news
    axios
      .get(`${url}/tech`)
      .then(result => setTechNews && setTechNews(result.data))
      .catch(err => err)
  }, []);

  // Validates username
  const validate = () => {
    let noSpace = /^\S+$/g;
    let noSpecial = /^[a-zA-Z0-9]+$/g;

    if (user.length < 3) {//Too short
      setErrors('Username must be at least 3 characters');
      return false;

    } else if (user.length > 20) {//Too Long
      setErrors('Username must be at most 20 characters');
      return false;

    } else if ('0123456789'.includes(user[0])) {
      //Does not start with letter
      setErrors('Username must start with letter');
      return false;

    } else if (!user) {//Nothing entered
      setErrors('Username must be at least 3 characters');
      return false;

    } else if (!noSpace.test(user)) {//Has spaces
      setErrors('Username must have no space');
      return false;
    }

    else if (!noSpecial.test(user)) {//Has special Characters
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
      setUser && setUser(user);// set username in context
      axios
        .post(`${url}/user`, {username: user})
        .then(result => {
          setUserID && setUserID(result.data[0]['id']);//set userID in context
          return axios.get(`${url}/favorite`, { params: { userID: result.data[0]['id']
          }});
        })
        .then(response => setFavorites && setFavorites(response.data))//set favorites in context
        .catch(err => err.msg);
      setUsername('');
    }
  }


  return(
    <Stack direction='column' spacing='5' className="login">
      <Stack spacing={2} sx={style}>
        <div className="usernameHelper">
          <Input
            label="Enter your username..."
            name="username"
            value={user}
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