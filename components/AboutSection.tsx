export default function AboutSection() {
  return (
    <section className="grid grid-cols-2 gap-8">
      <AboutContent />
      <AboutCarousel />
    </section>
  )
}

function AboutContent() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <p>
          Graphics Programming Knights (GPK) is a{" "}
          <a
            href="https://knightconnect.campuslabs.com/engage/organization/graphicsprogrammingknights"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-light hover:text-accent font-semibold underline underline-offset-4 transition-colors"
          >
            UCF Registered Student Organization
          </a>{" "}
          dedicated to bringing together students passionate about graphics programming, shaders, game development, and real-time rendering.
        </p>
        <p>
          We host hands-on workshops, exciting monthly coding challenges, inspiring speaker events from industry professionals, and fun socials that bring our community together.
        </p>
      </div>

      {/* Buttons Section */}
      <div className="grid grid-cols-2 gap-4">
        <button className="px-4 py-3 bg-card-background border border-card-border text-primary rounded-xl hover:bg-accent-light hover:text-page-background hover:border-accent transition-all active:scale-[0.98] cursor-pointer">
          Workshops
        </button>
        <button className="px-4 py-3 bg-card-background border border-card-border text-primary rounded-xl hover:bg-accent-light hover:text-page-background hover:border-accent transition-all active:scale-[0.98] cursor-pointer">
          Monthly Challenges
        </button>
        <button className="px-4 py-3 bg-card-background border border-card-border text-primary rounded-xl hover:bg-accent-light hover:text-page-background hover:border-accent transition-all active:scale-[0.98] cursor-pointer">
          Speaker Event
        </button>
        <button className="px-4 py-3 bg-card-background border border-card-border text-primary rounded-xl hover:bg-accent-light hover:text-page-background hover:border-accent transition-all active:scale-[0.98] cursor-pointer">
          Socials
        </button>
      </div>
    </section>
  );
}

function AboutCarousel() {
  return (
    <section className="text-center">
      Carousel goes here
    </section>
  );
}
