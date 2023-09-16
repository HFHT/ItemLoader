// import { useState } from "react";

import { Tiles } from ".."
import { getCategories } from "../../helpers/functions"
import { catApplType } from "../../helpers/objects"

interface ITile {
    isOpen: boolean
    onClick(e: string, i: number): Function | void
}

export const Appliance = ({ isOpen, onClick}: ITile) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        onClick(e.currentTarget.name, id)
    }
    return (
        <>
            {isOpen &&
                <div className="cattype">
                    <Tiles tiles={getCategories(catApplType)} selected={-1} onClick={(e: any, i: any) => console.log(e, 'm0', i)} />

                </div>
            }
        </>
    );

}


