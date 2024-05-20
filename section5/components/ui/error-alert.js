import classes from "./error-alert.module.css";

export default function ErrorAlert(props) {
  return <div className={classes.error}>{props.children}</div>;
}
