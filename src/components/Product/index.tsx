// import { useState } from "react";
import './product.css';

import { useState } from "react"
import { Tiles } from ".."
import { getCategories } from "../../helpers/functions"
import { catFurnType } from "../../helpers/objects"

interface ITile {
    isOpen: boolean
    products: string[]
    title?: string
    onClick(e: string, i: number): Function | void
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


