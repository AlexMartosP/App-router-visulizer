import { wait } from "@/lib/utils";

export default async function Page() {
  console.log("In slot1 page");
  await wait(1000);

  return (
    <>
      <p>Loading is done</p>
    </>
  );
}
