import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
function NewMeetupForm(props) {
  // refs for the form inputs
  const titleInputRef = useRef();
  const addressInputRef = useRef();
  const picInputRef = useRef();
  const descInputRef = useRef();

  function submitHandler(event) {
    // function that creates the meetup object
    // and calls the action to be done with this meetup object
    event.preventDefault();

    // for each input in the new meetup form getting the values
    const enteredTitle = titleInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPic = picInputRef.current.value;
    const enteredDesc = descInputRef.current.value;

    // the meetup data object that is to be sent to the server or db
    const meetupData = {
      title: enteredTitle,
      address: enteredAddress,
      image: enteredPic,
      desc: enteredDesc,
    };

    console.log("meetupData: " + meetupData);

    props.onAddMeetup(meetupData);
  }

  return (
    <div>
      <h1>Add New Meetup</h1>
      <div className={classes.container}>
        <Card>
          <form className={classes.newMeetupForm} onSubmit={submitHandler}>
            <label htmlFor="meetup_title">Meetup Title</label>
            <input
              ref={titleInputRef} // refs used to create a reference to this dom element itseld
              id="meetup_title"
              type="text"
              required
              placeholder="Enter the title of the new meetup here"
            />

            <label htmlFor="meetup_address">Meetup Address</label>
            <input
              ref={addressInputRef}
              id="meetup_address"
              type="text"
              required
              placeholder="Enter the Address of the new meetup here"
            />

            <label htmlFor="meetup_pic">
              Add a Picture about/for your new Meetup
            </label>
            <input
              ref={picInputRef}
              id="meetup_pic"
              type="url"
              placeholder="Enter the titel of the new meetup here"
            />

            <label htmlFor="meetup_desc">Description</label>
            <textarea
              ref={descInputRef}
              id="meetup_desc"
              rows="5"
              required
            ></textarea>

            <button type="submit">Add Meetup</button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default NewMeetupForm;
