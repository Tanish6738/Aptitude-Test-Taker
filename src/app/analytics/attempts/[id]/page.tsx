"use client";
import React from 'react';
import { attempts } from '@/mock/attempts';
import { tests } from '@/mock/tests';

type Params = { id: string };

export default function AttemptDetailPage({ params }: { params: Promise<Params> }) {
  const { id } = React.use(params);
  const attempt = attempts.find(a => a.id === id);
  if (!attempt) {
    return <div className="min-h-screen bg-gray-900 text-gray-50 p-6">Attempt not found.</div>;
  }
  const test = tests.find(t => t.id === attempt.testId);
  const pct = Math.round((attempt.score / attempt.total) * 100);
  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-4">Attempt Detail</h1>
      <div className="bg-gray-800 rounded-2xl p-6 max-w-lg shadow-md">
        <div className="mb-2"><span className="text-gray-400">Attempt ID:</span> {attempt.id}</div>
        <div className="mb-2"><span className="text-gray-400">Test:</span> {test?.title}</div>
        <div className="mb-2"><span className="text-gray-400">Score:</span> {attempt.score} / {attempt.total} ({pct}%)</div>
        <div className="mb-2"><span className="text-gray-400">Date:</span> {attempt.date}</div>
        <div className="w-full bg-gray-700 rounded h-3 overflow-hidden mt-4">
          <div className="bg-blue-600 h-full" style={{ width: pct + '%' }} />
        </div>
      </div>
    </main>
  );
}