import LogoutConfirmModel from "@/components/model/LogoutConfirmModel";
import React from "react";

export default function ModelProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <LogoutConfirmModel />
    </>
  );
}
