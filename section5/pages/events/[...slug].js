import { useRouter } from "next/router";
import EventList from "../../components/event/event-list";
import ResultTitle from "../../components/event/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import { getFilteredEvents } from "../../dummy-data";

export default function FilteredEvent(props) {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) return <p className="center">LOADING...</p>;

  const startDate = filterData[0];
  const endDate = filterData[1];

  const filteredEvents = getFilteredEvents(startDate, endDate);
  if (!filteredEvents || filteredEvents.length === 0)
    return (
      <>
        <ErrorAlert>
          <p className="center">No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  return (
    <>
      <ResultTitle startDate={startDate} endDate={endDate} />
      <EventList events={filteredEvents} />
    </>
  );
}
