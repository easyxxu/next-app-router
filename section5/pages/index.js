import EventList from "../components/event/event-list";
import { getFeaturedEvents } from "../dummy-data";

export default function Home() {
  const featuredDummyData = getFeaturedEvents();

  return (
    <>
      <EventList events={featuredDummyData} />
    </>
  );
}
