import React from 'react';
import { Search } from './icons/Search';
import { Cancel } from './icons/Cancel';
import { clsx } from '../utils/clsx';

export type TypeBasicWrapperVariant = 'filled' | 'typing' | 'active' | 'basic';

export interface TypeBasicWrapperProps {
  type?: TypeBasicWrapperVariant;
  className?: string;
}

export const TypeBasicWrapper: React.FC<TypeBasicWrapperProps> = ({ type = 'basic', className }) => {
  return (
    <div className={clsx('flex flex-col gap-sm p-sm rounded-md w-80', type !== 'basic' && 'border border-main', className)}>
      <div className="flex items-center gap-sm w-full">
        {(type === 'active' || type === 'basic') && (
          <>
            <Search className="w-6 h-6 opacity-50" />
            <div className="text-monochrome35">{type === 'basic' ? 'Search' : '|'}</div>
          </>
        )}
        {(type === 'filled' || type === 'typing') && (
          <>
            <div className="flex items-center gap-sm flex-1">
              <Search className="w-6 h-6 opacity-50" />
              <div className="flex-1 text-monochrome5">
                {type === 'typing' ? 'Typing |' : 'Some text'}
              </div>
            </div>
            <div className="relative w-6 h-6 bg-backdark rounded-sm">
              <Cancel className="absolute top-1 left-1 w-4 h-4 opacity-35" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
