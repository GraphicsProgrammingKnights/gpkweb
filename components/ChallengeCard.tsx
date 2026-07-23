import { FaRegCalendarAlt } from "react-icons/fa";

export interface ChallengeCardProps {
  name: string;
  desc: string;
  tags: string[];
  deadline: Date;
  link: string;
}

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default function ChallengeCard({ name, desc, tags, deadline, link }: ChallengeCardProps) {
  return (
    <div className="p-12 bg-card-background border border-card-border text-text-primary rounded-2xl hover:border-accent transition-all w-full">
      <div className="flex flex-row justify-between">
        <div>
          <div className="px-5 py-1 bg-accent rounded-full w-fit">
            {monthNames[deadline.getMonth()] + " " + deadline.getFullYear()} Challenge
          </div>
          <p className="text-4xl font-bold pt-3 pb-2">
            {name}
          </p>
        </div>
        <div className="text-end">
          <p className="flex items-center justify-end gap-1.5 text-text-secondary">
            <FaRegCalendarAlt className="w-4 h-4" />
            Deadline
          </p>
          <p className="text-accent-light font-bold text-lg">
            {monthNames[deadline.getMonth()] + " " + deadline.getDate() + ", " + deadline.getFullYear()}
          </p>
        </div>
      </div>
      <p className="py-6 leading-8">{desc}</p>
      <div className="flex flex-row pb-9">
        {tags.map((tag) => (
          <div
            className="px-3 py-1 me-2 text-text-primary bg-card-background border border-card-border rounded-xl w-fit hover:bg-accent-light hover:text-page-background hover:border-accent transition-all cursor-pointer"
            key={tag}
          >
            #{tag}
          </div>
        ))}
      </div>
      <a
        className="px-7 py-3 bg-accent hover:bg-accent-light text-text-primary rounded-full font-medium transition-all active:scale-[0.98] cursor-pointer"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Link to Challenge
      </a>
    </div>
  );
}
