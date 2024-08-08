// @flow
import * as React from 'react';
import {UniversalInput} from "./UniversalInput";
import imgBEL from '../src/images/belarus.webp'
import imgUSD from '../src/images/USA.webp'
import imgEUR from '../src/images/europe.webp'
import imgRUB from '../src/images/rus.webp'
import {useAppSelector} from "./store";
import {useEffect, useState} from "react";

type ContainerInputPropsType = {};
export const ContainerInput = (props: ContainerInputPropsType) => {
    const usd = useAppSelector(state => state.USD);
    const eur = useAppSelector(state => state.EUR);
    const rub = useAppSelector(state => state.RUB);

    const input = useAppSelector(state => state.inputRed)
    console.log(input)

    const [universalRate, setUniversalRate] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setUniversalRate(value);
    };

    const image = () => {
        switch (input) {
            case 'USD':
                return imgUSD
            case 'EUR':
                return imgEUR
            case 'RUB':
                return imgRUB
            default: return imgUSD
        }
    }

    const funChangeGeneral = (rate: number | null, del: number = 1) => {
        return rate === null ? '' : +universalRate * rate / del
    }
    const funChange = (input: string) => {
        switch (input) {
            case 'USD':
                return funChangeGeneral(usd);
            case 'EUR':
                return funChangeGeneral(eur);
            case 'RUB':
                return funChangeGeneral(rub, 100);
            default: return funChangeGeneral(usd);
        }
    }

    return (
        <div>
            <UniversalInput image={image()} title={'USD'} value={universalRate} onChange={handleInputChange}/>
            <UniversalInput image={imgBEL} title={'BEL'} value={funChange(input).toString()} onChange={handleInputChange}/>
        </div>
    );
};