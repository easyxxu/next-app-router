import { useRouter } from "next/router";
import EventImg from "../../components/event/event-detail/event-img";
import EventInfo from "../../components/event/event-detail/event-info";
import { getEventById } from "../../dummy-data";
import EventWrap from "../../components/event/event-detail/event-wrap";

export default function EventDetailPage() {
  const router = useRouter();
  const event = getEventById(router.query.eventId);

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
