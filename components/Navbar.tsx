// File: components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // New state to track if the navbar should be visible (scrolling up)
  const [visible, setVisible] = useState(true);
  // New state to keep track of the last scroll position
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolling down
      if (window.scrollY > lastScrollY) {
        // If scrolling down AND past a certain threshold (e.g., 80px from top)
        // This prevents it from hiding immediately if you just scroll a tiny bit
        if (window.scrollY > 80) {
          setVisible(false); // Hide the navbar
        }
      }
      // Check if scrolling up
      else if (window.scrollY < lastScrollY) {
        setVisible(true); // Show the navbar
      }

      // Update the 'scrolled' state for background change
      setScrolled(window.scrollY > 10);
      // Always update the last scroll position
      setLastScrollY(window.scrollY);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]); // Re-run effect when lastScrollY changes

  return (
    <header
      className={`
        w-full py-6 px-6 sm:px-10 lg:px-[140px]
        fixed top-0 left-0 z-50
        transition-all duration-300 ease-in-out // Smooth transition for position and background
        ${scrolled ? "bg-[var(--color-brown)]/90 backdrop-blur-sm" : "bg-[var(--color-brown)]"}
        ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} // This controls the slide up/down
        text-[var(--color-off-white)]
      `}
    >
<nav className="flex items-center justify-between">
  {/* Logo / Brand */}
  <h1
    className="text-xl sm:text-2xl font-bold"
    style={{ fontFamily: "var(--font-heading)" }}
  >
    B&M 
  </h1>

  {/* Nav links (desktop) */}
  <ul className="hidden md:flex items-center gap-8" style={{ fontFamily: "var(--font-subtext)" }}>
    <li>
      <Link href="/" className="hover:text-[var(--color-white)] transition">
        Home
      </Link>
    </li>
    <li>
      <Link href="/shop" className="hover:text-[var(--color-white)] transition">
        Shop
      </Link>
    </li>
    <li>
      <Link href="/contact" className="hover:text-[var(--color-white)] transition">
        Contact
      </Link>
    </li>
  </ul>

  {/* Mobile menu toggle */}
  <div className="md:hidden">
    <button
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle menu"
      className="text-white"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
        />
      </svg>
    </button>
  </div>
</nav>

{/* Mobile dropdown menu */}
  {isOpen && (
    <div className="md:hidden mt-4 flex flex-col gap-4" style={{ fontFamily: "var(--font-subtext)" }}>
      <Link href="/"          onClick={() => setIsOpen(false)} className="hover:text-[var(--color-white)]">Home</Link>
      <Link href="/shop"      onClick={() => setIsOpen(false)} className="hover:text-[var(--color-white)]">Shop</Link>
      <Link href="/contact"   onClick={() => setIsOpen(false)} className="hover:text-[var(--color-white)]">Contact</Link>
    </div>
  )}

  
    </header>
  );
};

export default Navbar;