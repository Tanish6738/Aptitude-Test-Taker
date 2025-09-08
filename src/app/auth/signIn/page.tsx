"use client";
import React from 'react';
import FormInput from '@/components/FormInput';
import Button from '@/components/Button';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 flex items-center justify-center p-6">
      <form
        onSubmit={e => { e.preventDefault(); console.log('Sign in'); }}
        className="bg-gray-800 rounded-2xl p-6 shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-4">Sign In</h1>
        <FormInput label="Email" type="email" name="email" required />
        <FormInput label="Password" type="password" name="password" required />
        <Button type="submit">Sign In</Button>
        <div className="text-xs text-gray-400 mt-3">No account? <Link href="/auth/signUp" className="text-blue-400">Sign Up</Link></div>
      </form>
    </main>
  );
}