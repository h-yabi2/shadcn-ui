"use client";

import { ButtonBase } from "@/components/Button/ButtonBase";
import { Mail, SquareArrowOutUpRight } from "lucide-react";
import { DialogDemo } from "@/components/Dialog";

export default function Button() {
  const handleClick = (url: string) => () => {
    window.open(url, "_blank");
  };
  return (
    <>
      <div className="flex flex-col gap-3 m-10">
        <ButtonBase>
          <Mail className="mr-2 h-4 w-4" />
        </ButtonBase>
        <ButtonBase
          variant={"secondary"}
          onClick={handleClick("https://www.google.co.jp/")}
        >
          <SquareArrowOutUpRight className="mr-2 h-4 w-4" />
        </ButtonBase>
        <DialogDemo />

        <div className="flex gap-3 m-10">
          <ButtonBase />
          <ButtonBase />
        </div>
        <ButtonBase className="bg-warning text-warning-foreground" />
        <ButtonBase />
      </div>
    </>
  );
}
