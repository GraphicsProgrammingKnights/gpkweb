'use client'

import { useMemo } from "react";

export interface Winner {
    name: string;
    challengeTitle: string;
    projectTitle: string;
    deadline: Date;
    placement: number;
}

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function WinnersSection({winners} : {winners: Array<Winner>}) {
    const mostRecentDate = useMemo(() => {
        let mostRecentDateNow = new Date(0);

        for(const winner of winners)
            if(winner.deadline > mostRecentDateNow)
                mostRecentDateNow = winner.deadline;
        return mostRecentDateNow;

    }, [winners]);

    const recentWinners = useMemo(() => {
        const recentFilter = (winner: Winner) => {
            if(winner.deadline >= mostRecentDate)
                return winner;
        }
        return winners.filter(recentFilter);

    }, [winners, mostRecentDate]);

    const prevWinners = useMemo(() => {
        const prevFilter = (winner: Winner) => {
            if(winner.deadline < mostRecentDate)
                return winner;
        }
        return winners.filter(prevFilter);

    }, [winners, mostRecentDate]);

    return <div className="w-full text-start">
        <h3 className="text-2xl font-bold pb-8">
            {monthNames[mostRecentDate.getMonth()]}&apos;s Winners
        </h3>

        <div className="grid grid-cols-3 gap-5 pb-14">
            {recentWinners.map((winner) => 
                <WinnerCard key={winner.projectTitle} {...winner}/>
            )}
        </div>

        <div className="bg-card-background border-card-border border-1 rounded-2xl">
            <h4 className="font-bold w-full border-card-border border-b-1 px-8 py-5">
                🕒 Previous Winners:
            </h4>
            <div className="flex flex-col">
                {prevWinners.map((winner) => 
                    <PrevWinnerEntry key={winner.projectTitle} {...winner}/>
                )}
            </div>
        </div>

    </div>
}

function WinnerCard({placement, name, projectTitle}: Winner){
    const placementColors = ["text-gold", "text-slate-400", "text-orange-800"];
    const placementColor = placement > 3 ? "" : placementColors[placement - 1];

    // regex setup for initials
    const clean = name.replace(/( |_|-|\/|\\|#|\.)/, " "); // remove common name seperators
    const match = clean.match(/([a-z A-Z])\w+\s([a-z A-Z])\w*\s*([a-z A-Z])*(?=,*)/); // find and place initials in array

    // if match exists, it MUST have at least 3 elements in array
    // 0 index of match is original string
    const initials = ((match) ? match[1] + match[2] : name.charAt(0)).toUpperCase();

    return <div style={{order: placement}} className={`flex flex-row bg-card-background border-card-border border-1 rounded-2xl py-4 px-5`}>
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

        <div className={`font-bold ${placementColor}`}>
            🏆#{placement}
        </div>
    </div>;
}

function PrevWinnerEntry({name, challengeTitle, deadline}: Winner){
    return <div style={{order: -(deadline.getFullYear() * 100 + deadline.getMonth())}}
                className="flex px-8 py-4 border-card-border border-t-1">
        <p className="text-text-secondary w-4/11">{monthNames[deadline.getMonth()]} {deadline.getFullYear()}</p>
        <p>{name}</p>
        <p className="text-end text-accent-light grow">{challengeTitle}</p>
    </div>;
}