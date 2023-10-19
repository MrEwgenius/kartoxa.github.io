import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import styles from './Men.module.scss'
import Ranges from '../../components/Range/Ranges';



const Men = () => {

    const [values, setValues] = useState([10])
    const [out, setOut] = useState(0)
    const [valuesAge, setValuesAge] = useState([10])
    const handleAgeChange = (newAgeValue: number) => {
        setValues([newAgeValue]);

    };
    const handleAgeChangeAge = (newAgeValue: number) => {
        setValuesAge([newAgeValue]);

    };
    console.log(values);
    console.log(valuesAge);

    return (
        <div>
            <div> 
                {/* values это наше значение по track которое динамически меняется */}
                {values} 
                <Ranges  value={values[0]} onChange={(newValue) => handleAgeChange(newValue)} />
            </div>
            {/* <Ranges value={valuesAge[0]} onChange={(newValue) => handleAgeChangeAge(newValue)} /> */}
        </div>

    );
}

export default Men;