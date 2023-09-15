import { wait } from "@/lib/utils";
import { notFound } from "next/navigation";

export default async function Page() {
  await wait(1000);
  notFound();
  return (
    <>
      <p>This page should not render...OOPS</p>
    </>
  );
}
