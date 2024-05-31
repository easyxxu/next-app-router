import { getAllEvents, getEventById } from "../../helpers/api-util";
import EventImg from "../../components/event/event-detail/event-img";
import EventInfo from "../../components/event/event-detail/event-info";
import EventWrap from "../../components/event/event-detail/event-wrap";

export default function EventDetailPage(props) {
  const event = props.selectedEvent;

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
  const selectedEvent = await getEventById(eventId);

  return {
    props: {
      selectedEvent: selectedEvent,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const allEvents = await getAllEvents();
  const pathsWithParams = allEvents.map((event) => ({
    params: { eventId: event.id },
  }));

  return {
    paths: pathsWithParams,
    fallback: false,
  };
}
