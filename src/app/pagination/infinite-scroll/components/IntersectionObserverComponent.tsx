"use client";

import { useEffect, useId } from "react";

type IntersectionObserver = {
  onTrigger: () => {};
};

export default function IntersectionObserverComponent({
  onTrigger,
}: IntersectionObserver) {
  const id = useId();

  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries) => {
      if (!entries[0].isIntersecting) return;

      onTrigger();
    };

    const observer = new IntersectionObserver(callback, {
      threshold: 1,
    });

    observer.observe(document.getElementById(id)!);

    return () => {
      observer.disconnect();
    };
  }, []);

  return <div id={id} />;
}
