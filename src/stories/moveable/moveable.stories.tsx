import { Meta, StoryObj } from '@storybook/react';

import { MouseMoveTest } from '../../test/moveable/mouseMoveText';


const meta: Meta= {
    title: 'Experiment/Moveable',
};

export default meta;
export type MoveableStory = StoryObj;


export const MouseMove = MouseMoveTest;