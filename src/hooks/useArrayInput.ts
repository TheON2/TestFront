import React, { useState } from 'react';

const useArrayInput = (
    initialValue: string[],
    maxLen: number
): [
    string[],
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => void,
    (newValue: string[]) => void,
    () => void,
    () => void,
    (index: number) => void
] => {
    const [value, setValue] = useState(initialValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        let newArr = [...value]; // copying the old array
        newArr[index] = e.target.value;
        setValue(newArr);
    };

    const addField = () => {
        if (value.length < maxLen) {
            setValue([...value, '']);
        } else {
            console.log('Cannot add more fields');
        }
    };

    const removeLastField = () => {
        if (value.length > 1) {
            setValue(value.slice(0, -1));
        } else {
            console.log('Cannot remove more fields');
        }
    };

    const removeFieldAtIndex = (index: number) => {
        if (index >= 0 && index < value.length) {
            setValue([...value.slice(0, index), ...value.slice(index + 1)]);
        } else {
            console.log('Invalid index');
        }
    };

    return [value, onChange, setValue, addField, removeLastField, removeFieldAtIndex];
};

export default useArrayInput;
