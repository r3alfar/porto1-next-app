import About from "@/components/custom/content/About";
import ProjectSection from "@/components/custom/content/ProjectSection";
import HeroSection from "@/components/custom/top/HeroSection";
import MainMidContent from "@/components/custom/combined-layout/MidContent/MainMidContent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FFFFFF] dark:bg-[#0E1B24]">
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection/>
        <About/>
        {/* <ProjectSection/> */}
      </div>
      <div>
        <MainMidContent/>
      </div>
    </main>
  )
}

