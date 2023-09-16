
import { getCategories } from "../../helpers/functions"
import { catLightType } from "../../helpers/objects"
import { Tiles } from "../Tiles"

interface ITile {
    isOpen: boolean
    onClick(e: string, i: number): Function | void
}

export const Lighting = ({ isOpen, onClick}: ITile) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        onClick(e.currentTarget.name, id)
    }
    return (
        <>
            {isOpen &&
                <div className="cattype">
                    <Tiles tiles={getCategories(catLightType)} selected={-1} onClick={(e: any, i: any) => console.log(e, 'm0', i)} />

                </div>
            }
        </>
    );

}


