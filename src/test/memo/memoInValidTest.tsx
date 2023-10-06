import React, { useState } from 'react';

import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import { MemoStory } from '../../stories/memo/memo.stories';

import { MemoPerson } from '../../components/memo/memoPerson';
import { Name } from '../../components/memo/name';
import { MemoAge } from '../../components/memo/memoAge';


const MemoInValidTest = () => {
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
            <MemoPerson id="Tom">
                <Name name={name} />
            </MemoPerson>
            <MemoPerson id="Jerry">
                <MemoAge age={age} />
            </MemoPerson>
            <MemoPerson id="BigBrother" />
            <MemoPerson id="BigBrother2" >
                <div></div>
            </MemoPerson>
        </>
    )
};

export const MemoInvalid: MemoStory = {
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