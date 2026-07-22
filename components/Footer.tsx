import Image from "next/image";
import gpklogo from "@/public/gpk_logo_transparent.png";

const links = [
  {
    title: "Club",
    text: ["Home", "About us", "Challenges", "Team"],
    links: ["#home", "#about", "#challenges", "#team"]
  },
  {
    title: "Resources",
    text: ["Workshop Slides", "Challenges Archive", "GitHub Repos", "LinkTree"],
    links: ["https://github.com/GraphicsProgrammingKnights/Workshops", "#challenges", "https://github.com/orgs/GraphicsProgrammingKnights/repositories", "https://linktr.ee/GPKnights"]
  },
  {
    title: "Connect",
    text: ["Discord", "Instagram", "Linkedin", "Youtube"],
    links: ["https://discord.gg/h9VRpcQDV", "https://www.instagram.com/gpknights_",
      "https://www.linkedin.com/company/graphics-programming-knights/", "https://www.youtube.com/@GraphicProgrammingKnights"]
  }
]

function FooterRow({ name, option, links }: { name: string; option: string[]; links: string[] }) {
  return (
    <div className="flex flex-col items-start">
      <span className="text-sm mb-6 uppercase font-bold">{name}</span>
      {option.map((o, i) => (
        <a className="text-text-secondary mb-4"
          key={o}
          href={links[i]}
          target={links[i].startsWith("#") ? "_self" : "_blank"}
          rel={links[i].startsWith("#") ? undefined : "noopener noreferrer"}
        >
          {o}
        </a>
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <div className="flex flex-col w-full">
      <hr className="border-card-border w-full" />
      <div className="grid grid-cols-4 gap-10 w-full px-10 pt-16 pb-8 items-start">
        <div className="flex flex-col gap-4">
          <Image src={gpklogo} alt="GPK Logo"
            className="w-20 h-auto" />
          <span className="uppercase font-bold">Graphics Programming <br /> Knights</span>
          <p className="text-text-secondary">
            UCF&apos;s Computer Graphics RSO. <br />
            Building the next generation of <br />
            graphics engineers. <br />
          </p>
        </div>
        {links.map(s => <FooterRow key={s.title} name={s.title} option={s.text} links={s.links} />)}
      </div>
      <hr className="border-card-border mx-10" />
      <div className="flex justify-between mx-10 pt-8 pb-8 items-center">
        <p className="-mt-2">
          © 2026 Graphics Programming Knights · UCF RSO
        </p>
        <ul className="flex flex-row gap-5">
          <li>
            <a href="https://github.com/GraphicsProgrammingKnights/gpkweb" target="_blank" rel="noopener noreferrer">
              <Image src="/github-logo.svg" alt="github link" className="object-cover w-6 h-auto" width={24} height={24} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/gpknights_" target="_blank" rel="noopener noreferrer">
              <Image src="/instagram-logo.svg" alt="insta link" className="object-cover w-6 h-auto" width={24} height={24} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/graphics-programming-knights/" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin-logo.svg" alt="linkedin link" className="object-cover w-6 h-auto" width={24} height={24} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
