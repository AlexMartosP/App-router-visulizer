import { wait } from "@/lib/utils";

export default async function Delivery() {
  await wait(5000);

  return <p className="text-sm">Delivery time: 1-2 days</p>;
}
