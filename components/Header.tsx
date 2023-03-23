"use client";

import React from "react";
import { useState } from "react";

const Header: React.FC = () => {
  const [isBurgerActive, setIsBurgerActive] = useState<boolean>(false);
  return (
    <header className="z-20">
      <nav>
        <button
          onClick={() => setIsBurgerActive(!isBurgerActive)}
          className="cursor-pointer py-[12px] w-[20px]"
        >
          <span
            className={`burger-menu-span relative before:burger-menu-span after:burger-menu-span before:absolute after:absolute before:-top-[8px] after:top-[8px] ${
              isBurgerActive &&
              "bg-transparent before:rotate-45 before:translate-y-[8px] before:translate-x-[5px] after:-rotate-45 after:-translate-y-[8px] after:translate-x-[5px]"
            }`}
          ></span>
        </button>
        <ul>
          <li>Menu</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
