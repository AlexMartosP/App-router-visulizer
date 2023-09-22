"use client";
import { PropsWithChildren } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { Button, ButtonProps } from "@/components/Button";

type SubmitButtonProps = {
  loadingText: string;
} & PropsWithChildren &
  ButtonProps;

export default function SubmitButton({
  loadingText,
  children,
  ...props
}: SubmitButtonProps) {
  const formStatus = useFormStatus();
  console.log(formStatus);

  return (
    <Button type="submit" {...props} disabled={formStatus.pending}>
      {!formStatus.pending ? children : loadingText}
    </Button>
  );
}
