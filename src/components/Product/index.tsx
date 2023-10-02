// import { useState } from "react";
import './product.css';

import { useState } from "react"
import { Tiles, TilesMulti } from ".."

interface ITile {
    isOpen: boolean
    products: string[]
    chosen?: Iprods
    title?: string
    onClick(e: string, i: number, v: number): Function | void

}
interface ITiles extends ITile {
    onClear(e: string): Function | void
}

export const Product = ({ isOpen, products, onClick, title }: ITile) => {
    const [selected, setSelected] = useState(-1)
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        // console.log(e, id, products)
        setSelected(id)
        //@ts-ignore
        onClick(e, id)
    }
    return (
        <>
            {isOpen && products &&
                <div className="prodtop">
                    {/* {title} */}
                    <Tiles tiles={products} selected={selected} onClick={(e: any, i: any) => handleClick(e, i)} />

                </div>
            }
        </>
    );

}

export const Products = ({ isOpen, products, chosen, onClick, onClear, title }: ITiles) => {
    const handleClick = (e: string, id: number) => {
        //@ts-ignore
        onClick(e, id, 1)
    }
    const handleClear = (e: string) => {
        console.log('Products-handleClear')
        onClear(e)
    }
    return (
        <>
            {isOpen && products &&
                <div className="prodtop">
                    {/* {title} */}
                    <TilesMulti tiles={products} selected={0} chosen={chosen} onClick={(e: any, i: any) => handleClick(e, i)} onClear={(e: any) => handleClear(e)}/>
                </div>
            }
        </>
    );

}
