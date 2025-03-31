'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LogoProps {
  size?: number;
}

export default function Logo({ size = 50 }: LogoProps) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <Link href="/" aria-label="Home" className="outline-none">
      <div
        className="relative flex items-center justify-center"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 400"
        fill="none"
          width="1000"
        height="400"
        className="w-full h-full transition-all duration-300 ease-in-out"
      >
        <title>Marius Logo</title>
        <text
          x="50%"
          y="60%"
          fontFamily="Arial, sans-serif"
          fontSize="400"
          fontWeight="bold"
          textAnchor="middle"
          fill="currentColor"
          className="text-primary"
        >
          Mario
        </text>
      </svg>

      </div>
    </Link>
  );
}
