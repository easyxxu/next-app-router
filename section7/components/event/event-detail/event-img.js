import Image from "next/image";
import classes from "./event-img.module.css";
export default function EventImg(props) {
  const { img } = props;
  return (
    <Image
      src={"/" + img}
      alt="event-img"
      className={classes.img}
      width={300}
      height={400}
    />
  );
}
