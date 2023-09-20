"use server";

import { wait } from "@/lib/utils";

export async function aciton() {
  console.log("In server action");
  await wait(1000);
}
