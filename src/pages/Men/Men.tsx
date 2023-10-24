import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import styles from './Men.module.scss'
import Ranges from '../../components/Range/Ranges';
import RadioButton from '../../components/RadioButton/RadioButton';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updatePotatoSacks } from '../../redux/reducers/formSlice';



const Men = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [valuesAge, setValuesAge] = useState([18])
    const [valuesHeight, setValuesHeight] = useState([165])

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
    const [formData, setFormData] = useState({
        hairColor: 'блондин', // Изначально пустые значения
        haircut: 'короткие',
        beard: 'beard1',
        body: 'body1',
        valuesAge: 18,
        valuesHeight: 172,
    });


    //Считаем сколько мешков картошки мы стоим

    function calculatePotatoesForAge(age: number) {
        // Пример формулы: за каждый год прибавляем 2 мешка картошки
        return age * 2;
    }
    function calculatePotatoesForHeight(height: number) {
        // Пример формулы: за каждый сантиметр прибавляем 0.5 мешка картошки
        return height * 0.5;
    }

    function calculatePotatoesForHairColor(color: string) {
        switch (color) {
            case "блондин":
                return 5;
            case "брюнет":
                return 10;
            case "рыжий":
                return 15;
            case "серые":
                return 7;
            case "русый":
                return 12;
            default:
                return 0;
        }
    }
    function calculatePotatoesForHaircut(haircut: string) {
        switch (haircut) {
            case "длиные":
                return 15;
            case "лысая":
                return 2;
            case "короткие":
                return 5;
            case "полубокс":
                return 8;
            default:
                return 0;
        }
    }
    function calculatePotatoesForBoobs(beard: string) {
        switch (beard) {
            case "beard1":
                return 3;
            case "beard2":
                return 10;
            case "beard3":
                return 15;
            case "beard4":
                return 8;
            default:
                return 0;
        }
    }
    function calculatePotatoesForBody(body: string) {
        switch (body) {
            case "body1":
                return 10;
            case "body2":
                return 15;
            case "body3":
                return 20;
            case "body4":
                return 5;
            default:
                return 0;
        }
    }

    const calculateAndUpdatePotatoSacks = () => {
        const potatoesForAge = calculatePotatoesForAge(formData.valuesAge);
        const potatoesForHeight = calculatePotatoesForHeight(formData.valuesHeight);
        const potatoesForHairColor = calculatePotatoesForHairColor(formData.hairColor);
        const potatoesForHaircut = calculatePotatoesForHaircut(formData.haircut);
        const potatoesForBoobs = calculatePotatoesForBoobs(formData.beard);
        const potatoesForBody = calculatePotatoesForBody(formData.body);

        const PotatoSacks =
            potatoesForAge +
            potatoesForHeight +
            potatoesForHairColor +
            potatoesForHaircut +
            potatoesForBoobs +
            potatoesForBody;

        console.log(PotatoSacks);

        dispatch(updatePotatoSacks(PotatoSacks));
    };
    
    const handleFormSubmit = (event: any) => {
        event.preventDefault();
        calculateAndUpdatePotatoSacks()

        console.log(formData);
        navigate('/results')

    };
    return (
        <div className={styles.containerMen} >

            <form onSubmit={handleFormSubmit}>

                <div className={styles.row}>
                    {/* values это наше значение по track которое динамически меняется */}
                    <div className={styles.descrRow}>Возраст <span>{valuesAge}</span></div>
                    <div className={styles.ranges}><Ranges min={14} max={65} value={valuesAge[0]} onChange={(newValue) => handleAgeChange(newValue)} /></div>
                </div>


                <div className={styles.row}>
                    <div className={styles.descrRow}>Рост(см)<span>{valuesHeight}</span></div>
                    <div className={styles.ranges}><Ranges min={130} max={225} value={valuesHeight[0]} onChange={(newValue) => handleHeightChange(newValue)} /></div>
                </div>


                <div className={styles.row}>
                    <div className={styles.descrRow}>Цвет волос</div>
                    <select onChange={handleHairColorChange} name="awd" className={styles.select}>
                        <option value="блондин">блондин</option>
                        <option value="брюнет">брюнет</option>
                        <option value="рыжий">рыжий</option>
                        <option value="серые">серые</option>
                        <option value="русый">русый</option>
                    </select>
                </div>


                <div className={styles.row}>
                    <div className={styles.descrRow}>Стрижка</div>
                    <div className={styles.radioButtons}>
                        <RadioButton onChange={handleHaircutChange} name='radio-button' id='длиные' text='длиные' />
                        <RadioButton onChange={handleHaircutChange} name='radio-button' id='лысая' text='лысый' />
                        <RadioButton checked onChange={handleHaircutChange} name='radio-button' id='короткие' text='короткие' />
                        <RadioButton onChange={handleHaircutChange} name='radio-button' id='полубокс' text='полубокс' />
                    </div>
                </div>


                <div className={styles.row}>
                    <div className={styles.descrRow}>Борода</div>
                    <div className={styles.radioButtonsBoroda}>
                        <RadioButton checked onChange={handleBeardChange} name='beard' id='beard1' text={<img src={require('../../img/beard.png')} alt='image' />} />
                        <RadioButton onChange={handleBeardChange} name='beard' id='beard2' text={<img src={require('../../img/beard.png')} alt='image' />} />
                        <RadioButton onChange={handleBeardChange} name='beard' id='beard3' text={<img src={require('../../img/beard.png')} alt='image' />} />
                        <RadioButton onChange={handleBeardChange} name='beard' id='beard4' text={<img src={require('../../img/beard.png')} alt='image' />} />
                    </div>
                </div>


                <div className={styles.row}>
                    <div className={styles.descrRow}>Телосложение</div>
                    <div className={styles.radioButtonsBoroda}>
                        <RadioButton checked onChange={handleBodyChange} name='body' id='body1' text={<img src={require('../../img/body-1.png')} alt='image' />} />
                        <RadioButton onChange={handleBodyChange} name='body' id='body2' text={<img src={require('../../img/body-1.png')} alt='image' />} />
                        <RadioButton onChange={handleBodyChange} name='body' id='body3' text={<img src={require('../../img/body-1.png')} alt='image' />} />
                        <RadioButton onChange={handleBodyChange} name='body' id='body4' text={<img src={require('../../img/body-1.png')} alt='image' />} />
                    </div>
                </div>
                <Button title={'Рассчитать'} />

            </form>
        </div>

    );
}

export default Men;