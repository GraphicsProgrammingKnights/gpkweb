import Image from "next/image";
import gpklogo from "@/public/gpk_logo_transparent.png";

const links = [
    {
        title: "Club",
        text: ["About Us", "Month Challenges", "Meet the Team", "Home"],
        links: ["#about","#challenges", "#team", "#home"]
    },
    {
        title: "Resources",
        text: ["Workshop Slides", "Challenge Archive", "GitHub Repos", "LinkTree"],
        links: ["https://github.com/GraphicsProgrammingKnights/Workshops","#challenges", "https://github.com/GraphicsProgrammingKnights/gpkweb", "https://linktr.ee/GPKnights"]
    },
    {
        title: "Connect",
        text: ["Discord Server", "Instagram", "Linkedin", "Youtube"],
        links: ["https://discord.gg/h9VRpcQDV", "https://www.instagram.com/gpknights_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                "https://www.linkedin.com/company/graphics-programming-knights/", "https://www.youtube.com/@GraphicProgrammingKnights"]
    }
]

function FooterRow({name, option, links}: {name: string; option: string[]; links: string[]}) {
    return (
        <div className="flex flex-col items-start">
            <span className="text-10 mb-6 uppercase font-bold">{name}</span>
            {option.map((o, i) => (
                <a className="text-text-secondary mb-4"
                    key={o}
                    href={links[i]}
                    target={links[i].startsWith("#") ? "_self" : "_blank"}
                    rel={links[i].startsWith("#") ? undefined : "noreferrer"}
                >
                    {o}
                </a>
            ))}
        </div>
    )
}

function Footer() {
    return (
    <>
        <div className="flex flex-col w-full">
            <hr className="border-card-border w-full" />
            <div className="grid grid-cols-4 gap-10 w-full px-10 pt-16 pb-8 items-start">
                <div className="flex flex-col gap-4">
                    <Image src={gpklogo} alt="GPK Logo"
                    className="w-20 h-auto" />
                    <span className="uppercase font-bold">Graphics Programming <br/> Knights</span>
                    <p className="text-text-secondary">
                        UCF&apos;s Computer Graphics RSO. <br/>
                        Building the next generation of <br/>
                        graphics engineers. <br/>
                    </p>
                </div>
                {links.map(s => <FooterRow key={s.title} name={s.title} option={s.text} links={s.links}/>)}
            </div>
            <hr className="border-card-border mx-10" />
            <div className="flex justify-between mx-10 pt-8 pb-8 items-center">
                <p className="-mt-2">
                    © 2025 Graphics Programming Knights · UCF RSO
                </p>
                <ul className="flex flex-row gap-5">
                    <li>
                        <a href="https://github.com/GraphicsProgrammingKnights/gpkweb" target="_blank">
                            <Image src="/github-logo.svg" alt="github link" className="object-cover w-6 h-auto" width={24} height={24} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/gpknights_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                            <Image src="/instagram-logo.svg" alt="insta link" className="object-cover w-6 h-auto" width={24} height={24} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/graphics-programming-knights/" target="_blank">
                            <Image src="/linkedin-logo.svg" alt="linkedin link" className="object-cover w-6 h-auto" width={24} height={24} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </>)
}

export default Footer