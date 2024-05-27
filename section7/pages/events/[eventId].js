import { useRouter } from "next/router";
import EventImg from "../../components/event/event-detail/event-img";
import EventInfo from "../../components/event/event-detail/event-info";
import EventWrap from "../../components/event/event-detail/event-wrap";
import { BASE_URL, transformedFetchedData } from "..";

export default function EventDetailPage(props) {
  const router = useRouter();
  const event = props.event;

  if (!event) return <p>Not Found Event!</p>;

  return (
    <EventWrap>
      <EventImg img={event.image} />
      <EventInfo
        title={event.title}
        description={event.description}
        location={event.location}
        date={event.date}
      />
    </EventWrap>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const eventId = params.eventId;
  const res = await fetch(BASE_URL + "/events.json").then((res) => res.json());
  const data = transformedFetchedData(res).find(
    (event) => event.id === eventId
  );
  return {
    props: {
      event: data,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(BASE_URL + "/events.json").then((res) => res.json());
  const ids = transformedFetchedData(res).map((event) => event.id);
  const pathsWithParams = ids.map((id) => ({ params: { eventId: id } }));
  return {
    paths: pathsWithParams,
    fallback: false,
  };
}
