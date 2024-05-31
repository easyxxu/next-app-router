import { useRouter } from "next/router";
import EventList from "../../components/event/event-list";
import Filter from "../../components/filter/filter";
import { useState } from "react";
import { getAllEvents } from "../../helpers/api-util";

export default function EventsAllPage(props) {
  const router = useRouter();
  const [events, setEvents] = useState(props.events);

  const handleEventFilter = (startDate, endDate) => {
    const fullPath = `/events/${startDate}/${endDate}`;
    router.push(fullPath);
  };

  if (!events) return <p className="center">Loading...</p>;
  if (events.length === 0) return <p>No Events!</p>;

  return (
    <>
      <Filter onSubmit={handleEventFilter} />
      <EventList events={events} />
    </>
  );
}

export async function getStaticProps() {
  const allEvents = await getAllEvents();

  return {
    props: {
      events: allEvents,
    },
    revalidate: 60,
  };
}
