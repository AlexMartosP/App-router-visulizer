"use client";

import { Button } from "@/components/Button";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";
import { useParams } from "next/navigation";

export default ({ children }: { children: any }) => {
  const params = useParams();
  return (
    <>
      <h1>Dynamic routes</h1>
      <p className="mt-4">
        With dynamic routes you can render dynamic data depending onn the URL.
      </p>
      <p>Click any of the buttons and watch the params change</p>
      <div className="py-4"></div>
      <span className="font-semibold">Change slug</span>
      <div className="py-1"></div>
      <div className="flex gap-2">
        <Button variant="secondary" asChild>
          <Link href="/dynamic-routes/computers">Computers</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="/dynamic-routes/phones">Phones</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="/dynamic-routes/smart-home">Smart home</Link>
        </Button>
      </div>
      <div className="py-2"></div>
      <div className="p-2 bg-muted rounded">
        <div className="font-mono font-semibold text-sm">Params</div>
        <FormatedObject params={params} />
      </div>
      {Object.keys(params).length > 0 && (
        <>
          <div className="py-4"></div>
          <div className="p-4 border-dashed border rounded-md border-gray-400">
            {children}
          </div>
        </>
      )}
    </>
  );
};

function FormatedObject({ params }: { params: Params }) {
  const length = Object.keys(params).length;

  return (
    <div className="font-mono">
      {"{"}
      {Object.entries(params).map((entry, i) => (
        <p className="pl-4" key={entry[0]}>
          {entry[0]}: "{entry[1]}"{i < length - 1 ? "," : ""}
        </p>
      ))}
      {"}"}
    </div>
  );
}
