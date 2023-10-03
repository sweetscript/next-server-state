'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const links = [
  {
    label: 'Instructions',
    href: '/'
  },
  {
    label: 'Example 1',
    href: '/example-1'
  },
  {
    label: 'Example 2 (persist)',
    href: '/example-2'
  },
  {
    label: 'Example 3 (no router refresh)',
    href: '/example-3'
  }
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className="mb-4 border-b border-b-slate-100 bg-white dark:border-b-slate-700 dark:bg-slate-800">
      <div className="items-center md:flex md:px-8 md:py-4">
        <div
          className="shrink-0 px-8 py-4 font-mono text-sm font-bold text-slate-800 dark:text-slate-100
        md:p-0 "
        >
          <span className="text-base">next-server-state</span>
          <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 font-mono text-xs font-medium dark:bg-slate-700">
            v0.1.0
          </span>
        </div>
        <span className="mx-5 hidden h-8 w-px shrink-0 bg-slate-200 dark:bg-slate-700 md:inline-block"></span>
        <div className="flex flex-auto flex-nowrap items-center space-x-2 overflow-auto whitespace-nowrap px-4 pb-4 md:p-0">
          {links.map((link, key) => (
            <Link
              key={key}
              href={link.href}
              className={`inline-block rounded-full px-4 py-1.5 text-sm font-semibold no-underline  ${
                pathname === link.href
                  ? 'bg-slate-800 text-slate-100 dark:bg-white dark:text-slate-800'
                  : 'bg-slate-400/10 text-slate-700 dark:text-slate-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <span className="mx-5 hidden h-8 w-px shrink-0 bg-slate-200 dark:bg-slate-700 md:inline-block"></span>
        <div className="hidden shrink-0 md:flex">
          <a
            className="text-slate-500 no-underline hover:text-slate-800 dark:text-white/50 dark:hover:text-white"
            href="https://github.com/sweetscript/next-server-state"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="h-6 w-6"
              fill="currentColor"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
