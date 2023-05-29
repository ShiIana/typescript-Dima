import type { Meta, StoryObj } from '@storybook/react';

import { Rating } from './Rating';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Rating',
    component: Rating,
    tags: ['autodocs'],
    argTypes: {
        //backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const EmptyStars: Story = {
    args: {
        title: 'Rating',
        rating: 0,
        setRating: (x) => x
    },
};
