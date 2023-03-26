"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "../public/logo/TEKNICO_vertical.png";

const Header: React.FC = () => {
  const [isBurgerActive, setIsBurgerActive] = useState<boolean>(false);
  const [isNavbarShow, setIsNavbarShow] = useState<boolean>(false);
  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleScroll = () => {
    if (window !== undefined) {
      const scrollY = window.scrollY;
      if (scrollY > 300) {
        setIsNavbarShow(true);
      } else {
        setIsNavbarShow(false);
      }
    }
  };

  const handleClick = (event: any) => {
    console.log(event.target.ariaValueText);
    event.preventDefault();
    const element = document.getElementById(event.target.ariaValueText);
    console.log(element?.offsetHeight);
    if (element !== null) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <header
      className={`${
        isNavbarShow ? "translate-y-0" : "-translate-y-full"
      } z-20 w-full h-[60px] fixed top-0 bg-[#fff] transition-all duration-500 ease-in-out lg:h-[80px]`}
    >
      <nav className="px-[15px] flex justify-between container items-center w-full mx-auto h-full">
        <div className="w-[150px] h-[35px] relative">
          <Image src={logo} alt="teknico solutions logo" fill />
        </div>
        <button
          onClick={() => setIsBurgerActive(!isBurgerActive)}
          className="cursor-pointer h-[30px] w-[35px] relative z-30 lg:hidden"
        >
          <span
            className={`burger-menu-span before:burger-menu-span after:burger-menu-span before:absolute after:absolute before:top-[0] after:bottom-0 ${
              isBurgerActive &&
              "bg-transparent before:bg-[#fff] after:bg-[#fff] before:rotate-45 before:translate-y-[12px] after:-rotate-45 after:-translate-y-[13px]"
            }`}
          ></span>
        </button>
        <div
          className={`${
            isBurgerActive ? "translate-x-0" : "translate-x-full"
          } fixed w-full h-screen top-0 left-0 bg-black/80 text-[#fff] transition-all duration-500 ease-in-out lg:bg-transparent lg:text-[#000] lg:translate-x-0 lg:static`}
        >
          <ul className="pt-[60px] h-full flex flex-col gap-6 text-2xl font-semibold items-center text-center lg:flex-row lg:pt-0 lg:h-full lg:justify-end lg:text-base">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>Free Tools</Link>
            </li>
            <li>
              <Link
                href="#"
                aria-valuetext="contact-us"
                onClick={handleClick}
                className="capitalize btn-primary"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
