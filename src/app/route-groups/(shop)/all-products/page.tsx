import { Button } from "@/components/Button";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>All products</h1>
      <div className="py-2"></div>
      <Button variant="secondary" asChild>
        <Link href="/route-groups/123">Single product</Link>
      </Button>
    </>
  );
}
