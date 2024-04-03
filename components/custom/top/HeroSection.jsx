import Image from "next/image";
import heroImage from "@/public/about-image.png"

function HeroSection() {
  return (
    <section>
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className="col-span-7 place-self-center text-center sm:text-left">
        <h1 className=" mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black dark:text-white">
          Hello, I'm Farrel
        </h1>
        <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
        <div>
          
          <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-[#C4CACE] text-black dark:text-white hover:bg-slate-300">Download CV</button>
          <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4a bg-[#507BAF] text-black border border-black dark:border-white mt-3 hover:bg-slate-200 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">Hire Me</button>
          {/* <ThemeSwitch/>  */}
        </div>
        
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="rounded-full bg-[#F7FBFF] dark:bg-[#0E2434] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            src={heroImage}
            alt="hero image"
            className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}
          />
        </div>

      </div>
    </div>
    {/* <ThemeSwitch/> */}
  </section>
  )
}

export default HeroSection