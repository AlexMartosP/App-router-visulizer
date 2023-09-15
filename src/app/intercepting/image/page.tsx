"use client";
import { Button } from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import coolDog from "../../../../public/cool-dog.jpg";

export default function Page() {
  const router = useRouter();

  return (
    <div>
      <Button variant="secondary" onClick={() => router.back()}>
        Back
      </Button>
      <div className="py-2"></div>
      <h1>Image page</h1>
      <p className="mt-4">This is the actual image page rendering on load</p>
      <div className="py-2"></div>
      <Image
        src={coolDog}
        width={400}
        height={300}
        alt="cool dog"
        placeholder="blur"
        className="rounded-md w-full"
      />
    </div>
  );
}
