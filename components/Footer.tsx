import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoVertical from "../public/logo/TEKNICO_vertical.png";
import { FooterProps, Services, About } from "@/assets/FooterVariables";

const FooterListItem: React.FC<FooterProps> = ({ title, list }) => (
  <div>
    <h5 className="uppercase text-[14px] font-bold tracking-[1.75px] text-[#494B4E] mb-4">
      {title}
    </h5>
    <ul className="flex flex-col items-start gap-2 font-medium text-paragraph">
      {list.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>{item.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer: React.FC = () => (
  <footer className="relative section-container">
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <div className="w-[200px] h-[50px] relative bg-white">
          <Image src={logoVertical} alt="" fill />
        </div>
        <p className="m-0 text-paragraph">
          So strongly and metaphysically did I conceive of my situation then,
          that while earnestly watching his motions, I seemed distinctly.
        </p>
        <div className="flex flex-wrap gap-2 text-[#494B4E]">
          <span className="uppercase tracking-[1.75px] font-semibold .text_small">
            TERMS & CONDITIONS
          </span>
          <span className="uppercase tracking-[1.75px] font-semibold .text_small">
            PRIVACY POLICY
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        <FooterListItem title={Services.title} list={Services.list} />
        <FooterListItem title={About.title} list={About.list} />
        <div>
          <div>
            <div className="w-3 h-3 bg-red"></div>
            <div className="w-3 h-3 bg-red"></div>
            <div className="w-3 h-3 bg-red"></div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
