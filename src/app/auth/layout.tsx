import { useEffect, useState } from "react";
import Navbar from "../components/homepage/foreground/navbar/navbar";

export default function SignUpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div className="w-[100vw] h-[100vh] relative">
    <Navbar darkText/>
    <div className="w-full h-full absolute flex flex-col overflow-hidden">
      <Navbar invisible/>
      {children}
    </div>
   </div>
  );
}
