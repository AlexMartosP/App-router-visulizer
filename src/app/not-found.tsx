import InlineCode from "@/components/InlineCode";
import { AlertCircle } from "lucide-react";

export default async function NotFound() {
  return (
    <>
      <div className=" flex gap-2 flex-wrap">
        <AlertCircle color="red" />
        The page was not found
      </div>
      <p className="mt-2">
        This is rendered by the root &nbsp;
        <InlineCode>not-found.tsx</InlineCode>
      </p>
    </>
  );
}
