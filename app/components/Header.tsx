"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon, CodePenIcon } from "@icons";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Yanal Almir
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight">
          Freelance Frontend Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I build accessible, performant, and user-friendly web applications.
        </p>
        <nav className="nav hidden lg:block">
          <ul className="mt-16 w-max">
            {links.map((link, idx) => {
              const isActive = activeSection === link.href.substring(1);

              const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                const targetId = link.href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                  targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                  window.history.pushState(null, "", link.href);
                }
              };

              return (
                <Link
                  key={idx}
                  href={link.href}
                  onClick={handleClick}
                  className="group flex items-center cursor-pointer"
                >
                  <li className="group flex items-center py-3">
                    <span
                      className={`nav-indicator mr-4 h-px bg-text transition-all motion-reduce:transition-none ${
                        isActive
                          ? "w-16 !bg-primary"
                          : "w-8 group-hover:w-16 group-hover:bg-primary group-focus-visible:w-16 group-focus-visible:bg-primary"
                      }`}
                    />
                    <span
                      className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors motion-reduce:transition-none ${
                        isActive
                          ? "text-primary"
                          : "text-text group-hover:text-primary group-focus-visible:text-primary"
                      }`}
                    >
                      {link.label}
                    </span>
                  </li>
                </Link>
              );
            })}
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        {socials.map((social, idx) => (
          <li key={idx} className="mr-5 shrink-0 text-xs cursor-pointer">
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${social.label} (opens in a new tab)`}
              title={social.label}
            >
              <span className="sr-only">{social.label}</span>
              <span className="block hover:text-textOffset transition-colors ease-in-out duration-300 h-6 w-6">
                {social.icon}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

const links = [
  { id: 1, href: "#about", label: "About" },
  { id: 2, href: "#experience", label: "Experience" },
  { id: 3, href: "#projects", label: "Projects" },
  { id: 4, href: "#contact", label: "Contact" },
];

const socials = [
  {
    id: 1,
    href: "https://github.com/yanalalmer",
    label: "GitHub",
    icon: <GitHubIcon />,
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/yanalalmer/",
    label: "LinkedIn",
    icon: <LinkedInIcon />,
  },
  {
    id: 3,
    href: "https://codepen.io/yanalalmer",
    label: "CodePen",
    icon: <CodePenIcon />,
  },
];
