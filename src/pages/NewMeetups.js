import { useHistory } from "react-router";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
function NewMeetupsPage() {
   const history = useHistory();
   function addMeetupHandler(meetupData){
      // 
      fetch(
         'https://meetupsreactapp-edb34-default-rtdb.firebaseio.com/meetups.json',
         {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
               'Content-Type': 'application/json'
            }
         }
      ).then(() => {
         //go back to home page
         history.replace('/');
      })
   }
   
   return (
      <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
   );
}

export default NewMeetupsPage;