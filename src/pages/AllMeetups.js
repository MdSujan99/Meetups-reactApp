import { data } from "browserslist";
import { useState } from "react";
import { useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";
import classes  from "./AllMeetups.module.css" 

function AllMeetupsPage() {
   const [isLoading, setIsLoading] = useState(true);
   const [loadedMeetups, setLoadedMeetups] = useState([]);

   useEffect(() => {
      setIsLoading(true);
      fetch('https://meetupsreactapp-edb34-default-rtdb.firebaseio.com/meetups.json')
      .then(response => {
         return response.json()
      }).then(data => {
         setIsLoading(false);
         console.log(data);
         const meetupsData = [];

         for (const key in data) {
            const meetup = {
               id: key,
               ...data[key]
            };

            meetupsData.push(meetup);
         }

         setLoadedMeetups(meetupsData);
      }).catch(error => {
         console.log("Error in fetch:",error);
      });
   }, []);

   if (isLoading){
      return (
      <div>
         <h3>Loading Meetups</h3>
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