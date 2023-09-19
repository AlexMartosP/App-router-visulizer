import { AlertCircle } from "lucide-react";

export default async function NotFound() {
  return (
    <>
      <div className=" flex gap-2">
        <AlertCircle color="red" />
        This was a triggered 404
      </div>
    </>
  );
}
