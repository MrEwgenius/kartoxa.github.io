import React, { useState } from 'react';
import styles from './Women.module.scss'
import Ranges from '../../components/Range/Ranges';
import RadioButton from '../../components/RadioButton/RadioButton';
import Button from '../../components/Button/Button';
import { useDispatch } from 'react-redux';
import { updatePotatoSacks } from '../../redux/reducers/formSlice';
import { useNavigate } from 'react-router-dom';



const Women = () => {
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
    const handleEyesColorChange = (event: any) => {
        setFormData({
            ...formData,
            eyesColor: event.target.value,
        });
    }

    const handleboobsChange = (id: string) => {
        setFormData({
            ...formData,
            boobs: id,
        });
    };

    const handleBodyChange = (event: any) => {
        setFormData({
            ...formData,
            body: event.target.value,
        });
    };

    const [formData, setFormData] = useState({
        hairColor: 'блондинка', // Изначально пустые значения
        haircut: 'длиные',
        eyesColor: 'зелёный',
        boobs: 'boobs1',
        body: 'худая',
        valuesAge: 18,
        valuesHeight: 165,
    });



    function calculatePotatoesForAge(age: number) {
        // за каждый год прибавляем 2 мешка картошки
        // return age * 2;
        const basePotatoes = 100; // Базовое количество картошки
        const reductionRate = 2; // Скорость уменьшения

        return Math.max(basePotatoes - age * reductionRate, 0);
    }
    function calculatePotatoesForHeight(height: number) {
        // за каждый сантиметр прибавляем 0.5 мешка картошки
        return height * 0.5;
    }

    function calculatePotatoesForHairColor(color: string) {
        switch (color) {
            case "блондинка":
                return 5;
            case "брюнетка":
                return 10;
            case "рыжий":
                return 15;
            case "серые":
                return 11;
            case "русый":
                return 17;
            case "цветной":
                return 12;
            default:
                return 0;
        }
    }
    function calculatePotatoesForEyesColor(color: string) {
        switch (color) {
            case "зелёный":
                return 17;
            case "карий":
                return 5;
            case "голубой":
                return 15;
            case "серый":
                return 13;
            case "гетерохромия":
                return 25;
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
            case "каре":
                return 10;
            default:
                return 0;
        }
    }
    function calculatePotatoesForBoobs(boobs: string) {
        switch (boobs) {
            case "boobs1":
                return 8;
            case "boobs2":
                return 13;
            case "boobs3":
                return 10;
            case "boobs4":
                return 7;
            default:
                return 0;
        }
    }
    function calculatePotatoesForBody(boobs: string) {
        switch (boobs) {
            case "худая":
                return 10;
            case "обычная":
                return 13;
            case "спортивная":
                return 20;
            case "полная":
                return 5;
            case "толстая":
                return 2;
            default:
                return 0;
        }
    }


    const calculateAndUpdatePotatoSacks = () => {
        const potatoesForAge = calculatePotatoesForAge(formData.valuesAge);
        const potatoesForHeight = calculatePotatoesForHeight(formData.valuesHeight);
        const potatoesForHairColor = calculatePotatoesForHairColor(formData.hairColor);
        const potatoesForEyesColor = calculatePotatoesForEyesColor(formData.eyesColor);
        const potatoesForHaircut = calculatePotatoesForHaircut(formData.haircut);
        const potatoesForBoobs = calculatePotatoesForBoobs(formData.boobs);
        const potatoesForBody = calculatePotatoesForBody(formData.body);

        const potatoSacks =
            potatoesForAge +
            potatoesForHeight +
            potatoesForHairColor +
            potatoesForHaircut +
            potatoesForBoobs +
            potatoesForEyesColor +
            potatoesForBody;


        dispatch(updatePotatoSacks(potatoSacks));
    };
    const handleFormSubmit = (event: any) => {
        event.preventDefault();
        calculateAndUpdatePotatoSacks()

        console.log(formData);
        navigate('/results')

    };

    return (
        <div className={styles.containerWomen} >

            <form onSubmit={handleFormSubmit}>

                <div className={styles.row}>
                    {/* values это наше значение по track которое динамически меняется */}
                    <div className={styles.descrRow}>Возраст <span>{valuesAge}</span></div>
                    <div className={styles.ranges}>
                        <Ranges
                            min={14}
                            max={65}
                            value={valuesAge[0]}
                            onChange={(newValue) => handleAgeChange(newValue)}
                        />
                    </div>
                </div>


                <div className={styles.row}>
                    <div className={styles.descrRow}>Рост(см)<span>{valuesHeight}</span></div>
                    <div className={styles.ranges}><Ranges min={130} max={225} value={valuesHeight[0]} onChange={(newValue) => handleHeightChange(newValue)} /></div>
                </div>


                <div className={styles.row}>
                    <div className={styles.descrRow}>Цвет волос</div>
                    <select onChange={handleHairColorChange} name="awd" className={styles.select}>
                        <option value="блондинка">блондинка</option>
                        <option value="брюнетка">брюнетка</option>
                        <option value="рыжий">рыжий</option>
                        <option value="серые">серые</option>
                        <option value="русый">русый</option>
                        <option value="цветной">цветной</option>
                    </select>
                </div>


                <div className={styles.row}>
                    <div className={styles.descrRow}>Стрижка</div>
                    <div className={styles.radioButtons}>
                        <RadioButton checked onChange={handleHaircutChange} name='radio-button' id='длиные' text='длиные' />
                        <RadioButton onChange={handleHaircutChange} name='radio-button' id='лысая' text='лысая' />
                        <RadioButton onChange={handleHaircutChange} name='radio-button' id='короткие' text='короткие' />
                        <RadioButton onChange={handleHaircutChange} name='radio-button' id='каре' text='каре' />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.descrRow}>Цвет глаз</div>
                    <select onChange={handleEyesColorChange} name="Eyes" className={styles.select}>
                        <option value="зелёный">зелёный</option>
                        <option value="карий">карий</option>
                        <option value="голубой">голубой</option>
                        <option value="серый">серый</option>
                        <option value="гетерохромия">гетерохромия</option>
                    </select>
                </div>
                <div className={styles.row}>
                    <div className={styles.descrRow}>Размер груди</div>
                    <div className={styles.radioButtonsBoobs}>
                        <RadioButton checked onChange={handleboobsChange} name='boobs' id='boobs1' text={<img src={require('../../img/boobs-a.png')} alt='image' />} />
                        <RadioButton onChange={handleboobsChange} name='boobs' id='boobs2' text={<img src={require('../../img/boobs-b.png')} alt='image' />} />
                        <RadioButton onChange={handleboobsChange} name='boobs' id='boobs3' text={<img src={require('../../img/boobs-c.png')} alt='image' />} />
                        <RadioButton onChange={handleboobsChange} name='boobs' id='boobs4' text={<img src={require('../../img/boobs-d.png')} alt='image' />} />
                    </div>
                </div>


                <div className={styles.row}>
                    <div className={styles.descrRow}>Фигура</div>
                    <select onChange={handleBodyChange} name="body" className={styles.select}>
                        <option value="худая">худая</option>
                        <option value="обычная">обычная</option>
                        <option value="спортивная">спортивная</option>
                        <option value="полная">полная</option>
                        <option value="толстая">толстая</option>
                    </select>

                </div>

                <Button title={'Рассчитать'} />

            </form>

        </div>

    );
}

export default Women;