import React from "react";

const StatsCard = ({
  icon,
  value,
  label,
  percent,
  positive = true,
}) => {
  return (
    <div className="
      flex items-center gap-4 p-5 rounded-xl
     
      from-white to-gray-100
      dark:from-[#111827] dark:to-[#0b1220]
      shadow-md
      bg-white dark:bg-gray-800 
    ">

      <div className="
        w-12 h-12 flex items-center justify-center
        rounded-lg
        bg-gray-100 dark:bg-gray-800
        text-gray-700 dark:text-gray-300
      ">
        {icon}
      </div>

      <div className="flex-1">
        <p className="text-2xl font-semibold text-gray-900 dark:text-white">
          {value}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {label}
        </p>
      </div>

      {percent && (
        <span className={`
          px-3 py-1 rounded-full text-xs font-medium
          ${positive
            ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400"
            : "bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400"
          }
        `}>
          {positive ? "+" : "-"}{percent}%
        </span>
      )}

    </div>
  );
};

export default StatsCard;
