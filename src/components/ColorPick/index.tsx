// import { useState } from "react";
import './colorpick.css';
import { spectrum, whites } from './colorpickconst';

interface ITile {
    selected?: number
    isOpen: boolean
    onClick(e: string, i: number): Function | void
}

export const ColorPick = ({ onClick, isOpen, selected = -1 }: ITile) => {
    // console.log('Tiles', selected)
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        onClick(e.currentTarget.name, id)
    }
    return (
        <>
            {isOpen &&
                <>
                    <div className="colorpickGroup">
                        {spectrum.map((theColor: Iidx, i) => (
                            <button key={i} name={Object.keys(theColor)[0]} title={Object.keys(theColor)[0]} style={{ backgroundColor: theColor[Object.keys(theColor)[0]] }} onClick={(e) => handleClick(e, i)} className={(selected === i) ? "tileButton tileactive" : "tileButton"}>
                                {'-'}
                            </button>
                        ))}
                    </div>
                    <div className="colorpickGroup">
                        {whites.map((theColor: Iidx, i) => (
                            <button key={i} name={Object.keys(theColor)[0]} title={Object.keys(theColor)[0]} style={{ backgroundColor: theColor[Object.keys(theColor)[0]] }} onClick={(e) => handleClick(e, i)} className={(selected === i) ? "tileButton tileactive" : "tileButton"}>
                                {'-'}
                            </button>
                        ))}
                    </div>
                </>
            }
        </>
    );

}


