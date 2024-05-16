import classes from "./event-info.module.css";

export default function EventInfo(props) {
  const { title, description, location, date } = props;
  const prettyDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className={classes.info}>
      <h2 className={classes.title}>{title}</h2>
      <p>{description}</p>
      <p>🏢 {location}</p>
      <p>🗓️ {prettyDate}</p>
    </div>
  );
}
