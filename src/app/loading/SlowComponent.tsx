import { wait } from "@/lib/utils";

export default async function SlowComponent() {
  await wait(2000);

  return <p>Slow componented loaded</p>;
}
