export default function Skills() {
    return (
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


        {/* Skills Section */}
        <div className="bg-[#1E1E2F] w-full p-[3rem]">
          <div className="mx-auto 2xl:w-[1500px]">
            <h1 className="text-[#A0D8F1] text-4xl text-center mb-6 sm:text-center md:text-center lg:text-center">
              SKILLS
            </h1>
  
            {/* Grid layout for skills */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {/* HTML */}
              <div className="bg-[#D24020] w-[80%] h-[300px] text-center rounded-[10px] p-3 pt-5 pb-5 flex flex-col justify-center items-center text-white">
                <div className="flex items-center justify-center w-24 h-24 rounded-full text-6xl mb-6 bg-orange-600 bg-opacity-90 border-4 border-white">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 384 512"
                    className="bg-orange-500 rounded-full color-white animate-pulse"
                    height="80"
                    width="80"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path>
                  </svg>
                </div>
                <h1 className="text-2xl font-semibold mb-3">HTML</h1>
                <p>
                I provide expert HTML coding services to create clean and responsive web structures. I ensure   SEO optimization, and accessibility, delivering a solid foundation for your website's design and functionality.
                </p>
              </div>
  
              {/* CSS */}
              <div className="bg-blue-500 w-[80%] h-[300px] text-center rounded-[10px] p-3 pt-5 pb-5 flex flex-col justify-center items-center text-white">
                <div className="flex items-center justify-center w-24 h-24 rounded-full text-6xl mb-6 bg-blue-500 bg-opacity-90 border-4 border-white">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 384 512"
                    className="bg-blue-300 rounded-full animate-pulse"
                    height="80"
                    width="80"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"></path>
                  </svg>
                </div>
                <h1 className="text-2xl font-semibold mb-3">CSS</h1>
                <p>
                I specialize in crafting visually appealing and responsive designs using CSS. I focus on creating smooth layouts, interactive elements, ensuring a seamless user experience across all devices and browsers.
                </p>
              </div>
  
              {/* TypeScript */}
              <div className="bg-[#095859] w-[80%] h-[300px] text-center rounded-[10px] p-3 pt-5 pb-5 flex flex-col justify-center items-center text-white">
                <div className="flex items-center justify-center w-24 h-24 rounded-full text-6xl mb-6 bg-[#095859] bg-opacity-90 border-4 border-white">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    role="img"
                    viewBox="0 0 24 24"
                    className="bg-[#095859] rounded-full animate-pulse"
                    height="80"
                    width="80"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"></path>
                  </svg>
                </div>
                <h1 className="text-2xl font-semibold mb-3">TypeScript</h1>
                <p>
                I provide expert TypeScript development services, enhancing JavaScript with strong typing and advanced features. This ensures improved code quality, better maintainability, and scalability for large and complex web applications.
                </p>
              </div>
  
              {/* Next.js */}
              <div className="bg-[#5C5F68] w-[80%] h-[300px] text-center rounded-[10px] p-3 pt-5 pb-5 flex flex-col justify-center items-center text-white">
                <div className="flex items-center justify-center w-24 h-24 rounded-full text-6xl mb-6 bg-[#5C5F68] bg-opacity-90 border-4 border-white">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    role="img"
                    viewBox="0 0 24 24"
                    className="bg-[#5C5F68] rounded-full animate-pulse"
                    height="80"
                    width="80"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"></path>
                  </svg>
                </div>
                <h1 className="text-2xl font-semibold mb-3">Next.js</h1>
                <p>
                I specialize in Next.js, building fast, scalable, and SEO-friendly web applications with (SSR) and   (SSG). I leverage its powerful features to create dynamic, high-performance websites that offer seamless user experiences.
                </p>
              </div>
  
              {/* Tailwind CSS */}
              <div className="bg-teal-600 w-[80%] h-[300px] text-center rounded-[10px] p-3 pt-5 pb-5 flex flex-col justify-center items-center text-white">
                <div className="flex items-center justify-center w-24 h-24 rounded-full text-6xl mb-6 bg-teal-600 bg-opacity-90 border-4 border-white">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    role="img"
                    viewBox="0 0 24 24"
                    className="bg-teal-300 rounded-full animate-pulse"
                    height="80"
                    width="80"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                  </svg>
                </div>
                <h1 className="text-2xl font-semibold mb-3">Tailwind CSS</h1>
                <p>
                I specialize in Tailwind CSS, a utility-first CSS framework that allows for rapid, responsive, and highly customizable web design. I can build clean, modern, and efficient user interfaces with a focus on performance and scalability
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  