import EventList from "../components/event/event-list";
import Layout from "../components/layout/layout";
import { getFeaturedEvents } from "../dummy-data";

export default function Home() {
  const featuredDummyData = getFeaturedEvents();
  return (
    <Layout>
      <EventList events={featuredDummyData} />
    </Layout>
  );
}
