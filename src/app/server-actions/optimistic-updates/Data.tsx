"use client";
import { FormEvent, experimental_useOptimistic as useOptimistic } from "react";
import { Button } from "@/components/Button";
import { Input } from "@/components/ui/Input";
import { Separator } from "@/components/ui/Separator";
import * as z from "zod";
import { Message } from "@prisma/client";
import { Dot } from "lucide-react";

const textSchema = z.string();

export default function Data({
  action,
  messages,
}: {
  action: (text: string) => Promise<void>;
  messages: Message[];
}) {
  const [optimisticMessages, addOptimisticMessages] =
    useOptimistic<Message[]>(messages);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const text = textSchema.safeParse(formData.get("text"));

    if (text.success) {
      addOptimisticMessages((state) => [
        ...state,
        {
          id: Date.now(),
          text: text.data,
          dateSent: new Date(),
        },
      ]);

      action(text.data);
    }
  }

  return (
    <>
      <h2 className="font-semibold">Messages list</h2>
      <div className="py-2"></div>
      {optimisticMessages.length > 0 ? (
        <ul role="list" className="flex flex-col items-start gap-2">
          {optimisticMessages.map((message, i) => (
            <li
              className="relative pt-2 pb-6 px-4 w-full lg:w-96 bg-blue-200 rounded-md rounded-bl-none"
              key={i}
            >
              {message.text}
              <span className="absolute bottom-1 left-4 text-xs">
                {formatDate(message.dateSent)}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no messages</p>
      )}
      <Separator className="my-4" />
      <form onSubmit={handleSubmit}>
        <Input name="text" placeholder="Try typing something" />
        <div className="py-4"></div>
        <Button>Submit</Button>
      </form>
    </>
  );
}

function formatDate(date: Date) {
  return Intl.DateTimeFormat("se-sv", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(date);
}
