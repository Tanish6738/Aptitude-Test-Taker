"use client";
import React from 'react';
import { questions } from '@/mock/questions';
import QuestionCard from '@/components/QuestionCard';
import Link from 'next/link';

export default function QuestionsPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Questions</h1>
        <div className="flex gap-3">
          <Link href="/questions/create" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2">Create</Link>
          <Link href="/questions/upload" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2">Upload</Link>
        </div>
      </div>
      <div>
        {questions.map(q => (
          <Link key={q.id} href={`/questions/${q.id}`}>
            <QuestionCard question={q.question} options={q.options} />
          </Link>
        ))}
      </div>
    </main>
  );
}