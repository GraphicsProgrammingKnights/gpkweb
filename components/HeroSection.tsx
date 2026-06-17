import { FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 md:p-16 bg-black text-white w-full min-h-screen">
      
      {/* Left Column: Heading, Subheading, Button, and Icons */}
      <div className="flex flex-col gap-6 max-w-xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Graphics Programming Knights
        </h1>
        <p className="text-lg md:text-xl text-gray-400">
          University of Central Florida&apos;s Computer Graphics RSO
        </p>

        {/* Button and Icons Row */}
        <div className="flex flex-row items-center gap-5 mt-2">
          <a 
            href="https://discord.gg/XwDHkT3fRa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-white font-medium transition-colors"
          >
            Join Us
            <FaDiscord size={20} />
          </a>

          {/* Icons Row */}
          <div className="flex flex-row items-center gap-4 text-gray-400">
            <a 
              href="https://www.instagram.com/gpknights_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/company/graphic-programming-knights/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: Placeholder for ASCII render */}
      <div className="flex justify-center items-center w-full h-full min-h-[screen-size]">
        {/* ASCII render goes here -- see T6 */}
        <span className="text-gray-600 italic">[ASCII Render Placeholder]</span>
      </div>

    </div>
  );
}