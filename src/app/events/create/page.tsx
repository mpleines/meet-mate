'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import { create } from '@/actions/events';
import { redirect } from 'next/navigation';
import { Form, FormField } from '@/components/Form';
import Input from '@/components/Input';
import WeekdayPicker from '@/components/WeekdayPicker';
import Select from '@/components/Select';
import TimeInput from '@/components/AvailableHourPicker';

type MeetingType = 'video' | 'inPerson';

const MEETING_TYPE_OPTIONS: { label: string; value: MeetingType }[] = [
  { label: 'Video Conference', value: 'video' },
  { label: 'In Person', value: 'inPerson' },
];

export default function Page({ params }: { params: { id: string } }) {
  const [meetingType, setMeetingType] = useState<{
    label: string;
    value: MeetingType;
  }>(MEETING_TYPE_OPTIONS.find((option) => option.value === 'video')!);

  async function handleCreate(formData: FormData) {
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
              defaultValue={{ label: '15 min.', value: 15 }}
              options={[
                { label: '15 min.', value: 15 },
                { label: '30 min.', value: 30 },
                { label: '45 min.', value: 45 },
                { label: '60 min.', value: 60 },
              ]}
            />
          </FormField>
          <FormField label="Meeting Type" name="meetingType">
            <Select
              id="meetinType"
              name="meetingType"
              isMulti={false}
              // FIXME: typigns
              onChange={(option: any) => {
                setMeetingType(option);
              }}
              value={meetingType}
              defaultValue={{ label: 'Video Conference', value: 'video' }}
              options={[
                { label: 'Video Conference', value: 'video' },
                { label: 'In Person', value: 'inPerson' },
              ]}
            />
          </FormField>
          {meetingType.value === 'video' && (
            <FormField label="Video Conference Link" name="videoLink">
              <Input
                id="videoLink"
                name="videoLink"
                type="text"
                required
                placeholder="https://teams.microsoft.com/l/meetup-join/..."
              />
            </FormField>
          )}
          <div className="mt-4">
            <Button type="submit">Create Event</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
