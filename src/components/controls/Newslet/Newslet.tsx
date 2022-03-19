import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { News } from '../NewsList/NewsList';
import Grid from '@mui/material/Grid';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const style = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const Newslet = ({ id, category, source, author, title, description, url, urltoimage, publishedon}: News) => {

  var [favorite, markFavorite] = useState(0);
  useEffect(() => { }, [favorite]);

  const faveFunc = () => {};

  return(
    <Box sx={style}>
      <Grid container >
        <Grid item><b><a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="url"
          >
            {title}</a></b></Grid>
        <Grid item md></Grid>
        <Grid item > <small>
          <a onClick={() => faveFunc()}>
            {favorite ?
              <FavoriteIcon fontSize="medium" className="heart" /> :
              <FavoriteBorderIcon fontSize="medium" className="heart" />
            }
          </a>
        </small>
        </Grid>
      </Grid>
    </Box>
  )
};

export default Newslet;