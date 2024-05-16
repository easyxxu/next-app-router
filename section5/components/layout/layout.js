import Header from "./header";
import classes from "./layout.module.css";
export default function Layout(props) {
  return (
    <>
      <Header></Header>
      <main className={classes.main}>{props.children}</main>
    </>
  );
}
