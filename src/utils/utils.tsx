
import { News } from "../components/controls/NewsList/NewsList";


// Remove news from Favorites list on Frontend
export const removeFavorite = (id: number, favorites: News[]) =>
favorites.filter((favorite: News) => favorite['id'] !== id);


// Add news to favorites on Frontend
export const addFavorite = (id: number, category: News[], favorites: News[]) => {
  const fave: News | undefined = category.find((newslet: News) => newslet['id'] === id);
  if (fave) return favorites.concat([fave]);
};


// Check to see if news has been favorited on Frontend
export const checkFavorite = (id: number, favorites: News[]) =>
favorites.some(favorite => favorite['id'] === id);