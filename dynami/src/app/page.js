import Image from "next/image";
import Intro from"@/app/Components/Introscreen";
import './globals.css'

export default function Home() {
  return (
    <>  
    <h1 className="flex justify-center text-6xl text-black text-center">Hello World!</h1>

    <Intro/>
    </>
  );
}
