"use client";
import { ThemeProvider } from "next-themes";
import React from "react";
type Props = {
  children?: React.ReactNode;
  // other props
};

const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="">{children}</div>
    </ThemeProvider>
  );
};

export default Providers;
