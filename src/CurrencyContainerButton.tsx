// @flow
import * as React from 'react';
import {Button} from "./Button";
import s from '../src/styles.module.css'
import imgBEL from '../src/images/belarus.webp'
import imgRUS from '../src/images/rus.webp'
import imgEUR from '../src/images/europe.webp'
import imgUSD from '../src/images/USA.webp'
import {useAppDispatch, useAppSelector} from "./store";
import {useCallback, useEffect, useState} from "react";
import {getCurrencyTC} from "./reducers/currency-reducer";


type CurrencyContainerButtonPropsType = {};

export const CurrencyContainerButton = (props: CurrencyContainerButtonPropsType) => {
    const dispatch = useAppDispatch()
    const currencyArray = useAppSelector( state => state.currency)



    useEffect(() => {
        dispatch(getCurrencyTC());
    }, [dispatch]);
    const funUSD = useCallback(() => {
        const alertUSD = currencyArray.find(cur => (
            cur.Cur_ID === 431))
        if(alertUSD) {
            alert(`USD: ${alertUSD.Cur_OfficialRate}`);
        }
    }, [currencyArray]);

    const funEUR = useCallback(() => {
        const alertEUR = currencyArray.find(cur => (
            cur.Cur_ID === 451))
        if(alertEUR) {
            alert(`EUR: ${alertEUR.Cur_OfficialRate}`);
        }
    }, [currencyArray]);

    const funRUB = useCallback(() => {
        const alertRUB = currencyArray.find(cur => (
            cur.Cur_ID === 456))
        if(alertRUB) {
            alert(`RUB: ${alertRUB.Cur_OfficialRate}`)
        }
        alert("RUB");
    }, [currencyArray]);

    return (
        <div className={s.currencyContainerButton}>
            <Button image={imgUSD} title={'USD'} fun={funUSD}/>
            <Button image={imgEUR} title={'EUR'} fun={funEUR}/>
            <Button image={imgRUS} title={'RUB'} fun={funRUB}/>
        </div>
    );
};
