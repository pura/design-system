import type { Meta, StoryObj } from '@storybook/react';
import { TypeBasicWrapper } from './TypeBasicWrapper';

const meta: Meta<typeof TypeBasicWrapper> = {
  title: 'Components/TypeBasicWrapper',
  component: TypeBasicWrapper,
};
export default meta;

export const Basic: StoryObj<typeof TypeBasicWrapper> = {
  args: { type: 'basic' },
};
export const Active: StoryObj<typeof TypeBasicWrapper> = {
  args: { type: 'active' },
};
export const Filled: StoryObj<typeof TypeBasicWrapper> = {
  args: { type: 'filled' },
};
export const Typing: StoryObj<typeof TypeBasicWrapper> = {
  args: { type: 'typing' },
};
