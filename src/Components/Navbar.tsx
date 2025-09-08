"use client";
import React from 'react';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/questions', label: 'Questions' },
  { href: '/practice-sets', label: 'Practice Sets' },
  { href: '/tests', label: 'Tests' },
  { href: '/analytics', label: 'Analytics' },
  { href: '/settings', label: 'Settings' },
];

export default function NavBar() {
  return (
    <nav className="w-full bg-gray-900 text-gray-50 px-6 py-3 flex items-center justify-between shadow-md">
      <div className="text-xl font-bold">Aptitude Test Platform</div>
      <div className="flex gap-4">
        {links.map(link => (
          <Link key={link.href} href={link.href} className="hover:text-blue-400 transition-colors">
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
