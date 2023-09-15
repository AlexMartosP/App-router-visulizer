import { Info } from "lucide-react";

export default function NotFound() {
  return (
    <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center bg-orange-300 rounded-md">
      <Info />
      <span>Not found</span>
    </div>
  );
}
