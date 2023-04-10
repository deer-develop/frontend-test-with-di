import React, { PropsWithChildren } from "react";
import clsx from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "basic" | "CTA";
};

const Button = ({ variant = "basic", ...props }: Props): JSX.Element => {
  return (
    <button
      type={"button"}
      className={clsx(
        "rounded-lg px-5 py-2.5 text-sm active:opacity-70",
        Object.is(variant, "CTA") &&
          "inline-flex bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300",
        Object.is(variant, "basic") &&
          "border border-gray-200 bg-white text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200"
      )}
      {...props}
    />
  );
};

export default Button;
