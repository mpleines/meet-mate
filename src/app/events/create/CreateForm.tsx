'use client';

import { createEvent } from '@/actions/events';
import { Form, FormField } from '@/components/Form';
import WeekdayPicker from '@/components/WeekdayPicker';
import { Input } from '@/components/ui/input';
import { FunctionComponent, useState } from 'react';
import { toast } from 'sonner';
import AvailableHourPicker from '@/components/AvailableHourPicker';
import Select from '@/components/Select';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

type MeetingType = 'video' | 'inPerson';

const MEETING_TYPE_OPTIONS: { label: string; value: MeetingType }[] = [
  { label: 'Video Conference', value: 'video' },
  { label: 'In Person', value: 'inPerson' },
];

interface CreateFormProps {
  userId: string;
}

const CreateForm: FunctionComponent<CreateFormProps> = ({ userId }) => {
  const [meetingType, setMeetingType] = useState<{
    label: string;
    value: MeetingType;
  }>(MEETING_TYPE_OPTIONS.find((option) => option.value === 'video')!);

  async function handleCreate(formData: FormData) {
    try {
      await createEvent(formData, userId);
      toast('Event created successfully');
    } catch (error) {
      toast('Error creating Event');
    }
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
          <Label htmlFor="weekdays">Available on</Label>
          <WeekdayPicker required id="weekdays" name="weekdays" />
          <Label htmlFor="availableFrom">Available Hours</Label>
          <div className="flex flex-row gap-2 items-center">
            <AvailableHourPicker
              id="availableFrom"
              name="availableFrom"
              required
            />
            <div>-</div>
            <AvailableHourPicker
              id="availableUntil"
              name="availableUntil"
              required
            />
          </div>
          <FormField label="Duration (min.)" name="duration">
            <Select
              name="duration"
              defaultValue="15"
              options={[
                { label: '15 min.', value: '15' },
                { label: '30 min.', value: '30' },
                { label: '45 min.', value: '45' },
                { label: '60 min.', value: '60' },
              ]}
            />
          </FormField>
          <FormField label="Meeting Type" name="meetingType">
            <Select
              name="meetingType"
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
};

export default CreateForm;
