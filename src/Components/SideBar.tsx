import React from 'react';
import Link from 'next/link';

const sections = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/questions', label: 'Questions' },
  { href: '/practice-sets', label: 'Practice Sets' },
  { href: '/tests', label: 'Tests' },
  { href: '/analytics', label: 'Analytics' },
  { href: '/settings', label: 'Settings' },
];

export default function SideBar() {
  return (
    <aside className="bg-gray-800 text-gray-50 w-56 min-h-screen p-6 flex flex-col gap-4 shadow-lg">
      <div className="text-lg font-semibold mb-6">Menu</div>
      {sections.map(section => (
        <Link key={section.href} href={section.href} className="hover:text-blue-400 transition-colors">
          {section.label}
        </Link>
      ))}
    </aside>
  );
}
