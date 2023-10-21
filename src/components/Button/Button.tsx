import React, { FC, ReactElement } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss'



type ButtonProps = {
    title: string | ReactElement,
    onClick: () => void,
    disabled?: boolean,
    className?: string
}


const Button: FC<ButtonProps> = ({
    title,
    onClick,
    className,
}) => {


    return (
        <button type='submit'
            className={classNames(className, (styles.button))}
            onClick={onClick}
        >
            {title}
        </button>
    );
}

export default Button;