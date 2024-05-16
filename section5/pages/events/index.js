import EventList from "../../components/event/event-list";
import Filter from "../../components/filter/filter";
import { getAllEvents } from "../../dummy-data";

export default function EventsAllPage() {
  const DummyData = getAllEvents();

  return (
    <>
      <Filter />
      <EventList events={DummyData} />
    </>
  );
}
