import { useRouter } from "next/router";
import { BASE_URL, transformedFetchedData } from "..";
import EventList from "../../components/event/event-list";
import Filter from "../../components/filter/filter";
import useSWR from "swr";
import { useEffect, useState } from "react";

export default function EventsAllPage(props) {
  const router = useRouter();
  const [events, setEvents] = useState(props.events);

  const { data, error } = useSWR(BASE_URL + "/events.json", (url) =>
    fetch(url).then((res) => res.json())
  );
  const allEvents = transformedFetchedData(data);

  useEffect(() => {
    if (data) {
      setEvents(allEvents);
    }
  }, [data]);

  const handleEventFilter = (startDate, endDate) => {
    const fullPath = `/events/${startDate}/${endDate}`;
    router.push(fullPath);
  };

  if (error) return <p className="center">Failed to load.</p>;
  if (!data && !events) return <p className="center">Loading...</p>;
  if (events.length === 0) return <p>No Events!</p>;

  return (
    <>
      <Filter onSubmit={handleEventFilter} />
      <EventList events={events} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(BASE_URL + "/events.json").then((res) => res.json());
  const data = transformedFetchedData(res);

  return {
    props: {
      events: data,
    },
  };
}
