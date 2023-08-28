import React from "react";
import { twMerge } from "tailwind-merge";
import {boolean} from "zod";
import {cn} from "../../../utils/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
const Button = ({ className ,...props }: ButtonProps) => {
  return (
    <button
      type={props.type || "submit"}
      className={cn(
        "bg-cyan-600 text-white font-semibold py-2 px-4 rounded",
        className
        // props.isPending && "bg-rose-700",
      )}
      {...props}
    >
      {props.title}
    </button>
  );
};

export default Button;
