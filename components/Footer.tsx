"use client";

import Link from "next/link";

const Footer = () => (
  <footer className="relative bg-[var(--color-brown)] text-[var(--color-off-white)] px-6 sm:px-10 lg:px-[140px] py-20">
    {/* ── TOP GRID ───────────────────────────────────────── */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-10">
      {/* CONTACT */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
          Contact
        </h4>
        <p style={{ fontFamily: "var(--font-subtext)" }}>
          Ziya Rızkı Cd, Girne, <br />55/B, 40001
        </p>
        <p style={{ fontFamily: "var(--font-subtext)" }}>
          info@B&M.com <br />(+90) 533 854 05 55
        </p>
      </div>

      {/* SOCIAL */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
          Connect
        </h4>
        <ul className="space-y-2 text-base" style={{ fontFamily: "var(--font-subtext)" }}>
          <li><Link href="https://instagram.com" target="_blank" className="hover:text-white transition">Instagram</Link></li>
          <li><Link href="https://tiktok.com"    target="_blank" className="hover:text-white transition">TikTok</Link></li>
          <li><Link href="https://twitter.com"   target="_blank" className="hover:text-white transition">X (Twitter)</Link></li>
        </ul>
      </div>

      {/* NEWSLETTER */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Newsletter</h4>
        <p className="text-base" style={{ fontFamily: "var(--font-subtext)" }}>
          Be the first to know about new collections and exclusive offers.
        </p>

        <form className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md text-black focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-white text-[var(--color-brown)] px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    {/* ── BOTTOM BAR ─────────────────────────────────────── */}
    <div className="border-t border-[var(--color-off-white)] pt-6 text-center text-sm" style={{ fontFamily: "var(--font-subtext)" }}>
      © {new Date().getFullYear()} B&M. All rights reserved.
    </div>
  </footer>
);

export default Footer;
