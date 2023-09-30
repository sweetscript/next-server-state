'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center space-x-2 mb-4">
      <Link
        href="/"
        className={`${pathname === '/' ? 'button' : 'button-outline'}`}
      >
        Example 1
      </Link>
      <Link
        href="/example-2"
        className={`${pathname === '/example-2' ? 'button' : 'button-outline'}`}
      >
        Example 2
      </Link>
    </div>
  );
};

export default NavBar;
