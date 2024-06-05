import Image from "next/image";
import classes from "./event-item.module.css";
export default function EventItem(props) {
  const { title, image, description, location, date } = props;
  return (
    <div className={classes.item}>
      <p className={classes.title}>{title}</p>
      <Image
        src={`/${image}`}
        alt={title}
        className={classes.img}
        width={300}
        height={500}
      />
      <p className={classes.desc}>{description}</p>
      <p>{location}</p>
      <p>{date}</p>
    </div>
  );
}
