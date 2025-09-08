import React from 'react';
import { tests } from '@/mock/tests';
import Link from 'next/link';

type Params = { id: string };

export default function TestDetailPage({ params }: { params: Promise<Params> }) {
  const { id } = React.use(params);
  const test = tests.find(t => t.id === id);
  if (!test) return <div className="min-h-screen bg-gray-900 text-gray-50 p-6">Test not found.</div>;
  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{test.title}</h1>
      <div className="text-gray-300 mb-2">Duration: {test.duration} minutes</div>
      <div className="text-gray-300 mb-6">Questions: {test.questionCount}</div>
      <Link href={`/tests/${test.id}/start`} className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 inline-block">Start Test</Link>
    </main>
  );
}