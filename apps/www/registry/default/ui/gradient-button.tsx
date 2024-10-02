"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function GradientButton({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);

  const rainbowColors = [
    "#FF1493", // Deep Pink
    "#FF4500", // Orange Red
    "#FFD700", // Gold
    "#00FA9A", // Medium Spring Green
    "#1E90FF", // Dodger Blue
    "#9400D3", // Dark Violet
  ];

  const staticGradient = `linear-gradient(45deg, ${rainbowColors.join(', ')})`;

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border-none content-center bg-transparent items-center flex-col flex-nowrap h-min justify-center overflow-visible p-[2px] decoration-clone w-fit",
        "transition-all duration-300 ease-in-out transform hover:scale-103",
        "shadow-md hover:shadow-lg",
        containerClassName
      )}
      {...props}
    >
      <motion.div
        className="absolute inset-0 rounded-full z-0"
        style={{
          background: staticGradient,
        }}
        initial={{ opacity: 0.7 }}
        animate={{
          opacity: hovered ? 1 : 0.7,
        }}
        transition={{ duration: 0.3 }}
      />
      <div
        className={cn(
          "relative z-10 bg-black bg-opacity-90 text-white px-4 py-2 rounded-full text-sm",
          "transition-all duration-300 ease-in-out",
          "backdrop-filter backdrop-blur-sm",
          className
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
