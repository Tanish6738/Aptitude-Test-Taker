"use client";
import React from 'react';
import { tests } from '@/mock/tests';
import TestCard from '@/components/TestCard';
import Link from 'next/link';

export default function TestsPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Tests</h1>
        <Link href="/tests/create" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2">Create</Link>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {tests.map(t => (
          <Link key={t.id} href={`/tests/${t.id}`}>
            <TestCard title={t.title} duration={t.duration} questionCount={t.questionCount} />
          </Link>
        ))}
      </div>
    </main>
  );
}