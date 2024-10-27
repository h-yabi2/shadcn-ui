import React from "react";

type YabikuProps = {
  children: React.ReactNode;
};

const Yabiku = ({ children }: YabikuProps) => {
  return (
    <div className="page">
      <div className="content">{children}</div>
    </div>
  );
};

export { Yabiku };
