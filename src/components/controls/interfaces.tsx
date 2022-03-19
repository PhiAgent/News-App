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


export interface userInfo {
  username: string;
  userID: number;
  favorites: any;
  techNews: News[];
  businessNews: News[];
  worldNews: News[];
  chosen: Boolean;
  selected: string;
  setSelect: any;
  setUser: (arg: string) => void;
  setUserID: (arg: number) => void;
  setFavorites: (arg: News) => void;
  setBusinessNews: (arg: News) => void;
  setTechNews: (arg: News) => void;
  setWorldNews: (arg: News) => void;
  choose: (arg: Boolean) => void;
};