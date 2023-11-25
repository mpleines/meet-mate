import Button from '@/components/Button';
import { create } from '@/actions/events';
import { redirect } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  async function handleCreate(formData: FormData) {
    'use server';

    await create(formData);
    redirect('/dashboard');
  }

  return (
    <div>
      <h1 className="text-3xl">Create new Event</h1>
      <form className="mt-4 px-4 py-2" action={handleCreate}>
        <label htmlFor="title" className="block"></label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Enter Title"
          className="border rounded-md py-2 px-4 inline-flex focus:outline text-md ml-1 p-0 border-none text-white bg-background-color-lighter focus:border-none focus:outline-none"
        />
        <input
          id="description"
          name="description"
          type="text"
          placeholder="Enter Description"
          className="border rounded-md py-2 px-4 inline-flex focus:outline text-md ml-1 p-0 border-none text-white bg-background-color-lighter focus:border-none focus:outline-none"
        />
        <input
          type="number"
          id="duration"
          name="duration"
          placeholder="duration (minutes)"
          className="border rounded-md py-2 px-4 inline-flex focus:outline text-md ml-1 p-0 border-none text-white bg-background-color-lighter focus:border-none focus:outline-none"
        />
        <Button type="submit">Create Event</Button>
      </form>
    </div>
  );
}
