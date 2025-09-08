"use client";
import React from 'react';
import FormInput from '@/components/FormInput';
import Button from '@/components/Button';

export default function CreateTestPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create Test</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log('Test created');
        }}
      >
        <FormInput label="Title" name="title" required />
        <FormInput label="Duration (minutes)" name="duration" type="number" required />
        <FormInput label="Question IDs (comma separated)" name="questions" required />
        <Button type="submit">Save</Button>
      </form>
    </main>
  );
}