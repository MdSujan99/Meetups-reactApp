// import { data } from "browserslist";
import { useState } from "react";
import { useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";
import classes from "./AllMeetups.module.css";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // loads the data from the firebase db
  // useEffect() here solves the problem that could cause this component go into infinite loop
  // useEffect() executes the "effect" when this component renders
  // after that it checks for equivalence of the "array of dependencies"
  // comparing the items aka the "dependencies" if their values have changed from last run of "effect"
  // if dependencies changed then effect will be executed again
  // else it won't execute effect again
  useEffect(
    () => {
      setIsLoading(true);

      fetch(
        "https://meetupsreactapp-edb34-default-rtdb.firebaseio.com/meetups.json"
      )
        .then((response) => {
          return response.json();
        })

        .then((data) => {
          setIsLoading(false); // change state to data is loaded
          console.log("loaded data: " + data); // data table from fire db
          const meetupsData = [];
          for (const key in data) {
            // key is each row
            const meetup = {
              id: key,
              ...data[key], // distribute the key-value pairs into this object from data
            };

            meetupsData.push(meetup);
          }
          setLoadedMeetups(meetupsData);
          console.log("meetup object: ", meetupsData);
        })
        .catch((error) => {
          console.log("Error in fetch:", error);
        });
    }, // effect - the function
    [] // array of dependencies - if this argument is not passed useEffect() will call the "effect"
    // whenever this component function executes
    // in this case the "array of dependencies" [] has no items aka "dependencies"
    // thence the "dependencies" dont change and "effect" executes only once
  );

  if (isLoading) {
    // fallback content
    return (
      <div>
        <h3>Loading Meetups...</h3>
      </div>
    );
  }

  return (
    <div>
      <div className={classes.pageHeading}>
        <h1>All Meetups Page</h1>
      </div>
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
}
export default AllMeetupsPage;
