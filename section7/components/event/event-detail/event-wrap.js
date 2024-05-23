import classes from "./event-wrap.module.css";

export default function EventWrap(props) {
  return <div className={classes.wrap}>{props.children}</div>;
}
