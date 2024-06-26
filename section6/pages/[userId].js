export default function UserPage(props) {
  return <h1>{props.id}</h1>;
}

export async function getServerSideProps(context) {
  const { params } = context;
  const userId = params.userId;
  return {
    props: {
      id: "userid-" + userId,
    },
  };
}
