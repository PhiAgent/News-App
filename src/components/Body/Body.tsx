import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


const style = {
  paddingTop: '15px',
  paddingBottom: '15px',
}

// chosen is a state that will be stored
// in context, upon clicking a buton on
// homepage, chosen will be set to true
// while chosen is true
// the appropriate feed will be displayed

const Body = () => {

  return (
    <Grid container sx={style}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  )
};

export default Body;