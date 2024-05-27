import Link from "next/link";
import EventItem from "./event-item";
import classes from "./event-list.module.css";

export default function EventList({ events }) {
  return (
    <ul className={classes.list}>
      {events.map((event) => {
        return (
          <li key={event.id}>
            <Link
              href={{
                pathname: "/events/[eventId]",
                query: {
                  eventId: event.id,
                },
              }}
            >
              <EventItem
                title={event.title}
                image={event.image}
                description={event.description}
                location={event.location}
                date={event.date}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
