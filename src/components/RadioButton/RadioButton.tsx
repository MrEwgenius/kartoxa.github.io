import React, { ChangeEvent, FC, ReactElement, ReactNode } from 'react';

import styles from './RadioButton.module.scss'

type RadioButtonProps = {
    id: string,
    name: string,
    text: string | ReactElement,
    checked?: boolean,
    onChange?: (value: string) => void,

}

const RadioButton: FC<RadioButtonProps> = ({
    id, text, name, checked, onChange
}) => {

    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        // const selectedId = event.target.id;
        onChange?.(event.target.id);
    };
    return (
        <div>

            <input onChange={handleRadioChange} defaultChecked={checked} type="radio" id={id} name={name} />
            <label className={styles.label} htmlFor={id}>{text}</label>
        </div>
    );
}

export default RadioButton;