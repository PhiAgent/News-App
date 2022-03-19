import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { News } from '../NewsList/NewsList';
import Grid from '@mui/material/Grid';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addFavorite, removeFavorite } from '../../../utils/utils';
import useNews from '../../../context/context';
import axios from 'axios';
const url = require('./../../../../server/url');

const style = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const Newslet = ({ id, category, source, author, title, description, url, urltoimage, publishedon}: News) => {

  var [favorite, markFavorite] = useState(0);
  useEffect(() => { }, [favorite]);
  const {favorites, setFavorites, businessNews, worldNews, techNews, userID} = useNews();

  // if not favorite, make favorite and
  // add to favorites in front end and
  // send request to backend
  // else do the same
  const group = category === 'business' ? businessNews : category === 'world news' ? worldNews : techNews;

  const faveFunc = () => {
    if(!favorite){
      markFavorite(1);
      const newFavorites: any = group && favorites && addFavorite(id, group,favorites);
      newFavorites && setFavorites && setFavorites(newFavorites);
      userID &&
      axios
        .post(`${url}/favorite`, {userID, newsID: id})
        .then(results => results.data)
        .catch(err => err);
    } else {
      markFavorite(0);
      const selectFavorites: any = group && favorites && removeFavorite(id, favorites);
      selectFavorites && setFavorites && setFavorites(selectFavorites);
      userID &&
      axios
        .delete(`${url}/favorite`, {params: {userID, newsID: id }})
        .then(results => results.data)
        .catch(err => err);
    }
  };

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