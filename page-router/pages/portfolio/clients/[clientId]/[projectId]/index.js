import { useRouter } from "next/router";
export default function Project() {
  const router = useRouter();
  return (
    <div>
      <h1>Project "{router.query.projectId}" Page</h1>
    </div>
  );
}
