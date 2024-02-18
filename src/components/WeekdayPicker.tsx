'use client';
import { WEEK_DAYS } from '@/constants';
import { FunctionComponent, useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';

interface WeekdayPickerProps {
  id: string;
  name: string;
  required?: boolean;
}

const WeekdayPicker: FunctionComponent<WeekdayPickerProps> = ({
  required,
  id,
  name,
}) => {
  const [days, setDays] = useState(
    WEEK_DAYS.reduce((prev, cur) => ({ ...prev, [cur]: false }), {}),
  );

  const isAtLeastOneSelected = !required
    ? true
    : Object.values(days).some((value) => value === true);

  return (
    <ToggleGroup className="inline" type="multiple">
      {WEEK_DAYS.map((day) => (
        <ToggleGroupItem key={day} value={day}>
          {day}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};

export default WeekdayPicker;
