import React, { useState, FC } from 'react';
import { Range, getTrackBackground } from 'react-range';
import styles from './Ranges.module.scss'

type RangesProps = {
    value: number; // Принимаем значение как пропс
    onChange: (newValues: number) => void; // Принимаем функцию обратного вызова как пропс
    min?: number,
    max?: number,
};

const Ranges: FC<RangesProps> = ({
    value,
    onChange,
    min,
    max
}
) => {

    return (
        <div>
            <Range
                step={1}
                min={min}
                max={max}
                values={[value]}
                onChange={(newValues) => onChange(newValues[0])}
                renderTrack={({ props, children }) => (
                    <div
                        className={styles.track}
                        {...props}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}

                        className={styles.thumb}

                    />
                )}
            />
        </div>

    );
}

export default Ranges;
