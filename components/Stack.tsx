import React, { ReactNode } from "react";

interface StackProps {
  children: ReactNode;
  flexDirection?: "row" | "row-reverse" | "col" | "col-reverse" | "nowrap";
  justifyContent?: "start" | "end" | "center" | "between" | "around" | "evenly";
  alignItems?: "start" | "end" | "center" | "stretch" | "baseline";
  alignContent?: "start" | "end" | "center" | "between" | "around" | "stretch";
  gap?: number;
  margin?: string;
  padding?: string;
  width?: string;
  sx?: string
}

const Stack: React.FC<StackProps> = ({
  children,
  flexDirection,
  justifyContent,
  alignItems,
  alignContent,
  gap,
  margin,
  padding,
  width,
  sx
}) => {
  const containerStyle = `${margin} ${width} ${padding}  flex flex-${flexDirection} ${
    justifyContent ? `justify-${justifyContent}` : ''
  } ${alignItems ? `items-${alignItems}` : ''} ${
    alignContent ? `content-${alignContent} ` : ''
  } ${gap ? `gap-${gap}` : ''} ${sx}`

  return <div className={containerStyle}>{children}</div>;
};

export default Stack;
