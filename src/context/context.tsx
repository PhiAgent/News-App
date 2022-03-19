import React, { useContext, useState, createContext, FC } from 'react';
import { News } from '../components/controls/NewsList/NewsList';
import useLocalStorage from './../hooks/useLocalStorage';


interface userInfo {
  username: string;
  userID: number;
  favorites: News[];
  techNews: News[];
  businessNews: News[];
  worldNews: News[];
  setUser: (arg: string) => void;
  setUserID: (arg: number) => void;
  setFavorites: (arg: News) => void;
  setBusinessNews: (arg: News) => void;
  setTechNews: (arg: News) => void;
  setWorldNews: (arg: News) => void;
}

const defaultState = {
  username: '',
  userID: 0,
  favorites: [],
  businessNews: [],
  techNews: [],
  worldNews: [],
}

const ThemeContext = createContext<Partial<userInfo>>(defaultState);

export const ContextProvider: FC = ({children}) => {

  // States
  const [username, setUser] = useLocalStorage('username', defaultState.username);
  const [userID, setUserID] = useLocalStorage('userID', defaultState.userID);
  const [favorites, setFavorites] = useLocalStorage('favorites', defaultState.favorites);
  const [businessNews, setBusinessNews] = useLocalStorage('userID', defaultState.businessNews);
  const [techNews, setTechNews] = useLocalStorage('userID', defaultState.techNews);
  const [worldNews, setWorldNews] = useLocalStorage('userID', defaultState.worldNews);


  return (
    <ThemeContext.Provider value={{
      username,
      userID,
      favorites,
      techNews,
      businessNews,
      worldNews,
      setUser,
      setUserID,
      setFavorites,
      setTechNews,
      setBusinessNews,
      setWorldNews,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Supplies Context values in Consumer Components
const useMode = () => useContext(ThemeContext);

export default useMode;

