import InlineCode from "@/components/InlineCode";
import { wait } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import Data from "./Data";
import prisma from "@/lib/prisma";

export default async function Page() {
  const messages = await prisma.message.findMany();

  async function action(text: string) {
    "use server";

    if (Math.round(Math.random()) === 1) {
      await prisma.message.create({
        data: {
          text,
        },
      });
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
      <p className="mt-2">
        It works by adding data optimistically and then when revalidation is
        triggered the new and fresh list from DB is rendered and if everything
        is OK the list will stay the same or the last added will get removed.
      </p>
      <p className="mt-2">
        Try sending a message and there is a 50% chance that the message goes
        through or not.
      </p>
      <div className="py-4"></div>
      <Data action={action} messages={messages} />
    </>
  );
}
