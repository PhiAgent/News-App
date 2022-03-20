

import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import ListItem from '@mui/material/ListItem';
import Newslet from '../Newslet/Newslet';

// the newsList component will take a prop
// of objects and render the news items

const styles = {
  '& .MuiList-root, & .MuiListItem-root': {
    paddingTop: '2px',
    paddingBottom: '2px',
    width: '100%',
    paddingRight: '2px',
    paddingLeft: '2px'
  },
}

export interface News {
  id: number;
  category: string;
  source: string;
  author: string;
  title: string;
  description: string;
  url: string;
  urltoimage: string;
  publishedon: string;
};

type Props = {
  news: News[];
  faves: Boolean;
}

const NewsList = ({news, faves}: Props) => {

  return(
    <Stack direction="column" spacing={1} sx={styles}>
      <List>
        {
          news &&
        news.map(
          (newslet, i) =>
          <ListItem key={`${newslet.id} ${i}`}>
            <Newslet
              id={newslet.id}
              category={newslet.category}
              source={newslet.source}
              author={newslet.author}
              title={newslet.title}
              description={newslet.description}
              url={newslet.url}
              urltoimage={newslet.urltoimage}
              publishedon={newslet.publishedon}
              faves={faves}
            />
          </ListItem>
        )
        }
      </List>
    </Stack>
  )
};

export default NewsList;