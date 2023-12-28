'use client';
import { WEEK_DAYS } from '@/constants';
import { FunctionComponent, useState } from 'react';

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
    WEEK_DAYS.reduce((prev, cur) => ({ ...prev, [cur]: false }), {})
  );

  const isAtLeastOneSelected = !required
    ? true
    : Object.values(days).some((value) => value === true);

  return (
    <div className="flex gap-2">
      <input
        required={!isAtLeastOneSelected}
        style={{
          display: 'inline-block',
          position: 'absolute',
          overflow: 'hidden',
          clip: 'rect(0 0 0 0)',
          height: 1,
          width: 1,
          margin: -1,
          padding: 0,
          border: 0,
        }}
        id={id}
        name={name}
      />
      {WEEK_DAYS.map((day) => (
        <div key={day}>
          <input
            id={day}
            type="checkbox"
            name={day}
            className="hidden peer"
            onChange={(e) =>
              setDays((prevDays) => ({
                ...prevDays,
                [day]: e.target.checked,
              }))
            }
          />
          <label
            htmlFor={day}
            className="cursor-pointer flex items-center justify-center w-6 h-6 rounded-full bg-background hover:bg-purple-500 peer-checked:bg-purple-500"
          >
            {day.charAt(0)}
          </label>
        </div>
      ))}
    </div>
  );
};

export default WeekdayPicker;
