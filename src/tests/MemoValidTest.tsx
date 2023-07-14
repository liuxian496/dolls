import React, { useState } from 'react';
import { Name } from '../components/memo/name';
import { MemoName } from '../components/memo/memoName';

export const MemoValidTest = () => {
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