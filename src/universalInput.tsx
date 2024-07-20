// @flow
import * as React from 'react';
import s from '../src/styles.module.css'

type Props = {

};
export const UniversalInput = (props: Props) => {
    return (
        <div>
            <input className={s.input}/>
        </div>
    );
};