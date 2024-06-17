import Image from "next/image";
import ThreeDBackground from "./components/tdbg";
import Foreground from "./components/foreground";
import PresentationScreen from "./components/presentationScreen";

export default function Home() {
  return (
    <>
      <ThreeDBackground/>
      <Foreground/>
      <PresentationScreen/>
    </>
  );
}
