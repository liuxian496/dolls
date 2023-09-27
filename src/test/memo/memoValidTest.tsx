import React, { useState } from 'react';

import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import { MemoStory } from '../../stories/memo/memo.stories';

import { Name } from '../../components/memo/name';
import { MemoName } from '../../components/memo/memoName';

const MemoValidTest = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    function handleNameChange(e: any) {
        setName(e.target.value);
    }

    function handleAgeChange(e: any) {
        setAge(e.target.value);
    }

    return (
        <>
            <label>
                Name{': '}
                <input data-testid="name" value={name} onChange={handleNameChange} />
            </label>
            <label>
                Age{': '}
                <input data-testid="age" value={age} onChange={handleAgeChange} />
            </label>
            <Name name={name} />
            <MemoName name={name} />
        </>
    )
};

export const MemoValid: MemoStory = {
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