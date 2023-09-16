import './inputtouchspin.css';

import { Input } from '../Input'

interface ITouch {
    value: string | number;
    setter: Function;
    disabled?: boolean;
    min?: number;
    title?: string;
    classes?: string;
}


export function InputTouchSpin({value, setter, disabled=false, min=1, title='', classes=''}:ITouch) {
    return (
        <div className="touchspin">
            <button type="button" disabled={disabled} className='touchspin-left' onClick={()=> Number(value)>1 && setter(Number(value)-1)}>-</button>
            <Input  type='number' value={value} size={4} inputMode="numeric" disabled={disabled} min={min} title={title ? title : ''} classes={`touchspin-input ${classes}`} onChange={(e: number) => setter(Number(e))} />
            <button type="button" disabled={disabled} className='touchspin-right' onClick={()=>setter(Number(value)+1)}>+</button>
        </div>)
}

