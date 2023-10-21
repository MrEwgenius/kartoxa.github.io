import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import styles from './Men.module.scss'
import Ranges from '../../components/Range/Ranges';
import RadioButton from '../../components/RadioButton/RadioButton';
import Button from '../../components/Button/Button';



const Men = () => {

    const [valuesAge, setValuesAge] = useState([10])
    const [valuesHeight, setValuesHeight] = useState([10])
    const handleAgeChange = (newAgeValue: number) => {
        setFormData({
            ...formData,
            valuesAge: newAgeValue,
        });
        setValuesAge([newAgeValue]);

    };
    const handleHeightChange = (newAgeValue: number) => {
        setFormData({
            ...formData,
            valuesHeight: newAgeValue,
        });
        setValuesHeight([newAgeValue]);


    };


    const [formData, setFormData] = useState({
        hairColor: '', // Изначально пустые значения
        haircut: '',
        beard: '',
        body: '',
        valuesAge: 10,
        valuesHeight: 10
    });
    const handleHaircutChange = (id: string) => {
        setFormData({
            ...formData,
            haircut: id,
        });
    };
    const handleHairColorChange = (event: any) => {
        setFormData({
            ...formData,
            hairColor: event.target.value,
        });
    }
    const handleBeardChange = (id: string) => {
        setFormData({
            ...formData,
            beard: id,
        });
    };
    const handleBodyChange = (id: string) => {
        setFormData({
            ...formData,
            body: id,
        });
    };

    const handleFormSubmit = (event: any) => {
        event.preventDefault();

        // Все данные формы хранятся в formData
        console.log(formData);
        // Отправка данных, обработка и дальнейшие действия
    };
    return (
        <div className={styles.containerMen} >

            <form onSubmit={handleFormSubmit}>

                <div className={styles.row}>
                    {/* values это наше значение по track которое динамически меняется */}
                    <div className={styles.descrRow}>Возраст {valuesAge}</div>
                    <div className={styles.ranges}><Ranges value={valuesAge[0]} onChange={(newValue) => handleAgeChange(newValue)} /></div>
                </div>


                <div className={styles.row}>
                    <div className={styles.descrRow}>Рост(см){valuesHeight}</div>
                    <div className={styles.ranges}><Ranges value={valuesHeight[0]} onChange={(newValue) => handleHeightChange(newValue)} /></div>
                </div>


                <div className={styles.row}>
                    <div className={styles.descrRow}>Цвет волос</div>
                    <select onChange={handleHairColorChange}  name="awd" className={styles.ranges}>
                        <option value="1">блондин(-ка)</option>
                        <option value="2">брюнет(-ка)</option>
                        <option value="3">рыжий(-ая)</option>
                        <option value="4">серые</option>
                    </select>
                </div>


                <div className={styles.row}>
                    <div className={styles.descrRow}>Стрижка</div>
                    <div className={styles.radioButtons}>
                        <RadioButton onChange={handleHaircutChange} name='radio-button' id='haircut1' text='длиные' />
                        <RadioButton onChange={handleHaircutChange} name='radio-button' id='haircut2' text='лысая' />
                        <RadioButton onChange={handleHaircutChange} name='radio-button' id='haircut3' text='короткие' />
                        <RadioButton onChange={handleHaircutChange} name='radio-button' id='haircut4' text='каре' />
                    </div>
                </div>


                <div className={styles.row}>
                    <div className={styles.descrRow}>Борода</div>
                    <div className={styles.radioButtonsBoroda}>
                        <RadioButton onChange={handleBeardChange} name='boroda' id='boroda1' text={<img src={require('../../img/beard.png')} alt='image' />} />
                        <RadioButton onChange={handleBeardChange} name='boroda' id='boroda2' text={<img src={require('../../img/beard.png')} alt='image' />} />
                        <RadioButton onChange={handleBeardChange} name='boroda' id='boroda3' text={<img src={require('../../img/beard.png')} alt='image' />} />
                        <RadioButton onChange={handleBeardChange} name='boroda' id='boroda4' text={<img src={require('../../img/beard.png')} alt='image' />} />
                    </div>
                </div>


                <div className={styles.row}>
                    <div className={styles.descrRow}>Телосложение</div>
                    <div className={styles.radioButtonsBoroda}>
                        <RadioButton onChange={handleBodyChange} name='body' id='body1' text={<img src={require('../../img/body-1.png')} alt='image' />} />
                        <RadioButton onChange={handleBodyChange} checked name='body' id='body2' text={<img src={require('../../img/body-1.png')} alt='image' />} />
                        <RadioButton onChange={handleBodyChange} name='body' id='body3' text={<img src={require('../../img/body-1.png')} alt='image' />} />
                        <RadioButton onChange={handleBodyChange} name='body' id='body4' text={<img src={require('../../img/body-1.png')} alt='image' />} />
                    </div>
                </div>
                <Button title={'Рассчитать'} onClick={() => { }} />

            </form>






        </div>

    );
}

export default Men;