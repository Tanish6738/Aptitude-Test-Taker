"use client";
import React, { useState } from 'react';
import FormInput from '@/components/FormInput';
import Button from '@/components/Button';

export default function CreateQuestionPage() {
  const [options, setOptions] = useState<string[]>(['', '', '', '']);
  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create Question</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log('Question created');
        }}
      >
        <FormInput label="Question" name="question" required />
        {options.map((opt, i) => (
          <FormInput
            key={i}
            label={`Option ${i + 1}`}
            value={opt}
            onChange={e => {
              const copy = [...options];
              copy[i] = e.target.value;
              setOptions(copy);
            }}
            required
          />
        ))}
        <FormInput label="Correct Answer (value)" name="answer" required />
        <Button type="submit">Save</Button>
      </form>
    </main>
  );
}