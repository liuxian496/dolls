import React, { useRef, useState } from 'react';

import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import { Button } from 'litten';

import { UseStateStory } from '../../stories/useState/useState.stories';
import { Name } from '../../components/useState/name';

const SetStateTest = () => {
    const renderCount = useRef(0);
    renderCount.current = renderCount.current + 1;

    const [name, setName] = useState('Jerry');

    function handleBtuClick() {
        setName('Tom');
    }

    return (
        <>
            <p>{`Name is ${name}, Parent Control "SetStateTest" is renderd ${renderCount.current} times`}</p>
            <Name name={name} />
            <Button onClick={handleBtuClick}>Set Name to Tom</Button>
        </>
    )
};

export const SetState: UseStateStory = {
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    render: () => <SetStateTest />,
    play: async ({ canvasElement, step }) => {
        const canvas = await within(canvasElement);

        const SetNameBtu = canvas.getByText('Set Name to Tom');

        await step('Click "Set Name to Tom", render times is 2', async () => {
            await userEvent.click(SetNameBtu);

            await expect(
                canvas.getByText('Name is Tom, Parent Control "SetStateTest" is renderd 2 times')
            ).toBeInTheDocument();

            await expect(
                canvas.getByText('Hello: Tom, Name was rendered 2 times')
            ).toBeInTheDocument();
        });

        await step('Click "Set Name to Tom", render times is also 2', async () => {
            await userEvent.click(SetNameBtu);

            await expect(
                canvas.getByText('Name is Tom, Parent Control "SetStateTest" is renderd 2 times')
            ).toBeInTheDocument();

            await expect(
                canvas.getByText('Hello: Tom, Name was rendered 2 times')
            ).toBeInTheDocument();
        });
    }
}