import Header from "./header";

export default function Layout(props) {
  return (
    <>
      <Header></Header>
      <main>{props.children}</main>
    </>
  );
}
