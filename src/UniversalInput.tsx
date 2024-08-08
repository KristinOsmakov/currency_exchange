// @flow
import * as React from 'react';
import s from '../src/styles.module.css'
import imgBEL from '../src/images/belarus.webp'
import {useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useAppDispatch, useAppSelector} from "./store";
import {getCurrencyTC} from "./reducers/currency-reducer";

type TitleType = 'USD' | 'EUR' | 'RUB' | 'BEL'
type UniversalInputPropsType = {
    title: TitleType,
    image: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,

};
export const UniversalInput = ({ title, image, onChange, value }: UniversalInputPropsType) => {

    return (
        <div>
            <img className={s.img} src={image} alt={title}/>
            <input src={imgBEL} type={"number"} className={s.input} value={value} onChange={onChange}/>
        </div>
    );
};