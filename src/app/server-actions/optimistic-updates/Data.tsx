"use client";
import { FormEvent, experimental_useOptimistic as useOptimistic } from "react";
import { Button } from "@/components/Button";
import { Input } from "@/components/ui/Input";
import { Separator } from "@/components/ui/Separator";
import * as z from "zod";

const textSchema = z.string();

export default function Data({
  action,
  messages,
}: {
  action: (text: string) => Promise<void>;
  messages: string[];
}) {
  const [optimisticMessages, addOptimisticMessages] = useOptimistic<string[]>(
    messages
    // (state: string[], newMessage: string) => [...state, newMessage]
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const text = textSchema.safeParse(formData.get("text"));

    if (text.success) {
      addOptimisticMessages((state) => [...state, text.data]);
      // addOptimisticMessages(text.data);

      action(text.data);
    }
  }

  console.log(optimisticMessages);

  return (
    <>
      <h2 className="font-semibold">Messages list</h2>
      {optimisticMessages.length > 0 ? (
        <ul>
          {optimisticMessages.map((message, i) => (
            <li key={i}>{message}</li>
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
