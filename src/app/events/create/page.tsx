import Button from '@/components/Button';
import { create } from '@/actions/events';
import { redirect } from 'next/navigation';
import { Form, FormField } from '@/components/Form';
import Input from '@/components/Input';
import WeekdayPicker from '@/components/WeekdayPicker';
import Select from '@/components/Select';
import TimeInput from '@/components/AvailableHourPicker';

export default async function Page({ params }: { params: { id: string } }) {
  async function handleCreate(formData: FormData) {
    'use server';

    await create(formData);
    redirect('/dashboard');
  }

  return (
    <div>
      <h1 className="text-3xl">Create new Event</h1>
      <div className="xl:w-2/3 mt-4">
        <Form action={handleCreate}>
          <FormField label="Title" name="title">
            <Input
              id="title"
              name="title"
              type="text"
              placeholder="Enter Title"
              required
            />
          </FormField>
          <FormField label="Description" name="description">
            <Input
              id="description"
              name="description"
              type="text"
              placeholder="Enter Description"
              required
            />
          </FormField>
          <label htmlFor="weekdays">Available on</label>
          <WeekdayPicker required id="weekdays" name="weekdays" />
          <label htmlFor="availableFrom">Available Hours</label>
          <div className="flex flex-row gap-2 items-center">
            <TimeInput id="availableFrom" name="availableFrom" required />
            <div>-</div>
            <TimeInput id="availableUntil" name="availableUntil" required />
          </div>
          <FormField label="Duration (min.)" name="duration">
            <Select
              id="duration"
              name="duration"
              options={[
                { label: '15 min.', value: 15 },
                { label: '30 min.', value: 30 },
                { label: '45 min.', value: 45 },
                { label: '60 min.', value: 60 },
              ]}
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
