"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const navLinks = [
    { title: 'Home', url: '/' },
    { title: 'Articles', url: '/articles' },
    { title: 'News', url: '/news' }
  ];

  const iconList = [
    { icon: null },
    { icon: null },
    { icon: null },
  ];

  const bgColor = 'bg-zinc-950';
  const modalColor = 'bg-zinc-950';

  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 769);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleBarsIconClick = () => {
    toggleModal();
  };

  return (
    <>
      {!isMobile ? (
        // Laptop Navbar Code Here
        <nav className={`${bgColor} shadow-[0px_5px_16px_1px_#00000024]`}>
          <div className="flex justify-between mx-auto items-center py-2 px-24">
            <div className="text-white font-bold text-xl">
              <Link href="/">
                <Image
                  src="/favicon.ico"
                  alt="JCC Logo"
                  height={75}
                  width={75}
                />
              </Link>
            </div>
            <ul className="flex gap-8 md:gap-16 items-center justify-center text-center cursor-pointer">
              {navLinks.map((link, index) => (
                <li key={index} className="text-offwhite text-lg">
                  <Link href={link.url}>{link.title}</Link>
                </li>
              ))}
              <Link href="/podcast">
                <li className="relative bg-yellow-600 font-bold px-4 py-2 rounded-lg">
                  <span className="absolute flex h-3 w-3 top-[-4px] right-[-5px]">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  Podcast
                </li>
              </Link>
            </ul>
            <ul className="flex text-white gap-6 items-center cursor-pointer">
              {iconList.map((item, index) => (
                <div key={index}>{item.icon}</div>
              ))}
            </ul>
          </div>
        </nav>
      ) : (
        // Mobile Navbar Code Here
        <nav className={`${bgColor} py-2 px-4`}>
          <div className="mx-auto flex justify-between items-center">
            <div className="text-white font-bold text-xl">
              <Link href="/">
                <Image
                  src="/favicon.ico"
                  alt="JCC Logo"
                  height={75}
                  width={75}
                />
              </Link>
            </div>
            <div className="flex justify-end items-center gap-6 text-white cursor-pointer">
              {iconList.map((item, index) => (
                <div key={index} onClick={index === iconList.length - 1 ? handleBarsIconClick : () => { }}>{item.icon}</div>
              ))}
              <FaBars onClick={handleBarsIconClick} className="text-white cursor-pointer" />
            </div>
          </div>
          {showModal && (
            <div className="fixed inset-0 flex justify-center items-center bg-zinc-950 z-50">
              <div className={`absolute inset-0 ${modalColor}`} />
              <FaTimes
                className="absolute top-6 right-4 z-50 text-white cursor-pointer"
                onClick={toggleModal}
                style={{ fontSize: '16px' }}
              />
              <div className="relative bg-zinc-900 w-full h-full">
                <div className="flex flex-col gap-8 items-center justify-center h-full">
                  {navLinks.map((link, index) => (
                    <Link onClick={toggleModal} href={link.url} key={index} className="text-offwhite font-light text-2xl cursor-pointer">{link.title}</Link>
                  ))}
                  <Link onClick={toggleModal} href="/podcast" className="relative bg-yellow-600 font-bold px-4 py-2 rounded-lg">
                    <span className="absolute flex h-3 w-3 top-[-4px] right-[-5px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    Podcast
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      )}
    </>
  );

}
