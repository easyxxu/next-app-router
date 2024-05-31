import { useState } from "react";
import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/event/event-list";

export default function Home(props) {
  const [events, setEvents] = useState(props.events);

  if (!events) return <p className="center">Loading...</p>;
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
  const events = await getFeaturedEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 1800,
  };
}
