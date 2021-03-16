import React from "react"

const sizes = {
  sm: "text-xs px-3 py-2",
  md: "text-md px-4 py-2",
  lg: "text-lg px-5 py-3",
}

export const Button = ({ size = "md", text, className }) => (
  <button className={[
    "inline-block bg-indigo-500 text-white rounded",
    sizes[size],
    className,
  ].join(" ")}>{text}</button>
)
