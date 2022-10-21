import React from "react";

interface Props {
  color?: string;
}

export const Example: React.FC<Props> = ({ color }) => {
  return <div style={{ color: color }}>This is Component Example!</div>;
};
