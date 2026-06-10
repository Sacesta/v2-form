import React from "react";

export default function Spinner({ size = "md", color = "current" }) {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-6 h-6 border-2",
    lg: "w-8 h-8 border-3",
  };

  const colorClasses = {
    current: "border-current border-t-transparent",
    primary: "border-brand-primary border-t-transparent",
    white: "border-white border-t-transparent",
  };

  return (
    <div
      role="status"
      aria-label="Loading"
      className={`inline-block rounded-full animate-spin ${sizeClasses[size]} ${colorClasses[color]}`}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
