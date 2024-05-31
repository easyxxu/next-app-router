export async function getAllEvents() {
  const res = await fetch(
    "https://nextjs-test-28bd6-default-rtdb.firebaseio.com/events.json"
  );
  const data = await res.json();

  const events = [];

  for (const key in data) {
    events.push({ id: key, ...data[key] });
  }
  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(startDate, endDate) {
  const startTime = new Date(startDate).getTime();
  const endTime = new Date(endDate).getTime();
  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventTime = new Date(event.date).getTime();
    return eventTime >= startTime && eventTime <= endTime;
  });

  return filteredEvents;
}
