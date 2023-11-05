"use client";
import { ThemeProvider } from "next-themes";
import React from "react";
import { AuthUserProvider } from "./firebase/auth";
type Props = {
  children?: React.ReactNode;
  // other props
};

const Providers = ({ children }: Props) => {
  return (
    <AuthUserProvider>
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="">{children}</div>
    </ThemeProvider>
    </AuthUserProvider>
  );
};

export default Providers;
