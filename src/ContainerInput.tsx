// @flow
import * as React from 'react';
import {UniversalInput} from "./UniversalInput";
import imgBEL from '../src/images/belarus.webp'
import imgUSD from '../src/images/USA.webp'
import {useAppSelector} from "./store";
import {useEffect, useState} from "react";

type ContainerInputPropsType = {};
export const ContainerInput = (props: ContainerInputPropsType) => {
    const usd = useAppSelector(state => state.USD);
    const eur = useAppSelector(state => state.EUR);
    const rub = useAppSelector(state => state.RUB);

    const [universalRate, setUniversalRate] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setUniversalRate(value);
    };

    const funUSD = (value: string) => {
        if(usd !== null) {
            return +value * usd
        }
    }
    const funEUR = (value: string) => {
        if(eur !== null) {
            return +value * eur
        }
    }
    const funRUB = (value: string) => {
        if(rub !== null) {
            return +value * rub / 100
        }
    }
    console.log(universalRate)

    return (
        <div>
            <UniversalInput image={imgUSD} title={'USD'} value={universalRate} onChange={handleInputChange}/>
            <UniversalInput image={imgBEL} title={'BEL'} value={universalRate? String(funUSD(universalRate)) : ''} onChange={handleInputChange}/>
        </div>
    );
};