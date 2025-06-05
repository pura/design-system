import type { Meta, StoryObj } from '@storybook/react';
import { ListElement } from './ListElement';

const meta: Meta<typeof ListElement> = {
  title: 'Components/ListElement',
  component: ListElement,
};
export default meta;

export const Default: StoryObj<typeof ListElement> = {
  args: {
    selected: false,
  },
};

export const Selected: StoryObj<typeof ListElement> = {
  args: {
    selected: true,
  },
};
