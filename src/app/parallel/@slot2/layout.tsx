import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <h1>Slot 2</h1>
      {children}
    </>
  );
}
