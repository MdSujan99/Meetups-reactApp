import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";
import classes  from "./AllMeetups.module.css"
function FavoritesPage() {
   const favoritesCtx = useContext(FavoritesContext);
   let content;

   if(favoritesCtx.totalFavorites === 0){
      content = <p>No favorites yet? Start adding some.</p>
   }
   else{
      content = <div><MeetupList meetups={favoritesCtx.favorites}/></div>
   }
   return (
      <div>
         <div className={classes.pageHeading}>
            <h1>Favorites</h1>
         </div>
         {content}
      </div>
   );
}

export default FavoritesPage;