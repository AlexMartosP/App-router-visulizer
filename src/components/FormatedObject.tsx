import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function FormatedObject({ params }: { params: Params }) {
  const length = Object.keys(params).length;

  return (
    <div className="font-mono">
      {"{"}
      {Object.entries(params).map((entry, i) => (
        <p className="pl-4" key={entry[0]}>
          {entry[0]}:{" "}
          {Array.isArray(entry[1]) ? JSON.stringify(entry[1]) : `"${entry[1]}"`}
          {i < length - 1 ? "," : ""}
        </p>
      ))}
      {"}"}
    </div>
  );
}
