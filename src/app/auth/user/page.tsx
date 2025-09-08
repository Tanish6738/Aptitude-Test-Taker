import React from 'react';

export default function UserProfilePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">User Profile (Mock)</h1>
      <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
        <div className="mb-2"><span className="text-gray-400">Name:</span> John Doe</div>
        <div className="mb-2"><span className="text-gray-400">Email:</span> john@example.com</div>
        <div className="mb-2"><span className="text-gray-400">Role:</span> Student</div>
        <div className="text-xs text-gray-500 mt-4">This is mock data. Real data will load in Phase 2.</div>
      </div>
    </main>
  );
}