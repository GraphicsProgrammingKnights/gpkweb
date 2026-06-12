export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-text-primary">
      

    {/*START OF THE HOME SECTION */}
      <section 
        id="home"
        className="flex min-h-screen flex-col items-center justify-between p-24 text-text-primary"
      >
        {/*Home code goes here */}
      <h1>Graphics Programming Knights (Home)</h1>
      </section>


    {/*START OF THE ABOUT SECTION */}
    <section
    id="about"
    className="flex min-h-screen flex-col items-center justify-between p-24 text-text-primary"
    >
      {/*About code goes here */}
      <h1>About</h1>
    </section>

    {/*START OF THE CHALLENGES SECTION*/}
    <section
    id="challenges"
    className="flex min-h-screen flex-col items-center justify-between p-24 text-text-primary"
    >
      {/*Challenges code goes here */}
      <h1>Challenges</h1>
    </section>

    {/*START OF THE TEAM SECTION*/}
    <section
    id="team"
    className="flex min-h-screen flex-col items-center justify-between p-24 text-text-primary"
    >
      {/*Team code goes here */}
      <h1>Team</h1>
    </section>
    </main>
  );
}
