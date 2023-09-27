import './category.css';

import { useState } from "react"
import { Button, ColorPick, InputTouchSpin, Tiles } from ".."
import { getCategories } from "../../helpers/functions"
import { catApplType, conditionAdds, conditions, prices, schemaResult } from "../../helpers/objects"
import { Product, Products } from "../Product"

interface ITile {
    isOpen: boolean
    basicOnly?: boolean
    categories: any
    onClick({ }): Function | void
}


export const Category = ({ isOpen, basicOnly = false, categories, onClick }: ITile) => {
    const [theRoom, setTheRoom] = useState<ItheRoom>({ e: '', i: -1, prod: { item: [{ i: -1 }], mfg: [], pwr: [], wood: [], finish: [], color: [], metal: [], seo: [] } })
    const [theResult, setTheResult] = useState<Iresult>(schemaResult)
    const [theAttr, setTheAttr] = useState([])
    const [theSetSize, setTheSetSize] = useState(-1);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        // console.log(e, id, categories[id], Object.getOwnPropertyNames(categories[id])[0])
        const thisRoom: any = e;
        let thisProd: any = categories[id];
        // console.log(thisProd[thisRoom])
        setTheRoom({ e: thisRoom, i: id, prod: thisProd[thisRoom] })
        setTheResult({ ...theResult, room: thisRoom, col: thisProd[thisRoom].col })
        setTheSetSize(-1)
    }
    function handleProduct(e: any, i: any) {
        // console.log(theResult, e, i, theRoom.prod.item[i])
        let thisProd: any = theRoom.prod.item[i]
        if (thisProd[e].hasOwnProperty('a')) { setTheAttr(thisProd[e].a) }
        if (thisProd[e].hasOwnProperty('s') && thisProd[e].s) { setTheSetSize(0) }
        setTheResult({ ...theResult, prod: e })
    }
    function handleProducts(e: any, i: any, v: any) {
        // console.log(theResult, e, i, theRoom.prod.item[i])
        let thisProd: any = theRoom.prod.item[i]
        if (thisProd[e].hasOwnProperty('a')) { setTheAttr(thisProd[e].a) }
        // TODO remove the .s properties and remove sets from objects.ts
        // if (thisProd[e].hasOwnProperty('s') && thisProd[e].s) { setTheSetSize(0) }

        // add prop "e" to theResult.prods if it doesn't exist, if it does increase the qty by prop 'i'
        let adjust = theResult.prods
        let found = false
        adjust?.forEach((x) => {
            // console.log(x.prod, e)
            if (x.prod === e) { x.qty = x.qty + v; found = true }
        })
        if (!found) { adjust?.push({ prod: e, qty: v }) }

        // console.log(adjust)
        setTheResult({ ...theResult, prods: adjust })
    }
    function handleReset() {
        setTheResult(schemaResult)
        setTheAttr([])
        setTheSetSize(-1)
        setTheRoom({ ...theRoom, e: '', i: -1, prod: { item: [{ i: -1 }], mfg: [], pwr: [], wood: [], finish: [], color: [], metal: [], seo: [] } })
    }
    function handleSave() {
        onClick(theResult)
        handleReset()
    }
    return (
        <div className="cattype">
            {isOpen &&
                <>
                    <Tiles tiles={getCategories(categories)} selected={theRoom.i} onClick={(e: any, i: any) => handleClick(e, i)} />
                    <Products title='Product:' isOpen={theResult.room !== ''} chosen={theResult.prods} products={getCategories(theRoom.prod.item)} onClick={(e: any, i: any, v: number) => { handleProducts(e, i, v) }} />
                    <Product title='Mfg:' isOpen={theResult.prod !== '' || theResult.prods.length > 0} products={theRoom.prod.mfg} onClick={(e: any, i: any) => setTheResult({ ...theResult, mfg: e })} />
                    <Product title='Pwr:' isOpen={theResult.mfg !== '' && theRoom.prod.pwr.length > 0} products={theRoom.prod.pwr} onClick={(e: any, i: any) => setTheResult({ ...theResult, pwr: e })} />
                    {/* {theSetSize > -1 && <InputTouchSpin value={theResult.qty ? theResult.qty : 1} title='Number of pieces:' setter={(e: any) => setTheResult({ ...theResult, qty: e })} />} */}
                    <Product title='Attr1:' isOpen={theAttr.length > 0} products={theAttr[0]} onClick={(e: any, i: any) => setTheResult({ ...theResult, attr1: e })} />
                    <Product title='Attr2:' isOpen={theAttr.length > 1} products={theAttr[1]} onClick={(e: any, i: any) => setTheResult({ ...theResult, attr2: e })} />
                    {!basicOnly && <Product title='Material:' isOpen={theResult.prod !== '' || theResult.prods.length > 0} products={selectFinishes(theRoom)} onClick={(e: any, i: any) => setTheResult({ ...theResult, material: e })} />}
                    {!basicOnly && <Product title='Finish:' isOpen={theResult.material !== '' && theResult.material !== ' ' && theResult.material !== 'Color'} products={whichFinish(theResult.material, theRoom)} onClick={(e: any, i: any) => setTheResult({ ...theResult, finish: e })} />}
                    <ColorPick isOpen={theResult.material === 'Color'} onClick={(e: any, i: any) => setTheResult({ ...theResult, finish: e })} />
                    <Product title='Condition:' isOpen={theResult.finish !== '' || theResult.material === ' '} products={conditions} onClick={(e: any, i: any) => setTheResult({ ...theResult, condition: e })} />
                    <Product title='Condition:' isOpen={theResult.finish !== '' || theResult.material === ' '} products={conditionAdds} onClick={(e: any, i: any) => setTheResult({ ...theResult, conditionAdds: e })} />
                    <Product title='Price:' isOpen={theResult.condition !== '' || (basicOnly && theResult.prods.length > 0)} products={prices} onClick={(e: any, i: any) => setTheResult({ ...theResult, price: e })} />
                    <Product title='Seo:' isOpen={theResult.price !== ''} products={theRoom.prod.seo} onClick={(e: any, i: any) => setTheResult({ ...theResult, seo: e })} />
                    {theResult.seo !== '' && <Button onClick={() => handleSave()} >Generate Description</Button>}
                    {theResult.seo === '' && <Button onClick={() => handleReset()}  >Clear</Button>}

                </>
            }
        </div>
    );

}

function selectFinishes(selRoom: ItheRoom) {
    var theFinish = [' ']
    selRoom.prod.color && theFinish.push('Color')
    selRoom.prod.wood && theFinish.push('Wood')
    selRoom.prod.finish && theFinish.push('Finish')
    selRoom.prod.metal && theFinish.push('Metal')
    return theFinish
}

function whichFinish(chosenFinish: string, selRoom: ItheRoom) {
    switch (chosenFinish) {
        case 'Wood': { return selRoom.prod.wood }
        case 'Color': { return selRoom.prod.color }
        case 'Metal': { return selRoom.prod.metal }
        case 'Finish': { return selRoom.prod.finish }
        default: { return [] }
    }

}
