// @flow
import * as React from 'react';
import {Button} from "./Button";
import s from '../src/styles.module.css'
import imgBEL from '../src/images/belarus.webp'
import imgRUS from '../src/images/rus.webp'
import imgEUR from '../src/images/europe.webp'
import imgUSD from '../src/images/USA.webp'
import {useAppDispatch, useAppSelector} from "./store";
import {useCallback} from "react";
import {getCurrencyTC} from "./reducers/currency-reducer";




type CurrencyContainerButtonPropsType = {

};
const funUSD = () => {
    alert('USD')
}
const funEUR = () => {
    alert('EUR')
}
const funRUB = () => {
    alert('RUB')
}

// const result = useAppSelector( state => state.currency)
// const dispatch = useAppDispatch()
// const getCurrency = useCallback(function (CurrencyId: number) {
//     const thunk = getCurrencyTC(CurrencyId)
//     dispatch(thunk)
// }, [])

export const CurrencyContainerButton = (props: CurrencyContainerButtonPropsType) => {
    return (
        <div className={s.currencyContainerButton}>
            <Button image={imgUSD} title={'USD'} fun={funUSD}/>
            <Button image={imgEUR} title={'EUR'} fun={funEUR}/>
            <Button image={imgRUS} title={'RUB'} fun={funRUB}/>
        </div>
    );
};