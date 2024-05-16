import Image from "next/image";
import Link from "next/link";
import profilePic from "@/public/alejandro-portrait.jpeg"
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section className="mb-10 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div>
          <Image 
            src={profilePic} 
            alt="Alejandro Profile Picture"
            width="192"
            height="192"
            priority={true}
            className="object-cover w-24 h-24 border-2 border-white rounded-full shadow-xl"
            />
        </div>
      </div>

      <h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
        <span className="font-bold">Hello, I'm Alejandro.</span> I'm a{" "}
        <span className="font-bold">frontend developer</span> with{" "}
        <span className="font-bold">4 years</span> of experience. I enjoy building apps & tinkering with new technology. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </h1>

      <div className="flex flex-col items-center justify-center gap-4 px-4 text-lg font-medium sm:flex-row">
        <Link 
          href="#contact"
          className="flex items-center gap-2 py-3 text-white transition bg-gray-900 rounded-lg outline-none group px-7 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"  
        >
          Contact Me 
          <BsArrowRight 
            className="transition opacity-70 group-hover:translate-x-2" 
          />
        </Link>
        <a 
          className="flex items-center gap-2 py-3 transition bg-gray-400 border rounded-lg outline-none cursor-pointer group px-7 focus:scale-110 hover:scale-110 active:scale-105 border-black/20" href="/resume.pdf" 
          target="_blank"
        >
          Download Resume 
          <HiDownload 
            className="transition opacity-60 group-hover:translate-y-1"
          />
        </a>
        <a 
          className="flex items-center gap-2 p-4 text-gray-800 transition bg-white border rounded-full cursor-pointer focus:scale-110 hover:scale-110 active:scale-105 border-black/20"
          href="www.linkedin.com/in/alejandro-maldonado-35929232"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a 
          className="flex items-center gap-2 p-4 text-gray-800 transition bg-white border rounded-full focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 border-black/20"
          href="https://github.com/AM-TEK?tab=overview&from=2024-05-01&to=2024-05-14"
          target="_blank"
        >
          <BsGithub />
        </a>
      </div>
    </section>
  )
}
