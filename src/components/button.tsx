import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="px-2 py-1 cursor-pointer border border-gray-700 bg-neutral-950 hover:bg-gray-800 transition"
    >
      {children}
    </button>
  );
}
