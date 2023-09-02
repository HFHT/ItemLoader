// import { useState } from "react";

interface ITile {
    tiles: string[]
    selected?: number
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
                <button key={i} name={tileLabel} onClick={(e) => handleClick(e, i)} className={(selected === i) ? "customButton active" : "customButton"}>
                    {tileLabel}
                </button>
            ))}
        </div>
    );

}


