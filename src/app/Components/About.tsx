import Image from "next/image";
import Link from "next/link";
export default function About(){
    return(
        <>
        {/* Hero */}
<div className="w-full bg-[#1E1E2F]">
  <div className="bg-[#1E1E2F] h-[1000px] mx-auto flex flex-col lg:flex-row items-center justify-around 2xl:w-[1500px]">
    {/* Left content: Text */}
    <div className="w-full lg:w-[40%] items-center text-center lg:text-left p-4">
      <h1 className="text-[#A0D8F1] text-[40px] mb-4">Hello, I am Anamta</h1>
      <p className="text-white text-[18px] leading-relaxed">
        I am a web developer and SEO expert studying DATA SCIENCE, exploring the intersection of data and technology through cloud-applied generative AI engineering. My journey is about mastering the latest AI tools to enhance web development and the science of data.
      </p>

      <div className="flex gap-6 mt-6 justify-center lg:justify-start">
        {/* GitHub Icon */}
        <Link href="/" className="w-[60px] h-[60px] rounded-full bg-[#333] flex items-center justify-center shadow-lg hover:bg-[#555] transition">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.998.108-.776.418-1.305.76-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.465-2.381 1.235-3.221-.123-.305-.535-1.527.117-3.176 0 0 1.007-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.295-1.23 3.295-1.23.653 1.649.241 2.871.118 3.176.77.84 1.231 1.911 1.231 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.815 1.102.815 2.222v3.293c0 .32.217.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </Link>

        {/* LinkedIn Icon */}
        <Link href="/" className="w-[60px] h-[60px] rounded-full bg-[#0077B5] flex items-center justify-center shadow-lg hover:bg-[#005983] transition">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
            <path d="M22.23 0H1.77C.79 0 0 .77 0 1.75v20.5C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.75V1.75C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9.01h3.56v11.44zM5.34 7.58a2.07 2.07 0 01-2.07-2.07c0-1.15.92-2.08 2.07-2.08 1.14 0 2.07.93 2.07 2.08 0 1.14-.93 2.07-2.07 2.07zm15.11 12.87h-3.56v-5.6c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.7h-3.55V9.01h3.41v1.56h.05c.47-.89 1.62-1.83 3.33-1.83 3.56 0 4.22 2.34 4.22 5.38v6.34z" />
          </svg>
        </Link>
      </div>
    </div>

    {/* Right content: Image */}
    <div className="w-full lg:w-[40%] flex justify-center mt-6 lg:mt-0">
      <Image
        src="/assets/girl.png"
        className="w-[450px] h-[500px] object-cover rounded-lg"
        alt="Profile"
        width={450}
        height={500}
      />
    </div>
  </div>
</div>


        {/*about*/}
        
      <div className="bg-[#1d1d2d] w-full h-[100]">
      <div className = "mx-auto 2xl:w-[1500px]">
        <div className="flex flex-col items-center p-[3rem]">
          {/* Rounded image wrapper */}
          <div className="w-[350px] h-[350px] rounded-full overflow-hidden mb-6">
            <Image
              src="/assets/girl.png"
              className="w-full h-full object-cover"
              alt="Profile"
              width={350}
              height={350}
            />
          </div>
          <h1 className="text-[#A0D8F1] text-4xl text-center mb-6">ABOUT ME</h1>
          <h2 className="text-[#A0D8F1] text-2xl mb-4 text-center">WEB DEVELOPER & SEO EXPERT</h2>
          <p className="text-white text-lg leading-relaxed w-[50%] text-center">
            I am a web developer and SEO expert studying DATA SCIENCE, exploring the intersection of data and technology through cloud-applied generative AI engineering. My journey is about mastering the latest AI tools to enhance web development and the science of data.
          </p>
        </div>
      </div>
      </div>
        </>
    )
}
