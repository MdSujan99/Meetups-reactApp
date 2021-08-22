import { createContext, useState } from "react";

const FavoritesContext = createContext({
   favorites: [],
   totalFavorites: 0,
   addFavorite: (favoriteMeetup) => {},
   removeFavorite: (meetuId) => {},
   isItemFavorite: (meetuId) => {}
});

export function FavoritesContextProvider(props) {

   const [userFavorites, setUserFavorites] = useState([]);

   function addFavoriteHandles(favoriteMeetup){
      setUserFavorites((prevUserFavorites) => {
         return prevUserFavorites.concat(favoriteMeetup);
      });
   }
   function removeFavoriteHandles(meetupId){
      setUserFavorites((prevUserFavorites) => {
         return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
      });
   }
   function isItemFavoriteHandles(meetupId){
      return userFavorites.some(meetup => meetup.id === meetupId);
   }

   const context = {
      favorites: userFavorites,
      totalFavorites: userFavorites.length,
      addFavorite: addFavoriteHandles,
      removeFavorite: removeFavoriteHandles,
      isItemFavorite: isItemFavoriteHandles
   };



   return <FavoritesContext.Provider value={context}>
      { props.children}
   </FavoritesContext.Provider>
}

export default FavoritesContext;
