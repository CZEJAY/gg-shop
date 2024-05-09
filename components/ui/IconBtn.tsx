import { cn } from "@/lib/utils";
import React, { MouseEventHandler } from "react";

interface IconBtnProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className: string;
}

const IconBtn: React.FC<IconBtnProps> = ({
    className,
    icon, 
    onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        `rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition`,
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconBtn;
