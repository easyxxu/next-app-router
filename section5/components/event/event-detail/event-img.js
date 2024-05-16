import classes from "./event-img.module.css";
export default function EventImg(props) {
  const { img } = props;
  return <img src={"/" + img} alt="event-img" className={classes.img} />;
}
