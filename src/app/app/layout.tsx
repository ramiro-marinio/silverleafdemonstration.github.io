import { useEffect, useState } from "react";
import Navbar from "../components/homepage/foreground/navbar/navbar";
import AppNavBar from "./components/app_nav_bar";
import FirebaseWrapper from "../components/context/app_wrapper";

export default function SignUpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <FirebaseWrapper>
    <div className="w-[100vw] h-[100vh] relative">
      <AppNavBar/>
      {children}
    </div>
   </FirebaseWrapper>
  );
}
