import Image from "next/image";
export default function About(){
    return(
        <>
       
             {/* About */}
             <div className="bg-black w-full h-[100] " id="about">
               <div className="mx-auto 2xl:w-[1500px]">
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
                   <h1 className="text-[#A78546] text-4xl text-center mb-6">ABOUT ME</h1>
                   <h2 className="text-[#A78546] text-2xl mb-4 text-center">WEB DEVELOPER & SEO EXPERT</h2>
                   <p className="text-white text-lg leading-relaxed w-[50%] text-center">
                     I am a web developer and SEO expert studying DATA SCIENCE, exploring the intersection of data and technology through cloud-applied generative AI engineering. My journey is about mastering the latest AI tools to enhance web development and the science of data.
                   </p>
                 </div>
               </div>
             </div>       </>
    )
}
