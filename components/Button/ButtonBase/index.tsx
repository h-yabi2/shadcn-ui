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
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export function ButtonBase({
  variant,
  className,
  children,
  onClick,
}: ButtonBaseProps) {
  return (
    <Button className={className} variant={variant} onClick={onClick}>
      {children}
      Button
    </Button>
  );
}
