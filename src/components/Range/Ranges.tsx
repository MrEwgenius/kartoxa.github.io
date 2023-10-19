import React, { useState, FC } from 'react';
import { Range, getTrackBackground } from 'react-range';
import styles from './Ranges.module.scss'

type RangesProps = {
    value: number; // Принимаем значение как пропс
    onChange: (newValues: number) => void; // Принимаем функцию обратного вызова как пропс
};

const Ranges: FC<RangesProps> = ({
    value,
    onChange
}
) => {
    // const [values, setValues] = useState([value])

    return (
        <div>
            <Range
                step={1}
                min={0}
                max={100}
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
            {/* <output className={styles.output}>
                {out}
            </output> */}
        </div>

    );
}

export default Ranges;
