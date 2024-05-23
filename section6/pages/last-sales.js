import { useEffect, useState } from "react";
import useSWR from "swr";

export default function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
  // const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR(
    "https://nextjs-test-28bd6-default-rtdb.firebaseio.com/sales.json",
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const transformedData = [];
      for (const key in data) {
        transformedData.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedData);
    }
  }, [data]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("https://nextjs-test-28bd6-default-rtdb.firebaseio.com/sales.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const transformedData = [];
  //       for (const key in data) {
  //         transformedData.push({
  //           id: key,
  //           username: data[key].username,
  //           volume: data[key].volume,
  //         });
  //       }
  //       setSales(transformedData);
  //       setIsLoading(false);
  //     });
  // }, []);
  if (error) {
    return <p>Failed to load.</p>;
  }
  if (!data && !sales) {
    return <p>Loading...</p>;
  }
  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  return fetch(
    "https://nextjs-test-28bd6-default-rtdb.firebaseio.com/sales.json"
  )
    .then((res) => res.json())
    .then((data) => {
      const transformedData = [];

      for (const key in data) {
        transformedData.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      return { props: { sales: transformedData } };
    });
}
