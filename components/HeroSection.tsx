export default function HeroSection() {
  return (
    <>
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 bg-black text-white w-full min-h-[screen]">
  
  {/* Left Column: Heading, Subheading, Button, and Icons */}
  <div className="flex flex-col gap-4">
  <h1>Graphic Design Knights</h1>
  <p>University of Central Florida&apos;s Computer Graphics RSO</p>

  {/* Button and Icons Row */}
  <div className="flex flex-row items-center gap-5">
    <button className="bg-purple-600 px-6 py-3 rounded-full text-white">
      Join Us
      <a href="https://discord.gg/XwDHkT3fRa" target="_blank" rel="noopener noreferrer">
      {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png" alt="Discord Icon" className="w-5 h-5 ml-2 inline-block" />
      </a>
    </button>

    {/* Icons Row */}
    <div className="flex flex-row items-center gap-3">
      <a href="https://www.instagram.com/gpknights_" target="_blank" rel="noopener noreferrer">
      {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" className="w-5 h-5" />
      </a>
      <a href="https://www.linkedin.com/company/graphic-programming-knights/" target="_blank" rel="noopener noreferrer">
      {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-5 h-5" />
      </a>
    </div>
  </div>
</div>
</div>
  {/* Right Column: Image */}
<div className="shrink-0">
 {/* ASCII render goes here -- see T6 */}
</div>
</>

  );
}
