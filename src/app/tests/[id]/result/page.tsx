"use client";
import React from 'react';
import { tests } from '@/mock/tests';
import Link from 'next/link';

type Params = { id: string };

export default function TestResultPage({ params }: { params: Promise<Params> }) {
  const { id } = React.use(params);
  const test = tests.find(t => t.id === id);
  if (!test) return <div className="min-h-screen bg-gray-900 text-gray-50 p-6">Test not found.</div>;
  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Result - {test.title}</h1>
      <div className="bg-gray-800 rounded-2xl p-6 shadow-md mb-6">
        <div className="text-xl mb-2">Score: <strong>24 / {test.questionCount}</strong></div>
        <div className="w-full bg-gray-700 h-3 rounded overflow-hidden">
          <div className="bg-blue-600 h-full" style={{ width: '80%' }} />
        </div>
        <div className="text-right text-xs text-gray-400 mt-1">80%</div>
      </div>
      <Link href={`/tests/${test.id}`} className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 inline-block">Back to Test</Link>
    </main>
  );
}