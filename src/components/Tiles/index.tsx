// import { useState } from "react";
import { Badge } from '../Badge';
import './tiles.css';

interface ITile {
    tiles: string[]
    selected?: number
    chosen?: Iprods
    onClick(e: string, i: number): Function | void
}

export const Tiles = ({ tiles, onClick, selected = -1 }: ITile) => {
    // const [isSelected, setIsSelected] = useState(-1);
    console.log('Tiles', tiles, selected)
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        // setIsSelected(id);
        onClick(e.currentTarget.name, id)
    }
    if (!tiles) alert('Undefined Tile')
    return (
        <div className="tileGroup">
            {tiles && tiles.map((tileLabel, i) => (
                <button key={i} name={tileLabel} onClick={(e) => handleClick(e, i)} className={(selected === i) ? "tileButton tileactive" : "tileButton"}>
                    {tileLabel === ' ' ? '---' : tileLabel}
                </button>
            ))}
        </div>
    );

}

export const TilesMulti = ({ tiles, chosen, onClick, selected }: ITile) => {
    // const [isSelected, setIsSelected] = useState(-1);
    console.log('Tiles', tiles, selected)
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        // setIsSelected(id);
        onClick(e.currentTarget.name, id)
    }
    function isSelected(l: string) {
        let found = false
        chosen?.forEach((x) => {
            console.log(x.prod, l)
            if (x.prod === l) { found = true }
        })
        return found
    }
    function isSelectedQty(l: string) {
        let qty = -1
        chosen?.forEach((x) => {
            console.log(x.prod, l)
            if (x.prod === l) { qty = x.qty }
        })
        return qty > 0 ? qty : ''
    }
    if (!tiles) alert('Undefined Tile')
    return (
        <div className="tileGroup">
            {tiles && tiles.map((tileLabel, i) => (
                <div key={i}>
                    <button name={tileLabel} onClick={(e) => handleClick(e, i)} className={(isSelected(tileLabel)) ? "tileButton tileactive" : "tileButton"}>
                        {tileLabel === ' ' ? '---' : tileLabel}
                    </button>
                    <span className={`${isSelectedQty(tileLabel) && 'tileqty'}`}>{isSelectedQty(tileLabel)}</span>
                </div>
            ))}
        </div>
    );

}
