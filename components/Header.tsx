'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ROUTES = [
  { route: '/sims', title: 'SIMs' },
  { route: '/about', title: 'About' },
  { route: '/support', title: 'Support' },
  { route: '/contact', title: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`bg-white text-[#131F28] sticky top-0 z-10 flex justify-between transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_2px_10px_rgba(0,0,0,0.05)]' : ''
      }`}
      style={{
        paddingBlock: 'clamp(24px, 2.291666667vw, 44px)',
        paddingInline: 'max(6.25vw, 20px)',
      }}
    >
      <div>
        <Image
          src={'/svgs/logo.svg'}
          alt="logo"
          width={100}
          height={38}
          className="aspect-[2.63157894737/1]"
          style={{
            width: 'clamp(60px, 5.208vw, 100px)',
          }}
        />
      </div>

      <nav>
        <div className="sm:hidden">
          <Image
            src={'/svgs/hamburger.svg'}
            alt="menu"
            width={24}
            height={24}
          />
        </div>
        <ul className="hidden gap-5 sm:flex">
          {ROUTES.map((route) => (
            <li
              key={route.route}
              className="font-semibold leading-[2.25] h-full flex"
              style={{
                fontSize: 'clamp(12px, 0.83vw, 16px)',
              }}
            >
              <div className="h-full">{route.title}</div>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
