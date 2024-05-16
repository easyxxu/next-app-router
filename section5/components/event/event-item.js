import classes from "./event-item.module.css";
export default function EventItem(props) {
  const { title, image, description, location, date } = props;
  return (
    <div className={classes.item}>
      <p className={classes.title}>{title}</p>
      <img src={image} alt={title} className={classes.img} />
      <p className={classes.desc}>{description}</p>
      <p>{location}</p>
      <p>{date}</p>
    </div>
  );
}
