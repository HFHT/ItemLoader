// import { useState } from "react";

import { useState } from "react"
import { Badge, InputTouchSpin, Tiles } from ".."
import { getCategories } from "../../helpers/functions"
import { catFurnType, conditionAdds, conditions, prices, schemaResult } from "../../helpers/objects"
import { Product } from "../Product"
import { BadgeIcons } from "../../icons"

interface ITile {
    isOpen: boolean
    onClick({ }): Function | void
}


export const Furniture = ({ isOpen, onClick }: ITile) => {
    const [theRoom, setTheRoom] = useState<ItheRoom>({ e: '', i: -1, prod: { item: [{ i: -1 }], finish: [], color: [], seo: [] } })
    const [theResult, setTheResult] = useState<Iresult>(schemaResult)
    const [theAttr, setTheAttr] = useState([])
    const [theSetSize, setTheSetSize] = useState(-1);
    // const [theQuantity, setTheQuantity] = useState(1);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        console.log(e, id, catFurnType[id], Object.getOwnPropertyNames(catFurnType[id])[0])
        const thisRoom: any = e;
        let thisProd: any = catFurnType[id];
        console.log(thisProd[thisRoom])
        setTheRoom({ e: thisRoom, i: id, prod: thisProd[thisRoom] })
        setTheResult({ ...theResult, room: thisRoom })
        setTheSetSize(-1)
        // setTheQuantity(1)
        // onClick(e.currentTarget.name, id)
    }
    function handleProduct(e: any, i: any) {
        console.log(theResult, e, i, theRoom.prod.item[i])
        let thisProd: any = theRoom.prod.item[i]
        if (thisProd[e].hasOwnProperty('a')) { setTheAttr(thisProd[e].a) }
        if (thisProd[e].hasOwnProperty('s') && thisProd[e].s) { setTheSetSize(0) }
        setTheResult({ ...theResult, prod: e })
    }
    return (
        <div className="cattype">
            {isOpen &&
                <>
                    <Tiles tiles={getCategories(catFurnType)} selected={theRoom.i} onClick={(e: any, i: any) => handleClick(e, i)} />
                    <Product isOpen={theResult.room !== ''} products={getCategories(theRoom.prod.item)} onClick={(e: any, i: any) => { handleProduct(e, i) }} />
                    {theSetSize > -1 && <InputTouchSpin value={theResult.qty ? theResult.qty : 1} title='Number of pieces:' setter={(e: any) => setTheResult({ ...theResult, qty: e })} />}
                    <Product isOpen={theAttr.length > 0} products={theAttr[0]} onClick={(e: any, i: any) => setTheResult({ ...theResult, attr1: e })} />
                    <Product isOpen={theAttr.length > 1} products={theAttr[1]} onClick={(e: any, i: any) => setTheResult({ ...theResult, attr2: e })} />
                    <Product isOpen={theResult.prod !== ''} products={['Wood', 'Color']} onClick={(e: any, i: any) => setTheResult({ ...theResult, material: e })} />
                    <Product isOpen={theResult.material === 'Wood'} products={theRoom.prod.finish} onClick={(e: any, i: any) => setTheResult({ ...theResult, finish: e })} />
                    <Product isOpen={theResult.material === 'Color'} products={theRoom.prod.color} onClick={(e: any, i: any) => setTheResult({ ...theResult, finish: e })} />
                    <Product isOpen={theResult.finish !== ''} products={conditions} onClick={(e: any, i: any) => setTheResult({ ...theResult, condition: e })} />
                    <Product isOpen={theResult.finish !== ''} products={conditionAdds} onClick={(e: any, i: any) => setTheResult({ ...theResult, conditionAdds: e })} />
                    <Product isOpen={theResult.condition !== ''} products={prices} onClick={(e: any, i: any) => setTheResult({ ...theResult, price: e })} />
                    <Product isOpen={theResult.price !== ''} products={theRoom.prod.seo} onClick={(e: any, i: any) => setTheResult({ ...theResult, seo: e })} />
                </>
            }
            {theResult.seo && <Badge icon={BadgeIcons('Scan')} label='Scan' content='0' onClick={() => onClick(theResult)} color='blue' />}
        </div>
    );

}


