import Link from "next/link";
import Preview from "@/coponents/Preview";
import About from "@/coponents/About";
import Course from "@/coponents/Course";
import Awards from "@/coponents/awards";
import AboutWork from "@/coponents/aboutWork";

export default function Page() {
  return (
    <>
      <Preview/>
      <About/>
      <Course/>
      <Awards/>
      <AboutWork/>
    </>
  )
}
