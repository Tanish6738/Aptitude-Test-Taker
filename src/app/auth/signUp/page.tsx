"use client";
import React from 'react';
import FormInput from '@/components/FormInput';
import Button from '@/components/Button';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 flex items-center justify-center p-6">
      <form
        onSubmit={e => { e.preventDefault(); console.log('Sign up'); }}
        className="bg-gray-800 rounded-2xl p-6 shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <FormInput label="Name" name="name" required />
        <FormInput label="Email" type="email" name="email" required />
        <FormInput label="Password" type="password" name="password" required />
        <Button type="submit">Create Account</Button>
        <div className="text-xs text-gray-400 mt-3">Have an account? <Link href="/auth/signIn" className="text-blue-400">Sign In</Link></div>
      </form>
    </main>
  );
}