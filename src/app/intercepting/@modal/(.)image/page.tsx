"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/Dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";
import coolDog from "../../../../../public/cool-dog.jpg";

export default function Page() {
  const router = useRouter();

  return (
    <Dialog defaultOpen={true} onOpenChange={(open) => !open && router.back()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Image intercepting</DialogTitle>
          <DialogDescription>
            Reload the page to view the page of the image instead or close to go
            back to origin page
          </DialogDescription>
        </DialogHeader>
        <Image
          src={coolDog}
          width={400}
          height={300}
          alt="cool dog"
          placeholder="blur"
          className="rounded-md w-full"
        />
      </DialogContent>
    </Dialog>
  );
}
