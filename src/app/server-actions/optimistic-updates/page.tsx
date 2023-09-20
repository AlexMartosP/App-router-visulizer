import InlineCode from "@/components/InlineCode";
import { wait } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import Data from "./Data";

const dataInMemory: string[] = [];

export default function Page() {
  async function action(text: string) {
    "use server";

    if (Math.round(Math.random()) === 1) {
      dataInMemory.push(text);
      await wait(1000);
    }

    revalidatePath("/server-actions/optimistic-updates");
  }

  return (
    <>
      <h1>
        Optimistic UI with <InlineCode>useOptimistic()</InlineCode>
      </h1>
      <p className="mt-4">
        With this hook you can update the UI before the server action responds.
      </p>
      <div className="py-4"></div>
      <Data action={action} messages={dataInMemory} />
    </>
  );
}
