import { useRouter } from "next/router";
import EventList from "../../components/event/event-list";
import Filter from "../../components/filter/filter";
import { getAllEvents } from "../../dummy-data";

export default function EventsAllPage() {
  const DummyData = getAllEvents();
  const router = useRouter();

  const handleEventFilter = (startDate, endDate) => {
    const fullPath = `/events/${startDate}/${endDate}`;
    router.push(fullPath);
  };
  return (
    <>
      <Filter onSubmit={handleEventFilter} />
      <EventList events={DummyData} />
    </>
  );
}
