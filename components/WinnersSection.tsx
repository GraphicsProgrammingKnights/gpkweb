"use client";

import { useMemo } from "react";
import { FaTrophy, FaHistory } from "react-icons/fa";

export interface Winner {
  name: string;
  challengeTitle: string;
  projectTitle: string;
  deadline: Date;
  placement: number;
}

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function WinnersSection({ winners }: { winners: Winner[] }) {
  const mostRecentDate = useMemo(() => {
    let mostRecentDateNow = new Date(0);

    for (const winner of winners)
      if (winner.deadline > mostRecentDateNow)
        mostRecentDateNow = winner.deadline;
    return mostRecentDateNow;

  }, [winners]);

  const recentWinners = useMemo(() => {
    return winners.filter((winner) => winner.deadline >= mostRecentDate);
  }, [winners, mostRecentDate]);

  const prevWinners = useMemo(() => {
    return winners.filter((winner) => winner.deadline < mostRecentDate);
  }, [winners, mostRecentDate]);

  return (
    <div className="w-full text-start">
      <h3 className="text-2xl font-bold pb-8">
        {monthNames[mostRecentDate.getMonth()]}&apos;s Winners
      </h3>

      <div className="grid grid-cols-3 gap-5 pb-14">
        {recentWinners.map((winner) =>
          <WinnerCard key={winner.projectTitle} {...winner} />
        )}
      </div>

      <div className="bg-card-background border border-card-border rounded-2xl hover:border-accent transition-all">
        <h4 className="flex items-center gap-2 font-bold w-full border-b border-card-border px-8 py-5">
          <FaHistory className="w-4 h-4" />
          Previous Winners:
        </h4>
        <div className="flex flex-col">
          {prevWinners.map((winner) =>
            <PrevWinnerEntry key={winner.projectTitle} {...winner} />
          )}
        </div>
      </div>

    </div>
  );
}

function WinnerCard({ placement, name, projectTitle }: Winner) {
  const placementColors = ["text-gold", "text-slate-400", "text-orange-800"];
  const placementColor = placement > 3 ? "" : placementColors[placement - 1];

  // regex setup for initials
  const clean = name.replace(/( |_|-|\/|\\|#|\.)/g, " "); // remove common name seperators
  const match = clean.match(/([a-z A-Z])\w+\s([a-z A-Z])\w*\s*([a-z A-Z])*(?=,*)/); // find and place initials in array

  // if match exists, it MUST have at least 3 elements in array
  // 0 index of match is original string
  const initials = ((match) ? match[1] + match[2] : name.charAt(0)).toUpperCase();

  return (
    <div style={{ order: placement }} className="relative flex flex-row bg-card-background border border-card-border rounded-2xl hover:border-accent transition-all py-4 px-5">
      <div className={`absolute top-4 right-4 flex items-center gap-1 font-bold ${placementColor}`}>
        <FaTrophy className="w-4 h-4" />
        #{placement}
      </div>

      <div className="grow">
        <div className="flex justify-center place-items-center text-2xl font-bold h-20 mb-3 bg-linear-to-bl from-accent to-card-border aspect-square rounded-full">
          {initials}
        </div>
        <h5 className="font-bold">
          {name}
        </h5>
        <h6 className="text-text-secondary">
          {projectTitle}
        </h6>
      </div>
    </div>
  );
}

function PrevWinnerEntry({ name, challengeTitle, deadline }: Winner) {
  return (
    <div
      style={{ order: -(deadline.getFullYear() * 100 + deadline.getMonth()) }}
      className="flex px-8 py-4 border-t border-card-border"
    >
      <p className="text-text-secondary w-4/11">{monthNames[deadline.getMonth()]} {deadline.getFullYear()}</p>
      <p>{name}</p>
      <p className="text-end text-accent-light grow">{challengeTitle}</p>
    </div>
  );
}
