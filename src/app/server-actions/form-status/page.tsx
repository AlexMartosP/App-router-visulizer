import InlineCode from "@/components/InlineCode";
import { Input } from "@/components/ui/Input";
import { wait } from "@/lib/utils";
import SubmitButton from "./SubmitButton";

export default function Page() {
  async function aciton() {
    "use server";

    console.log("In server action");
    await wait(1000);
  }

  return (
    <>
      <h1>
        Form status with <InlineCode>useFormStatus()</InlineCode>
      </h1>
      <p className="mt-4">
        With this hook you can opt-in to the current form satus when you attach
        it to a form action, only with form <InlineCode>action</InlineCode>
      </p>
      <div className="py-4"></div>
      <form action={aciton}>
        <Input name="input" placeholder="Try typing something" />
        <div className="py-4"></div>
        <SubmitButton loadingText="Submitting...">Submit</SubmitButton>
      </form>
    </>
  );
}
