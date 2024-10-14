"use client";

import { Button } from "@/components/ui/button";

interface ButtonBaseProps {
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link"
    | null
    | undefined;
  children?: React.ReactNode;
  onClick?: () => void;
}

export function ButtonBase({ variant, children, onClick }: ButtonBaseProps) {
  return (
    <Button variant={variant} onClick={onClick}>
      {children}
      Button
    </Button>
  );
}
