import React, { useContext, useState, createContext, FC } from 'react';
import { News } from '../controls/NewsList/NewsList';


interface userInfo {
  username: string;
  userID: number;
  favorites: News[];
  setUser: (arg: string) => void;
  setUserID: (arg: number) => void;
  setFavorites: (arg: News) => void;
}

const defaultState = {
  username: '',
  userID: 0,
  favorites: [],
}

const ThemeContext = createContext<Partial<userInfo>>(defaultState);

export const ContextProvider: FC = ({children}) => {

  // States
  const [username, setUser] = useLocalStorage('username', defaultState.username);
  const [userID, setUserID] = useLocalStorage('userID', defaultState.userID);
  const [favorites, setFavorites] = useLocalStorage('favorites', defaultState.favorites);


  return (
    <ThemeContext.Provider value={{
      username,
      userID,
      favorites,
      setUser,
      setUserID,
      setFavorites,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Supplies Context values in Consumer Components
const useMode = () => useContext(ThemeContext);

export default useMode;

