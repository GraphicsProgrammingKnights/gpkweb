import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-text-primary max-w-7xl w-full mx-auto">
      {/* START OF THE HOME SECTION */}
      <section id="home" className="min-h-screen w-full flex flex-col items-center">
        {/* Home code goes here */}
        <h2>Home</h2>
      </section>

      {/* START OF THE ABOUT SECTION */}
      <section id="about" className="min-h-screen w-full flex flex-col items-center">
        <h2 className="text-4xl font-bold p-16 m-16 h-16 gap-16">
          About Us
        </h2>
        <AboutSection />
      </section>

      {/* START OF THE CHALLENGES SECTION */}
      <section id="challenges" className="min-h-screen w-full flex flex-col items-center">
        {/* Challenges code goes here */}
        <h2>Challenges</h2>
      </section>

      {/* START OF THE TEAM SECTION */}
      <section id="team" className="min-h-screen w-full flex flex-col items-center">
        {/* Team code goes here */}
        <h2>Team</h2>
      </section>
    </main>
  );
}
