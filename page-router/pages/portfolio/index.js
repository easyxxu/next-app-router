import Link from "next/link";
import { useRouter } from "next/router";

export default function Portfolio() {
  const router = useRouter();

  const projects = [
    { id: 1, title: "Project 1" },
    { id: 2, title: "Project 2" },
  ];
  return (
    <div>
      <h1>Portfolio Page</h1>
      <ul>
        {projects.map((project) => (
          <li>
            <Link
              href={{
                pathname: "/portfolio/[projectId]",
                query: { projectId: project.id },
              }}
            >
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
