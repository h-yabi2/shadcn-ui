"use client";

import { ButtonBase } from "@/components/Button/ButtonBase";
import { Mail, SquareArrowOutUpRight } from "lucide-react";

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
        <div className="flex gap-3 m-10">
          <ButtonBase />
          <ButtonBase />
        </div>
        <ButtonBase />
        <ButtonBase />
      </div>
    </>
  );
}
