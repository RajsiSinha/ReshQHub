import { useEffect, useState } from "react";

export default function AnimatedProgress({ value, color }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(value);
    }, 200);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="w-full bg-[#1a2a3e] h-2 rounded-full overflow-hidden">
      <div
        className={`h-2 rounded-full transition-all duration-1000 ease-out ${color}`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
