import React from 'react';
import { clsx } from '../utils/clsx';

export interface ListElementProps {
  selected?: boolean;
  className?: string;
}

export const ListElement: React.FC<ListElementProps> = ({ selected = false, className }) => {
  return (
    <div className={clsx('flex items-center gap-sm h-10 px-md py-sm w-60', selected ? 'bg-backdark text-white' : 'bg-white text-monochrome5', className)}>
      <div className="flex-1">{selected ? 'Option 1 selected' : 'Option 1'}</div>
    </div>
  );
};
