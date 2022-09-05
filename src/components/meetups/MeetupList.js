import MeetupItems from "./MeetupItems";
import classes from "./MeetupList.module.css";
function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        // map each meetup int a jsx item MeetupItems
        <MeetupItems
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          desc={meetup.desc}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
