// import { useState } from "react";
import './product.css';

import { useState } from "react"
import { Tiles, TilesMulti } from ".."
import { getCategories } from "../../helpers/functions"
import { catFurnType } from "../../helpers/objects"

interface ITile {
    isOpen: boolean
    products: string[]
    chosen?: Iprods
    title?: string
    onClick(e: string, i: number, v: number): Function | void
}

export const Product = ({ isOpen, products, onClick, title }: ITile) => {
    const [selected, setSelected] = useState(-1)
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        console.log(e, id, products)
        setSelected(id)
        //@ts-ignore
        onClick(e, id)
    }
    return (
        <>
            {isOpen && products &&
                <div className="prodtop">
                    {title}
                    <Tiles tiles={products} selected={selected} onClick={(e: any, i: any) => handleClick(e, i)} />

                </div>
            }
        </>
    );

}

export const Products = ({ isOpen, products, chosen, onClick, title }: ITile) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        console.log(e, id, chosen, products)
        // setSelected(id)
        //@ts-ignore
        onClick(e, id, 1)
    }
    return (
        <>
            {isOpen && products &&
                <div className="prodtop">
                    {title}
                    <TilesMulti tiles={products} selected={0} chosen={chosen} onClick={(e: any, i: any) => handleClick(e, i)} />

                </div>
            }
        </>
    );

}
