import { Meta, StoryObj } from '@storybook/react';

import { MemoValid } from '../../test/memo/memoValidTest';
import {  MemoInvalid } from '../../test/memo/memoInValidTest';

const meta: Meta= {
    title: 'Experiment/Memo',
};

export default meta;
export type MemoStory = StoryObj;


export {
    MemoValid,
    MemoInvalid
}