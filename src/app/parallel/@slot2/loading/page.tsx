import { wait } from "@/lib/utils";

export default async function Page() {
  console.log("In slot2 page");

  await wait(2000);

  return (
    <>
      <p>Loading is done</p>
    </>
  );
}
