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
          Graphics Programming Knights (GPK) is a UCF Registered Student Organization dedicated to bringing together students passionate about graphics programming, shaders, game development, and real-time rendereing.
        </p>
        <p>
          We host hands-on workshops, exciting monthly coding challenges, inspiring speaker events from industry professionals, and fun socials that bring our commnunity together.
        </p>
      </div>

      {/* Buttons Section */}
      <div className="grid grid-cols-2 gap-4">
        <button>Workshops</button>
        <button>Monthly Challenges</button>
        <button>Speaker Events</button>
        <button>Socials</button>
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
