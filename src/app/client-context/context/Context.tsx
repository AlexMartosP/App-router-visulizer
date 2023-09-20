"use client";

import DashedBorder from "@/components/DashedBorder";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

const CountContext = createContext<{
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
} | null>(null);

export default function ContextProvider({ children }: PropsWithChildren) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <DashedBorder label="Counter context provider">{children}</DashedBorder>
    </CountContext.Provider>
  );
}

export function useCountContext() {
  const context = useContext(CountContext);

  if (!context) {
    throw new Error("Component needs to be under context");
  }

  return context;
}
