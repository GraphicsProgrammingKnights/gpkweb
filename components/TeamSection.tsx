import Image from "next/image";

// defining the type for team members
type TeamMember = {
  name: string;
  title: string;
  memberSince: string;
  pfpSrc: string;
  linkedinUrl: string;
  isOfficer: boolean; // true if officer, false if regular member for dividing the team into two sections
};

// all of the gpk members with their info :D
const teamMembers: TeamMember[] = [
  {
    name: "Alejandro Jaimes",
    title: "President",
    memberSince: "Summer 2025",
    pfpSrc: "/teampics/alejandro.webp",
    linkedinUrl: "https://www.linkedin.com/in/alejandro-jaimes-coco/",
    isOfficer: true,
  },
  {
    name: "Nathan Josue",
    title: "Vice President",
    memberSince: "Summer 2026",
    pfpSrc: "/teampics/nathan.webp",
    linkedinUrl: "https://www.linkedin.com/in/nathan-josue/",
    isOfficer: true,
  },
  {
    name: "Andres Ortiz",
    title: "Secretary",
    memberSince: "Fall 2025",
    pfpSrc: "/teampics/andres.webp", 
    linkedinUrl: "https://www.linkedin.com/in/andresortizmachado/",
    isOfficer: true,
  },
  {
    name: "Kevin Li",
    title: "Treasurer",
    memberSince: "Summer 2026",
    pfpSrc: "/teampics/kevin.webp",
    linkedinUrl: "https://www.linkedin.com/in/kevin-li7673/",
    isOfficer: true,
  },
  {
    name: "Sebastian Noel",
    title: "Dev Lead",
    memberSince: "Summer 2025",
    pfpSrc: "/teampics/sebastian.webp",
    linkedinUrl: "https://www.linkedin.com/in/sebastian-noel-ucf/",
    isOfficer: true,
  },
  {
    name: "Stevin George",
    title: "Outreach Lead",
    memberSince: "Summer 2026",
    pfpSrc: "/teampics/stevin.webp",
    linkedinUrl: "https://www.linkedin.com/in/georgestevin/",
    isOfficer: true,
  },
  {
    name: "Alex De Vera Cruz",
    title: "Workshops Director",
    memberSince: "Summer 2025",
    pfpSrc: "/teampics/alex.webp",
    linkedinUrl: "https://www.linkedin.com/in/alex-da-vera-cruz-a68473264/",
    isOfficer: true,
  },
  {
    name: "Abigail Loken",
    title: "Dev Team Member",
    memberSince: "Summer 2026",
    pfpSrc: "", // replace this with your pic pls, teampics/ (enter path to your photo)
    linkedinUrl: "https://www.linkedin.com/in/abigail-loken-693ba9387/",
    isOfficer: false,
  },
  {
    name: "Alvaro Canseco-Martinez",
    title: "Dev Team Member",
    memberSince: "Summer 2026",
    pfpSrc: "/teampics/alvaro.webp",
    linkedinUrl: "https://www.linkedin.com/in/alvaro-canseco-martinez/",
    isOfficer: false,
  },
  {
    name: "Ethan Fu",
    title: "Dev Team Member",
    memberSince: "Summer 2026",
    pfpSrc: "", // replace this with your pic pls, teampics/ (enter path to your photo)
    linkedinUrl: "https://www.linkedin.com/in/ethan-fu-/",
    isOfficer: false,
  },
  {
    name: "Jeremy Whatts Rodriguez",
    title: "Dev Team Member",
    memberSince: "Summer 2026",
    pfpSrc: "", // replace this with your pic pls, teampics/ (enter path to your photo)
    linkedinUrl: "https://www.linkedin.com/in/jeremy-whatts/",
    isOfficer: false,
  },
  {
    name: "Nicole Bustos",
    title: "Dev Team Member",
    memberSince: "Summer 2026",
    pfpSrc: "/teampics/nicole.webp",
    linkedinUrl: "https://www.linkedin.com/in/nicolebustos/",
    isOfficer: false,
  },
  {
    name: "Zeeshan Memon",
    title: "Dev Team Member",
    memberSince: "Summer 2026",
    pfpSrc: "", // replace this with your pic pls, teampics/ (enter path to your photo)
    linkedinUrl: "https://www.linkedin.com/in/memon-zeeshan/",
    isOfficer: false,
  },
];

// this portion makes the team section, with a divider for officers and a divider for team members,
// based on the isOfficer boolean condition also
export default function TeamSection() {
  const officers = teamMembers.filter((member) => member.isOfficer); 
  const members = teamMembers.filter((member) => !member.isOfficer);

  return (
    // divider for officers
    <div className="flex flex-col gap-12 w-full">
      <div>
        <SectionDivider label="Officers" />
        <TeamGrid members={officers} />
      </div>
      
      {/* divider for team members */}
      <div>
        <SectionDivider label="Team Members" />
        <TeamGrid members={members} />
      </div>
    </div>
  );
}

// label for officiers and team members divider
function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-1 h-px bg-linear-to-r from-transparent to-accent-light/40" />
      <span className="text-accent-light font-bold tracking-[0.2em] text-sm uppercase whitespace-nowrap">
        {label}
      </span>
      <div className="flex-1 h-px bg-linear-to-l from-transparent to-accent-light/40" />
    </div>
  );
}

// grid for officers and team members, square cards for every member
function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-8">
      {members.map((member) => (
        <div
          key={member.name}
          className="w-[calc(50%-1rem)] md:w-[calc(33.333%-1.334rem)] lg:w-[calc(25%-1.5rem)]"
        >
          <TeamCard member={member} />
        </div>
      ))}
    </div>
  );
}

// general team card member with info, pfp, and linkedin link (if available)
function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-6 bg-card-background border border-card-border rounded-2xl hover:border-accent transition-all h-full">
      {/* pfp */}
      <div className="relative w-20 h-20 rounded-full overflow-hidden border border-card-border">
        {member.pfpSrc ? (
          <Image
            src={member.pfpSrc}
            alt={member.name}
            fill
            sizes="80px"
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-accent to-accent-light text-white font-bold text-lg">
            {getInitials(member.name)}
          </div>
        )}
      </div>

      {/* name / title / member since */}
      <div className="text-center">
        <p className="font-semibold text-text-primary">{member.name.trim()}</p>
        <p className="text-sm text-accent-light">{member.title}</p>
        <p className="text-xs text-text-secondary">
          Since {member.memberSince}
        </p>
      </div>

      {/* linkedin, opens in a new tab*/}
      {member.linkedinUrl ? (
        <a
          href={member.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name}'s LinkedIn`}
          className="text-text-secondary hover:text-accent-light transition-colors"
        >
          <LinkedInIcon />
        </a>
      ) : (
        <span aria-hidden="true" className="text-card-border cursor-default">
          <LinkedInIcon />
        </span>
      )}
    </div>
  );
}

// in the case where theres no pfp, adds initials
function getInitials(name: string): string {
  return name
    .trim()
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

// linkedin icon svg
function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}