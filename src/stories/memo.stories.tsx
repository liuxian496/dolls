import React, { useState, memo, useRef } from 'react';

import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';
import { Meta, StoryObj } from '@storybook/react';

import { Name } from '../components/memo/name';
import { MemoAge } from '../components/memo/memoAge';
import { MemoPerson } from '../components/memo/memoPerson';
import { MemoValidTest } from '../tests/MemoValidTest';
import { MemoInValidTest } from '../tests/MemoInValidTest';

export default {
    title: 'Example/Memo',
} as Meta;

type Story = StoryObj;


export const MemoValid: Story = {
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    render: () => <MemoValidTest />,
    play: async ({ canvasElement }) => {
        const canvas = await within(canvasElement);

        await userEvent.type(canvas.getByTestId('name'), 'T');

        expect(
            canvas.getByText('Hello: T, Name was rendered 2 times')
        ).toBeInTheDocument();

        expect(
            canvas.getByText('Hello: T, MemoName was rendered 2 times')
        ).toBeInTheDocument();

        await userEvent.type(canvas.getByTestId('age'), '12');

        expect(
            canvas.getByText('Hello: T, Name was rendered 4 times')
        ).toBeInTheDocument();

        expect(
            canvas.getByText('Hello: T, MemoName was rendered 2 times')
        ).toBeInTheDocument();
    }
}

export const MemoInvalid: Story = {
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    render: () => <MemoInValidTest />,
    play: async ({ canvasElement }) => {
        const canvas = await within(canvasElement);

        await userEvent.type(canvas.getByTestId('name'), 'T');

        expect(
            canvas.getByText('Hello: T, Name was rendered 2 times')
        ).toBeInTheDocument();

        expect(
            canvas.getByText('MemoPerson Tom was rendered 2 times')
        ).toBeInTheDocument();

        expect(
            canvas.getByText('MemoPerson Jerry was rendered 2 times')
        ).toBeInTheDocument();

        await userEvent.type(canvas.getByTestId('age'), '12');

        expect(
            canvas.getByText('Hello: T, Name was rendered 4 times')
        ).toBeInTheDocument();

        expect(
            canvas.getByText('Age is 12, MemoAge was rendered 3 times')
        ).toBeInTheDocument();

        expect(
            canvas.getByText('MemoPerson Tom was rendered 4 times')
        ).toBeInTheDocument();

        expect(
            canvas.getByText('MemoPerson Jerry was rendered 4 times')
        ).toBeInTheDocument();

        expect(
            canvas.getByText('MemoPerson BigBrother was rendered 1 times')
        ).toBeInTheDocument();
    }
}