import React, { useState, memo, useRef } from 'react';

import { expect } from '@storybook/jest';
import { fireEvent, userEvent, within } from '@storybook/testing-library';
import { Meta, StoryObj } from '@storybook/react';


export default {
    title: 'Example/Memo',
} as Meta;

type Story = StoryObj;


const Name = (props: {
    name: string
}) => {
    const { name } = props;
    const renderCount = useRef(0);
    renderCount.current = renderCount.current + 1;

    console.log(`%c Name was rendered at ${new Date().toLocaleTimeString()}`, 'color: #6F8AB7');

    return (
        <div>
            {`Hello: ${name}, Name was rendered ${renderCount.current} times`}
        </div>
    )
};

const MemoName = memo(function MemoName(props: {
    name: string
}) {
    const { name } = props;
    const renderCount = useRef(0);
    renderCount.current++;

    console.log(`%c MemoName was rendered at ${new Date().toLocaleTimeString()}`, 'color: #E85F5C');

    return (
        <div>
            {`Hello: ${name}, MemoName was rendered ${renderCount.current} times`}
        </div>
    )
});

const MemoAge = memo(function MemoMessage(props: {
    age: string
}) {
    const { age } = props;
    const renderCount = useRef(0);
    renderCount.current++;

    console.log(`%c MemoAge was rendered at ${new Date().toLocaleTimeString()}`, 'color: #EEEBD3');

    return (
        <div>
            {`Age is ${age}, MemoAge was rendered ${renderCount.current} times`}
        </div>
    )
});

const MemoPerson = memo(function MemoPerson(props: any) {
    const { children, id } = props;
    const renderCount = useRef(0);
    renderCount.current++;

    console.log(`%c MemoPerson ${id} was rendered at ${new Date().toLocaleTimeString()}`, 'color: #E85F5C');

    return (
        <div>
            {`MemoPerson ${id} was rendered ${renderCount.current} times`}
            {children}
        </div>
    )
});

const TestMemoValid = () => {
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
}

export const MemoValid: Story = {
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    render: () => <TestMemoValid />,
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

const TestMemoInValid = () => {
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
}


export const MemoInvalid: Story = {
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    render: () => <TestMemoInValid />,
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