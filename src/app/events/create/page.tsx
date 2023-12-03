import Button from '@/components/Button';
import { create } from '@/actions/events';
import { redirect } from 'next/navigation';
import { Form, FormField } from '@/components/Form';
import Input from '@/components/Input';

export default async function Page({ params }: { params: { id: string } }) {
  async function handleCreate(formData: FormData) {
    'use server';

    await create(formData);
    redirect('/dashboard');
  }

  return (
    <div>
      <h1 className="text-3xl">Create new Event</h1>
      <div className="w-2/3 mt-4">
        <Form action={handleCreate}>
          <FormField label="Title" name="title">
            <Input
              id="title"
              name="title"
              type="text"
              placeholder="Enter Title"
            />
          </FormField>
          <FormField label="Description" name="description">
            <Input
              id="description"
              name="description"
              type="text"
              placeholder="Enter Description"
            />
          </FormField>
          <FormField label="Duration (min.)" name="duration">
            <Input
              type="number"
              id="duration"
              name="duration"
              placeholder="duration (minutes)"
            />
          </FormField>
          <div className="mt-4">
            <Button type="submit">Create Event</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
