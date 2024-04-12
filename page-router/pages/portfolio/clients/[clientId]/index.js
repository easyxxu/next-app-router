import { useRouter } from "next/router";

export default function Client() {
  const router = useRouter();

  const handleProject = () => {
    router.push({
      pathname: "/portfolio/clients/[clientId]/[projectId]",
      query: { clientId: "Max", projectId: "projectA" },
    });
  };

  return (
    <div>
      <h1>Client: {router.query.clientId}</h1>
      <button onClick={handleProject}>Load ProjectA</button>
    </div>
  );
}
