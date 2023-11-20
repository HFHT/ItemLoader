// import { useState } from "react";
import './product.css';

import { useState } from "react"
import { Tiles, TilesMulti } from ".."

interface ITile {
    isOpen: boolean
    products: string[]
    chosen?: Iprods
    hasCustom?: string
    title?: string
    onClick(e: string, i: number, v: number): Function | void

}
interface ITiles extends ITile {
    onClear(e: string): Function | void
}

export const Product = ({ isOpen, products, onClick, hasCustom = '', title }: ITile) => {
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
                    <Tiles tiles={products} selected={selected} hasCustom={hasCustom} onClick={(e: any, i: any) => handleClick(e, i)} />

                </div>
            }
        </>
    );

}

export const Products = ({ isOpen, products, chosen, onClick, onClear, hasCustom = '', title }: ITiles) => {
    const handleClick = (e: string, id: number, b: number) => {
        onClick(e, id, b)
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
                    <TilesMulti tiles={products} selected={0} chosen={chosen} hasCustom={hasCustom} onClick={(e: any, i: any, b: number) => handleClick(e, i, b)} onClear={(e: any) => handleClear(e)} />
                </div>
            }
        </>
    );

}
