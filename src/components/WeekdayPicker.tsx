import { FunctionComponent } from 'react';

export const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

interface WeekdayPickerProps {}

const WeekdayPicker: FunctionComponent<WeekdayPickerProps> = () => {
  return (
    <div className="flex gap-2">
      {WEEK_DAYS.map((day) => (
        <div key={day}>
          <input id={day} type="checkbox" name={day} className="hidden peer" />
          <label
            htmlFor={day}
            className="cursor-pointer text-xs flex items-center justify-center w-6 h-6 rounded-full bg-background-color-lightest hover:bg-purple-500 peer-checked:bg-purple-500"
          >
            {day.charAt(0)}
          </label>
        </div>
      ))}
    </div>
  );
};

export default WeekdayPicker;
