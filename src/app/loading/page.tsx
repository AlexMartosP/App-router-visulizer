import { wait } from "@/lib/utils";

export default async function Page() {
  await wait(1000);

  return (
    <>
      <p>Loading is done</p>
    </>
  );
}
