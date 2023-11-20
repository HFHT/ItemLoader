// import { useState } from "react";
import { backgroundImage } from 'html2canvas/dist/types/css/property-descriptors/background-image';
import './finishpick.css';
import { finishes, spectrum, whites } from './finishpickconst';

interface ITile {
    selected?: number
    isOpen: boolean
    onClick(e: string, i: number): Function | void
}

export const FinishPick = ({ onClick, isOpen, selected = -1 }: ITile) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        onClick(e.currentTarget.name, id)
    }
    return (
        <>
            {isOpen &&
                <>
                    <div className="colorpickGroup">
                        {finishes.map((theColor: Iidx, i) => (
                            <button key={i} name={Object.keys(theColor)[0]} title={Object.keys(theColor)[0]} style={{ backgroundImage: `url("${import.meta.env.VITE_STORAGEIMAGEURL}${theColor[Object.keys(theColor)[0]]}")` }} onClick={(e) => handleClick(e, i)} className={(selected === i) ? "tileButton tileactive" : "tileButton"}>
                                {Object.keys(theColor)[0]}
                            </button>
                        ))}
                    </div>
                </>
            }
        </>
    );

}


