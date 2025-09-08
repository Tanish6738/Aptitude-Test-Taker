"use client";
import React from 'react';
import FormInput from '@/components/FormInput';
import Button from '@/components/Button';

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <section className="bg-gray-800 rounded-2xl p-6 shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Profile</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            console.log('Profile updated');
          }}
        >
          <FormInput label="Name" name="name" defaultValue="John Doe" required />
          <FormInput label="Email" name="email" type="email" defaultValue="john@example.com" required />
          <Button type="submit">Save</Button>
        </form>
      </section>
      <section className="bg-gray-800 rounded-2xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Preferences</h2>
        <div className="text-gray-400 text-sm">Dark theme enforced.</div>
      </section>
    </main>
  );
}