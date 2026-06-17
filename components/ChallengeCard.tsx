export interface ChallengeCardProps {
    name: string;
    desc: string;
    tags: Array<string>;
    deadline: Date;
    link: string;
}

export default function ChallengeCard({name, desc, tags, deadline, link} : ChallengeCardProps){ 
    const monthNames = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return <div className="p-12 bg-card-background border-1 border-card-border text-primary rounded-3xl w-full">
        <div className="flex flex-row justify-between">
            <div>
                <div className="px-5 py-1 bg-accent border-accent-light rounded-3xl w-fit">
                    {monthNames[deadline.getMonth()] + " " + deadline.getFullYear()} Challenge
                </div>
                <h1 className="text-4xl font-bold pt-3 pb-2">
                    {name}
                </h1>
            </div>
            <div className="text-end">
                <h4 className="text-gray-400">
                    📆 Deadline
                </h4>
                <h3 className="text-accent font-bold text-lg">
                    {monthNames[deadline.getMonth()] + " " + deadline.getDay() + ", " + deadline.getFullYear()}
                </h3>
            </div>
        </div>
        <p className="py-6 w-3xl leading-8">{desc}</p>
        <div className="flex flex-row pb-9">
            {tags.map((tag) => 
                <div className="px-3 py-1 me-2 text-accent-light bg-card-background border-accent-light border-1 rounded-3xl w-fit hover:bg-accent-light hover:text-white hover:border-accent cursor-pointer" key={tag}>
                    #{tag}
                </div>)}
        </div>
        <a className="px-7 py-3 bg-accent text-primary rounded-xl hover:bg-accent-light hover:text-page-background transition-all active:scale-[0.98] cursor-pointer" href={link}>
            Link to Challenge
        </a>
    </div>;
}