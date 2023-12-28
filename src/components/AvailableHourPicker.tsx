import { FunctionComponent, useState } from 'react';
import Select from './Select';

interface AvailableHourPickerProps {
  id: string;
  name: string;
  required?: boolean;
}

const generateTimeSlots = () => {
  const startTime = new Date();
  startTime.setHours(0, 0, 0, 0);

  const endTime = new Date();
  endTime.setHours(23, 45, 0, 0);

  const currentTime = new Date(startTime);
  const slots = [];

  while (currentTime <= endTime) {
    const formattedTime = currentTime.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    slots.push({ label: formattedTime, value: formattedTime });

    currentTime.setMinutes(currentTime.getMinutes() + 15);
  }

  return slots;
};

const AvailableHourPicker: FunctionComponent<AvailableHourPickerProps> = ({
  id,
  name,
  required,
}) => {
  return (
    <Select
      id={id}
      name={name}
      options={generateTimeSlots()}
      required={required}
    />
  );
};

export default AvailableHourPicker;
