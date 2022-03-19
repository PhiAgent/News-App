import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Homepage from './Homepage';
import Login from './Login';
import Stack from '@mui/material/Stack';
import Feed from './Feed';
import { Button } from '../controls';
import useNews from '../../context/context';


const style = {
  paddingTop: '15px',
  paddingBottom: '15px',
}

// chosen is a state that will be stored
// in context, upon clicking a buton on
// homepage, chosen will be set to true
// while chosen is true
// the appropriate feed will be displayed
// while chosen is true, homepage button will
// be displayed in the first grid
// the main point of the homepage is to
// allow for more time to fetch data from database

// two factors that determine what's displayed
// if username and chosen are false
// display Login
// if only username is truthy
// display homepage
// if both are truthy
// display main page

const Body = () => {

  // sends user to homepage
  const handleSubmit = () => {};

  const {username, chosen} = useNews();

  const display = () => {
    if(!username && !chosen){
      return <Login/>;
    } else if(username && !chosen){
      return <Homepage/>;
    } else {
      return <Feed/>;
    }
  }

  return (
    <Grid container sx={style}>
      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        {display()}
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  )
};

export default Body;