"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from '@clerk/nextjs';

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
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  const isActive = (href: string) => pathname === href || pathname?.startsWith(href + '/');

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800/60 bg-gray-900/80 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 text-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Brand + Desktop Nav */}
          <div className="flex items-center gap-3">
            <Link href="/" className="text-lg sm:text-xl font-bold tracking-tight hover:text-blue-400 transition-colors">
              Aptitude Test Platform
            </Link>
            <div className="hidden md:flex items-center gap-2 ml-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-blue-400 bg-gray-800/60'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/40'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Auth + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <SignedOut>
              <div className="hidden sm:flex items-center gap-3">
                <SignInButton>
                  <button className="px-3 py-2 text-sm font-medium rounded-md border border-gray-700 text-gray-200 hover:bg-gray-800/60">
                    Log in
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="px-3 py-2 text-sm font-medium rounded-md bg-blue-600 hover:bg-blue-700 text-white">
                    Register
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>
            <SignedIn>
              <UserButton appearance={{ elements: { userButtonPopoverCard: 'bg-gray-900 text-gray-100' } }} />
            </SignedIn>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
              aria-controls="mobile-menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${open ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${open ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${open ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="space-y-1 px-4 pb-4 pt-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                isActive(link.href)
                  ? 'text-blue-400 bg-gray-800/60'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800/40'
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <SignedOut>
            <div className="mt-3 flex gap-3">
              <SignInButton>
                <button className="flex-1 px-3 py-2 text-sm font-medium rounded-md border border-gray-700 text-gray-200 hover:bg-gray-800/60">
                  Log in
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="flex-1 px-3 py-2 text-sm font-medium rounded-md bg-blue-600 hover:bg-blue-700 text-white">
                  Register
                </button>
              </SignUpButton>
            </div>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}
