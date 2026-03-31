import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function cx(...args: (string | undefined)[]) {
  return twMerge(clsx(...args));
}
