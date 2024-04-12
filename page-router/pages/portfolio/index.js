import Link from "next/link";
import { useRouter } from "next/router";

export default function Portfolio() {
  const router = useRouter();

  const clients = [
    { id: 1, name: "Max" },
    { id: 2, name: "jay" },
  ];
  return (
    <div>
      <h1>Portfolio Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/portfolio/clients/[clientId]",
                query: { clientId: client.name },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
