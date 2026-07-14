'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'education', path: '/education' },
    { name: 'skills', path: '/skills' },
    { name: 'projects', path: '/projects' },
    { name: 'hobbies', path: '/hobbies' },
    { name: 'contact', path: '/contact' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link href="/">SUMIT KUMAR PATEL</Link>
      </div>
      <div className="nav-links">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`nav-link ${pathname === item.path ? 'active' : ''}`}
          >
            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          </Link>
        ))}
      </div>
    </nav>
  );
}
