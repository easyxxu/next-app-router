import Link from "next/link";

export default function Meals() {
  return (
    <div>
      <h1>Meals</h1>
      <Link href={"/meals/share"}>Share</Link>
    </div>
  );
}
