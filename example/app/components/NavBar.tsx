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
        <div className="flex shrink-0"></div>
      </div>
    </div>
  );
};

export default NavBar;
