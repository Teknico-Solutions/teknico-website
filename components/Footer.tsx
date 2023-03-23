import React from "react";
import Link from "next/link";
import { FooterProps, Services, About } from "@/assets/FooterVariables";

const FooterListItem: React.FC<FooterProps> = ({ title, list }) => (
  <div>
    <h5 className="uppercase text-[14px] font-bold tracking-[1.75px] text-[#494B4E] mb-4">
      {title}
    </h5>
    <ul className="font-medium text-paragraph flex flex-col items-start gap-2">
      {list.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>{item.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer: React.FC = () => (
  <footer className="section-container">
    <div className="flex flex-col gap-10">
      <div>
        <div className="w-[215px] h-[50px] bg-gray-300"></div>
        <p className="text-paragraph">
          So strongly and metaphysically did I conceive of my situation then,
          that while earnestly watching his motions, I seemed distinctly.
        </p>
        <div className="flex flex-wrap gap-4 text-[#494B4E]">
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
            <div className="bg-red w-3 h-3"></div>
            <div className="bg-red w-3 h-3"></div>
            <div className="bg-red w-3 h-3"></div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
