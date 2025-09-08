"use client";
import React, { useState } from 'react';
import { tests } from '@/mock/tests';
import { questions } from '@/mock/questions';
import QuestionCard from '@/components/QuestionCard';
import Link from 'next/link';

type Params = { id: string };

export default function TestStartPage({ params }: { params: Promise<Params> }) {
  const { id } = React.use(params);
  const test = tests.find(t => t.id === id);
  const qList = questions.slice(0, test?.questionCount || 0);
  const [index, setIndex] = useState(0);

  if (!test) return <div className="min-h-screen bg-gray-900 text-gray-50 p-6">Test not found.</div>;
  const current = qList[index];
  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{test.title}</h1>
        <div className="text-sm text-gray-400">Question {index + 1} / {qList.length}</div>
      </div>
      {current && (
        <QuestionCard
          question={current.question}
          options={current.options}
          onSelect={() => console.log('Answer selected')}
        />
      )}
      <div className="flex justify-between mt-4">
        <button
          disabled={index === 0}
          onClick={() => setIndex(i => i - 1)}
          className="bg-gray-700 disabled:opacity-40 px-4 py-2 rounded-lg"
        >Prev</button>
        {index < qList.length - 1 ? (
          <button
            onClick={() => setIndex(i => i + 1)}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
          >Next</button>
        ) : (
          <Link href={`/tests/${test.id}/result`} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">Finish</Link>
        )}
      </div>
    </main>
  );
}