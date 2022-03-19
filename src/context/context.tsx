import React, { useContext, useState, createContext, FC } from 'react';
import { News } from '../components/controls/NewsList/NewsList';
import {useLocalStorage} from './../hooks/useLocalStorage';


interface userInfo {
  username: string;
  userID: number;
  favorites: News[];
  techNews: News[];
  businessNews: News[];
  worldNews: News[];
  chosen: Boolean;
  setUser: (arg: string) => void;
  setUserID: (arg: number) => void;
  setFavorites: (arg: News) => void;
  setBusinessNews: (arg: News) => void;
  setTechNews: (arg: News) => void;
  setWorldNews: (arg: News) => void;
  choose: (arg: Boolean) => void;
}

export const defaultState = {
  username: '',
  userID: 0,
  favorites: [],
  businessNews: [],
  techNews: [],
  worldNews: [],
  chosen: false,
}

const ThemeContext = createContext<Partial<userInfo>>({});

export const ContextProvider: FC = ({children}) => {

  // States
  const [username, setUser] = useLocalStorage('username', defaultState.username);
  const [userID, setUserID] = useLocalStorage('userID', defaultState.userID);
  const [favorites, setFavorites] = useLocalStorage('favorites', defaultState.favorites);
  const [businessNews, setBusinessNews] = useLocalStorage('userID', defaultState.businessNews);
  const [techNews, setTechNews] = useLocalStorage('userID', defaultState.techNews);
  const [worldNews, setWorldNews] = useLocalStorage('userID', defaultState.worldNews);
  const [chosen, choose] = useLocalStorage('chosen', defaultState.chosen);


  return (
    <ThemeContext.Provider value={{
      username,
      userID,
      favorites,
      techNews,
      businessNews,
      worldNews,
      chosen,
      setUser,
      setUserID,
      setFavorites,
      setTechNews,
      setBusinessNews,
      setWorldNews,
      choose,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Supplies Context values in Consumer Components
const useNews = () => useContext(ThemeContext);

export default useNews;

