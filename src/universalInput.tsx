// @flow
import * as React from 'react';
import s from '../src/styles.module.css'
import imgBEL from '../src/images/belarus.webp'

type TitleType = 'USD' | 'EUR' | 'RUB' | 'BEL'
type UniversalInputPropsType = {
    title: TitleType,
    image: string,
};
export const UniversalInput = ({title, image}: UniversalInputPropsType) => {
    return (
        <div>
            <img className={s.img} src={image} alt={title}/>
            <input src={imgBEL} type={"number"} className={s.input}/>
        </div>
    );
};