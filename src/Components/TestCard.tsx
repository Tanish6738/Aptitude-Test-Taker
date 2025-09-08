"use client";
import React from 'react';

type TestCardProps = {
  title?: string;
  duration?: number;
  questionCount?: number;
  onStart?: () => void;
};

const mock = {
  title: 'Mock Test 1',
  duration: 60,
  questionCount: 30,
};

export default function TestCard({ title, duration, questionCount, onStart }: TestCardProps) {
  return (
    <div className="bg-gray-800 shadow-md rounded-2xl p-4 flex flex-col gap-2">
      <div className="text-gray-50 text-lg font-semibold">{title || mock.title}</div>
      <div className="text-gray-400 text-sm">{questionCount ?? mock.questionCount} Questions • {duration ?? mock.duration} min</div>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 mt-2"
        onClick={() => {
          onStart?.();
          console.log('Start Test clicked');
        }}
      >
        Start Test
      </button>
    </div>
  );
}
