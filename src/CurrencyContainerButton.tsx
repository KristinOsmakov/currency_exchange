// @flow
import * as React from 'react';
import {Button} from "./Button";
import s from '../src/styles.module.css'
import imgBEL from '../src/images/belarus.webp'
import imgRUS from '../src/images/rus.webp'
import imgEUR from '../src/images/europe.webp'
import imgUSD from '../src/images/USA.webp'
import {useState} from "react";
import {useAppDispatch} from "./store";
import {getInputAC} from "./reducers/inputReducer";




export const CurrencyContainerButton = () => {
    const dispatch = useAppDispatch()


    const fuu = (title: string) => {
        dispatch(getInputAC(title))
    }


    return (
        <div className={s.currencyContainerButton}>
            <Button image={imgUSD} title={'USD'} fun={fuu}/>
            <Button image={imgEUR} title={'EUR'} fun={fuu}/>
            <Button image={imgRUS} title={'RUB'} fun={fuu}/>
        </div>
    );
};
