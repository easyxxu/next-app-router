import { useRouter } from "next/router";
import EventList from "../components/event/event-list";
import Filter from "../components/filter/filter";
import { getFeaturedEvents } from "../dummy-data";

export default function Home() {
  const router = useRouter();
  const featuredDummyData = getFeaturedEvents();

  const handleEventFilter = (startDate, endDate) => {
    const fullPath = `/events/${startDate}/${endDate}`;
    router.push(fullPath);
  };
  return (
    <>
      <Filter onSubmit={handleEventFilter} />
      <EventList events={featuredDummyData} />
    </>
  );
}
