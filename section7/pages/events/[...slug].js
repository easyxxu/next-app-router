import EventList from "../../components/event/event-list";
import ResultTitle from "../../components/event/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import { getFilteredEvents } from "../../helpers/api-util";

export default function FilteredEvent(props) {
  const filteredEvents = props.events;

  if (!filteredEvents) return <p className="center">LOADING...</p>;
  if (filteredEvents.length === 0)
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
      <ResultTitle />
      <EventList events={filteredEvents} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const startDate = params.slug[0];
  const endDate = params.slug[1];

  const filteredEvents = await getFilteredEvents(startDate, endDate);

  return {
    props: {
      events: filteredEvents,
    },
  };
}
