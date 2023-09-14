import Image from "next/image";
import { Github } from "lucide-react";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <>
      <h1>Visulizer for NEXT.js App router concepts</h1>
      <p className="mt-4">
        Here you can explore some of the main concepts with NEXT.js App router
        and other things I wanted to try out.
      </p>
      <p>
        If there is a concept you would like to add or update you can create a
        pull request.
      </p>
      <div className="py-2"></div>
      <Button size="icon" variant="secondary">
        <Github />
      </Button>
    </>
  );
}
