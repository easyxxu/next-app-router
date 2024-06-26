import Layout from "../components/layout/layout";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="Find a lot of great events" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
