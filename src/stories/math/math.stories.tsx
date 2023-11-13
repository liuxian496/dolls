import { Meta, StoryObj } from '@storybook/react';

import { PrecisionTest } from '../../test/math/precisionTest';


const meta: Meta= {
    title: 'Experiment/Math',
};

export default meta;
export type MathStory = StoryObj;


export const Precision = PrecisionTest;