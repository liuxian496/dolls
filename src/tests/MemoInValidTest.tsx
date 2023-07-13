import React, { useState } from 'react';
import { MemoPerson } from '../components/memo/memoPerson';
import { Name } from '../components/memo/name';
import { MemoAge } from '../components/memo/memoAge';

export const MemoInValidTest = () => {
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