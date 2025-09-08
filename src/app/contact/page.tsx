import React from 'react';
import FormInput from '@/components/FormInput';
import Button from '@/components/Button';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl shadow-md p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <form
          className="flex flex-col gap-3"
          onSubmit={e => {
            e.preventDefault();
            console.log('Contact form submitted');
          }}
        >
          <FormInput label="Name" name="name" required />
          <FormInput label="Email" name="email" type="email" required />
          <FormInput label="Message" name="message" as="textarea" required />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </main>
  );
}
