import { useRouter } from "next/router";

export default function ResultTitle() {
  const router = useRouter();
  const startDate = router.query.slug[0];
  const endDate = router.query.slug[1];

  return (
    <div>
      <p>
        Start: {startDate} ~ End: {endDate}
      </p>
    </div>
  );
}
