import EventList from "../components/event/event-list";
import useSWR from "swr";
import { useEffect, useState } from "react";

export const BASE_URL = "https://nextjs-test-28bd6-default-rtdb.firebaseio.com";

export default function Home(props) {
  const [events, setEvents] = useState(props.events);
  const { data, error } = useSWR(BASE_URL + "/events.json", (url) =>
    fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const allEvents = transformedFetchedData(data);
      const featuredEvents = allEvents.filter(
        (event) => event.isFeatured === true
      );
      setEvents(featuredEvents);
    }
  }, [data]);

  if (error) return <p className="center">Failed to load.</p>;
  if (!data && !events) return <p className="center">Loading...</p>;
  if (events.length === 0) return <p>No Events!</p>;

  return (
    <>
      <EventList events={events} />
    </>
  );
}

export function transformedFetchedData(data) {
  const transformedData = [];

  for (const key in data) {
    transformedData.push({
      id: key,
      title: data[key].title,
      description: data[key].description,
      location: data[key].location,
      image: data[key].image,
      date: data[key].date,
      isFeatured: data[key].isFeatured,
    });
  }
  return transformedData;
}

export async function getStaticProps() {
  const res = await fetch(BASE_URL + "/events.json").then((res) => res.json());
  const data = transformedFetchedData(res).filter(
    (event) => event.isFeatured === true
  );

  return {
    props: {
      events: data,
    },
  };
}
