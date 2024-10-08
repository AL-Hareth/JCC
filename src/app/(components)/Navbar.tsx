"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import AnimatedLink from "./AnimatedLink";
import Link from "next/link";

export default function Navbar() {

  const navMenuRef = useRef<HTMLButtonElement>(null);
  const navMenuDivRef = useRef<HTMLDivElement>(null);

  useEffect(function() {
    if (!navMenuRef.current || !navMenuDivRef.current) {
      return;
    }

    navMenuRef.current.onclick = check;
  }, [navMenuDivRef]);
  function check(e: Event) {
    var target = (e && e.target);

    //Nav Menu
    if (!checkParent(target, navMenuDivRef.current)) {
      // click NOT on the menu
      if (checkParent(target, navMenuRef.current)) {
        // click on the link
        if (navMenuDivRef.current!.classList.contains("hidden")) {
          navMenuDivRef.current!.classList.remove("hidden");
        } else {
          navMenuDivRef.current!.classList.add("hidden");
        }
      } else {
        // click both outside link and outside menu, hide menu
        navMenuDivRef.current!.classList.add("hidden");
      }
    }
  }

  function checkParent(t: any, elm: any) {
    while (t.parentNode) {
      if (t == elm) {
        return true;
      }
      t = t.parentNode;
    }
    return false;
  }

  return (
    <nav id="header" className="w-full z-30 top-0 text-white py-1 lg:py-6">
      <div
        className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:pb-6"
      >
        <div className="pl-4 flex items-center">
          <Link
            className="flex items-center text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="/"
          >
            <Image src="/favicon.ico" alt="logo" width={100} height={100} />
            <span className="ml-2">JCC</span>
          </Link>
        </div>

        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            ref={navMenuRef}
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-green-500 appearance-none focus:outline-none"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20"
          id="nav-content"
          ref={navMenuDivRef}
        >
          <ul className="arabic-medium list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <AnimatedLink href="/news" color="bg-yellow-600" classNames="text-white px-4 py-2">الأخبار</AnimatedLink>
            </li>
            <li className="mr-3">
              <AnimatedLink href="/" color="bg-yellow-600" classNames="text-white px-4 py-2">الرئيسية</AnimatedLink>
            </li>
            {/*
            <li className="mr-3">
              <a
                className="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#"
              >link</a
              >
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#"
              >link</a
              >
            </li>
            */}
          </ul>
          <button
            id="navAction"
            className="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded mt-4 lg:mt-0 py-4 px-8 shadow"
          >
           <AnimatedLink color="bg-black" href="/contact-us" classNames="text-black">Contact Us</AnimatedLink>
          </button>
        </div>
      </div>
    </nav>
  );
}
