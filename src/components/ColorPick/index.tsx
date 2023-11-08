// import { useState } from "react";
import { backgroundImage } from 'html2canvas/dist/types/css/property-descriptors/background-image';
import './colorpick.css';
import { newColors, spectrum, whites } from './colorpickconst';

interface ITile {
    selected?: number
    isOpen: boolean
    onClick(e: string, i: number): Function | void
}

export const ColorPick = ({ onClick, isOpen, selected = -1 }: ITile) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        onClick(e.currentTarget.name, id)
    }
    return (
        <>
            {isOpen &&
                <>
                    <div className="colorpickGroup">
                        {newColors.map((theColor: Iidx, i) => (
                            <button key={i} name={Object.keys(theColor)[0]} title={Object.keys(theColor)[0]} style={{ backgroundColor: theColor[Object.keys(theColor)[0]] }} onClick={(e) => handleClick(e, i)} className={(selected === i) ? "tileButton tileactive" : "tileButton"}>
                                {'-'}
                            </button>
                        ))}
                        <button name='Multi Color' title='Multi Color' onClick={(e) => handleClick(e, newColors.length)} className={(selected === newColors.length) ? "tileButton colorgradient tileactive" : "tileButton colorgradient"}>
                            {'-'}
                        </button>
                    </div>
                </>
            }
        </>
    );

}


