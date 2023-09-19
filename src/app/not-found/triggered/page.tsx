import { wait } from "@/lib/utils";
import { notFound } from "next/navigation";

export default async function Page() {
  notFound();

  return (
    <>
      <h2>This should not render</h2>
    </>
  );
}
