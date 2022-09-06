import { useContext } from "react";
import { useHistory } from "react-router-dom";

import classes from "./MeetupItems.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

function MeetupItems(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const isItemFav = favoritesCtx.isItemFavorite(props.id);

  function toggleFavorites() {
    if (isItemFav) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        desc: props.desc,
        image: props.image,
        address: props.address,
      });
    }
  }

  function removeMeetup() {
    console.log("this item should be removed");
    // const history = useHistory();
    fetch(
      "https://meetupsreactapp-edb34-default-rtdb.firebaseio.com/" + // url to firebase realtime db
        "meetups/" + // the table
        props.id + // the row
        ".json",
      {
        method: "DELETE",
        mode: "cors",
        // body: JSON.stringify(meetupData), // convert a normal js object to json
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      console.log("the item with id" + props.id + " is removed");
    });
  }

  return (
    <Card>
      <li className={classes.itemContainer}>
        <div className={classes.item}>
          <img src={props.image} className={classes.dp} alt={props.title} />
          <div className={classes.details}>
            <div>
              <h3>{props.title}</h3>
              <address>{props.address}</address>
            </div>
            <div>
              <h3>{props.description}</h3>
            </div>
            <button onClick={toggleFavorites}>
              {isItemFav ? "Remove From Favorites" : "Add to Favorites"}
            </button>
            <button onClick={removeMeetup}>Remove</button>
          </div>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItems;
