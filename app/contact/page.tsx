"use client";

import Image from "next/image";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <section className="min-h-screen px-6 sm:px-10 lg:px-[140px] py-42 bg-white text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: Text Content */}
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Contact Us
          </h1>

          <p className="text-base max-w-md" style={{ fontFamily: "var(--font-subtext)" }}>
            If you have any questions or want to <strong>get a free estimate</strong>, reach out to us via email or phone call. We are always happy to assist you!
          </p>

          <ul className="space-y-5 text-base">
            <li className="flex items-center gap-3">
              <Phone className="text-[var(--color-brown)]" />
              <span>+90 533 854 05 55</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-[var(--color-brown)]" />
              <span>info@b&m.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-[var(--color-brown)]" />
              <span>Ziya Rızkı Cd, Girne, 55/B</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="text-[var(--color-brown)] mt-1" />
              <span>Monday – Friday: <br /> 8:00 am – 5:00 pm</span>
            </li>
          </ul>
        </div>

        {/* Right: Image */}
        <div className="w-full h-[400px] md:h-[500px] relative rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-[var(--color-brown)]" />
          <Image
            src="/assets/contact-image.png" 
            alt="Contact Support"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
