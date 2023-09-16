
import { Tiles } from ".."
import { getCategories } from "../../helpers/functions"
import { catWindType } from "../../helpers/objects"

interface ITile {
    isOpen: boolean
    onClick(e: string, i: number): Function | void
}

export const Windows = ({ isOpen, onClick}: ITile) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        onClick(e.currentTarget.name, id)
    }
    return (
        <>
            {isOpen &&
                <div className="cattype">
                    <Tiles tiles={getCategories(catWindType)} selected={-1} onClick={(e: any, i: any) => console.log(e, 'm0', i)} />

                </div>
            }
        </>
    );

}


