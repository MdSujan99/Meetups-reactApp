import { useHistory } from "react-router";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
function NewMeetupsPage() {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    const tableName = "meetups";
    // send http request to firebase db
    fetch(
      "https://meetupsreactapp-edb34-default-rtdb.firebaseio.com/" +
        tableName + // url to firebase realtime db
        ".json",
      {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(meetupData), // convert a normal js object to json
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      //go back to home page
      history.replace("/");
    });
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>;
}

export default NewMeetupsPage;
