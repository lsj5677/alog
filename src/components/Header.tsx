"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const handleShowMobileMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 flex h-20 w-screen py-5 sm:block">
      <div className="container m-auto items-center justify-between sm:flex">
        <Link href="/">
          <h1 className="text-4xl font-bold">A_LOG</h1>
        </Link>
        <nav
          className={`fixed top-0 z-20 flex h-screen w-screen flex-col items-center justify-center gap-10 bg-lightGray text-2xl sm:relative sm:left-0 sm:h-auto sm:w-auto sm:flex-row sm:gap-x-6 sm:bg-transparent sm:text-lg ${
            isMenuOpen ? "left-0 opacity-100" : "-left-full"
          }`}
        >
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link href="/posts" onClick={() => setIsMenuOpen(false)}>
            Posts
          </Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <span>Dark</span>
        </nav>
      </div>
      <button
        className={`px-5 sm:hidden ${
          isMenuOpen && "absolute right-0 top-7 z-20"
        }`}
        onClick={handleShowMobileMenu}
      >
        {isMenuOpen ? "Close" : "Mobile"}
      </button>
    </header>
  );
}
