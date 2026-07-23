import { FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-36 items-center py-8 md:py-16 pr-8 md:pr-16 bg-page-background text-text-primary w-full flex-1">
      {/* Left Column: Heading, Subheading, Button, and Icons */}
      <div className="flex flex-col gap-8 max-w-3xl -ml-24 md:-ml-36">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
          Graphics Programming Knights
        </h1>
        <p className="text-2xl md:text-3xl text-text-secondary">
          University of Central Florida&apos;s Computer Graphics RSO
        </p>

        {/* Button and Icons Row */}
        <div className="flex flex-row items-center gap-6 mt-2">
          <a
            href="https://discord.gg/XwDHkT3fRa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent hover:bg-accent-light px-10 py-5 rounded-full text-text-primary text-xl font-medium transition-colors"
          >
            Join Us
            <FaDiscord size={28} />
          </a>

          {/* Icons Row */}
          <div className="flex flex-row items-center gap-5 text-text-secondary">
            <a
              href="https://www.instagram.com/gpknights_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-primary transition-colors"
            >
              <FaInstagram className="w-10 h-10" />
            </a>
            <a
              href="https://www.linkedin.com/company/graphics-programming-knights/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-primary transition-colors"
            >
              <FaLinkedin className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: Placeholder for ASCII render */}
      <div className="flex justify-center items-center w-full h-full">
        {/* ASCII render goes here -- see T6 */}
        <span className="text-text-secondary italic text-2xl translate-x-8 md:translate-x-16">[ASCII Render Placeholder]</span>
      </div>
    </section>
  );
}
