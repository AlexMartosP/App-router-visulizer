import { Button } from "@/components/Button";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Intercepting routes</h1>
      <p className="mt-4">
        Click the button to navigate but still seeing this page
      </p>
      <div className="pt-6"></div>
      <Button asChild>
        <Link href="/intercepting/image">View image</Link>
      </Button>
    </div>
  );
}
