import { BASE_URL, transformedFetchedData } from "..";
import EventList from "../../components/event/event-list";
import ResultTitle from "../../components/event/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

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

  const res = await fetch(BASE_URL + "/events.json").then((res) => res.json());
  const allEvents = transformedFetchedData(res);

  function handlefilteredEvents(startDate, endDate) {
    const startTime = new Date(startDate).getTime();
    const endTime = new Date(endDate).getTime();

    let filteredEvents = allEvents.filter((event) => {
      const eventTime = new Date(event.date).getTime();
      return eventTime >= startTime && eventTime <= endTime;
    });
    return filteredEvents;
  }
  const filteredEvent = handlefilteredEvents(startDate, endDate);

  return {
    props: {
      events: filteredEvent,
    },
  };
}
