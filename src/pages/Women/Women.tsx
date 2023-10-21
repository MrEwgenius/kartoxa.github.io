import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import styles from './Women.module.scss'
import Ranges from '../../components/Range/Ranges';
import RadioButton from '../../components/RadioButton/RadioButton';
import Button from '../../components/Button/Button';



const Women = () => {

    const [valuesAge, setValuesAge] = useState([10])
    const [valuesHeight, setValuesHeight] = useState([10])
    const handleAgeChange = (newAgeValue: number) => {
        setValuesAge([newAgeValue]);

    };
    const handleAgeChangeAge = (newAgeValue: number) => {
        setValuesHeight([newAgeValue]);

    };

    return (
        <div className={styles.containerMen} >

            <form>

                <div className={styles.row}>
                    {/* values это наше значение по track которое динамически меняется */}
                    <div className={styles.descrRow}>Возраст {valuesAge}</div>
                    <div className={styles.ranges}><Ranges value={valuesAge[0]} onChange={(newValue) => handleAgeChange(newValue)} /></div>
                </div>


                <div className={styles.row}>
                    <div className={styles.descrRow}>Рост(см){valuesHeight}</div>
                    <div className={styles.ranges}><Ranges value={valuesHeight[0]} onChange={(newValue) => handleAgeChangeAge(newValue)} /></div>
                </div>


                <div className={styles.row}>
                    <div className={styles.descrRow}>Цвет волос</div>
                    <select name="awd" className={styles.ranges}>
                        <option value="1">блондин(-ка)</option>
                        <option value="2">брюнет(-ка)</option>
                        <option value="3">рыжий(-ая)</option>
                        <option value="4">серые</option>
                    </select>
                </div>


                <div className={styles.row}>
                    <div className={styles.descrRow}>Стрижка</div>
                    <div className={styles.radioButtons}>
                        <RadioButton name='radio-button' id='radio1' text='длиные' />
                        <RadioButton name='radio-button' id='radio2' text='лысая' />
                        <RadioButton name='radio-button' id='radio3' text='короткие' />
                        <RadioButton name='radio-button' id='radio4' text='каре' />
                    </div>
                </div>


                <div className={styles.row}>
                    <div className={styles.descrRow}>Борода</div>
                    <div className={styles.radioButtonsBoroda}>
                        <RadioButton name='boroda' id='boroda1' text={<img src={require('../../img/beard.png')} alt='image' />} />
                        <RadioButton name='boroda' id='boroda2' text={<img src={require('../../img/beard.png')} alt='image' />} />
                        <RadioButton name='boroda' id='boroda3' text={<img src={require('../../img/beard.png')} alt='image' />} />
                        <RadioButton name='boroda' id='boroda4' text={<img src={require('../../img/beard.png')} alt='image' />} />
                    </div>
                </div>


                <div className={styles.row}>
                    <div className={styles.descrRow}>Телосложение</div>
                    <div className={styles.radioButtonsBoroda}>
                        <RadioButton name='body' id='body1' text={<img src={require('../../img/body-1.png')} alt='image' />} />
                        <RadioButton checked name='body' id='body2' text={<img src={require('../../img/body-1.png')} alt='image' />} />
                        <RadioButton name='body' id='body3' text={<img src={require('../../img/body-1.png')} alt='image' />} />
                        <RadioButton name='body' id='body4' text={<img src={require('../../img/body-1.png')} alt='image' />} />
                    </div>
                </div>
                <Button  title={'Рассчитать'} onClick={() => { }} />

            </form>






        </div>

    );
}

export default Women;