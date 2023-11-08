import './category.css';

import { useEffect, useState } from "react"
import { Button, ColorPick, InputTouchSpin, Tiles } from ".."
import { getCategories } from "../../helpers/functions"
import { catApplType, conditionAdds, conditions, prices, schemaResult, sources } from "../../helpers/objects"
import { Product, Products } from "../Product"
import { FinishPick } from '../FinishPick';

interface ITile {
    isOpen: boolean
    basicOnly?: boolean
    categories: any
    result: Iresult
    // onClick({ }): Function | void
    setter: Function
    setSaved: Function

}

export const Category = ({ isOpen, result, basicOnly = false, categories, setter, setSaved }: ITile) => {
    const [theRoom, setTheRoom] = useState<ItheRoom>({ e: '', i: -1, prod: { item: [{ i: -1 }], mfg: [], pwr: [], wood: [], finish: [], color: [], metal: [], fabric: [], src: [], seo: [] } })
    // const [theResult, setTheResult] = useState<Iresult>(schemaResult)
    const [theAttr, setTheAttr] = useState([])
    const [theSetSize, setTheSetSize] = useState(-1);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        // console.log(e, id, categories[id], Object.getOwnPropertyNames(categories[id])[0])
        const thisRoom: any = e;
        let thisProd: any = categories[id];
        // console.log(thisProd[thisRoom])
        setTheRoom({ e: thisRoom, i: id, prod: thisProd[thisRoom] })
        setter({ ...result, room: thisRoom, col: thisProd[thisRoom].col })
        setTheSetSize(-1)
    }
    // function handleProduct(e: any, i: any) {
    //     // console.log(theResult, e, i, theRoom.prod.item[i])
    //     let thisProd: any = theRoom.prod.item[i]
    //     if (thisProd[e].hasOwnProperty('a')) { setTheAttr(thisProd[e].a) }
    //     if (thisProd[e].hasOwnProperty('s')) { setTheSetSize(0) }
    //     setter({ ...result, prod: e })
    // }
    function handleProducts(e: any, i: any, v: any) {
        console.log(result, e, i, theRoom.prod.item[i])
        if (!e) return
        let thisProd: any = theRoom.prod.item[i]
        let adjust = result.prods
        let found = false

        // Is this a custom product? If so just add it, otherwise check for other attributes.
        if (i > theRoom.prod.item.length - 1) {
            console.log('Custom')
            if (!adjust.find((x: any) => { return x.prod === e })) {
                adjust?.push({ prod: e, qty: 1 })
            }
            console.log(adjust)
        } else {
            if (thisProd[e].hasOwnProperty('a')) { setTheAttr(thisProd[e].a) }
            // TODO remove the .s properties and remove sets from objects.ts
            if (thisProd[e].hasOwnProperty('s') && thisProd[e].s) { setTheSetSize(0) }
            // add prop "e" to theResult.prods if it doesn't exist, if it does increase the qty by prop 'i'
            adjust?.forEach((x, i, o) => {
                // console.log(x.prod, e)
                if (x.prod === e) {
                    x.qty = x.qty + v;
                    if (x.qty === 0) {
                        o.splice(i, 1)
                    }
                    found = true
                }
            })
            if (!found) { adjust?.push({ prod: e, qty: v }) }
        }



        // console.log(adjust)
        setter({ ...result, prods: adjust })
    }
    function handleClear(e: any) {
        console.log('handleClear')
        setter({ ...result, prods: [] })
    }
    function handleClearScreen() {
        location.reload()
    }
    function handleReset() {
        // setter(schemaResult)
        setTheAttr([])
        setTheSetSize(-1)
        setTheRoom({ ...theRoom, e: '', i: -1, prod: { item: [{ i: -1 }], mfg: [], pwr: [], wood: [], finish: [], color: [], metal: [], fabric: [], src: [], seo: [] } })
    }
    function handleSave() {
        // Check if price has a dollar sign, if not then add one
        // set a field to indicate that it is ready to generate AI
        console.log('handleSave', result)
        if (result.price.slice(0, 1) !== '$') {
            setter({ ...result, price: '$' + result.price })
        } else {
            setter({ ...result })
        }
        setSaved(true)
        handleReset()
    }

    useEffect(() => {
        console.log('useEffect', isOpen, result)

        if (isOpen && result.new) {
            setTheRoom({ e: '', i: -1, prod: { item: [{ i: -1 }], mfg: [], pwr: [], wood: [], finish: [], color: [], metal: [], fabric: [], src: [], seo: [] } })
            setter({ ...result, new: false })
        }
    }, [isOpen])


    return (
        <div className="cattype">
            {isOpen &&
                <>
                    <Tiles tiles={getCategories(categories)} selected={theRoom.i} onClick={(e: any, i: any) => handleClick(e, i)} />
                    <Products title='Product:' isOpen={result.room !== ''} hasCustom={'text'} chosen={result.prods} products={getCategories(theRoom.prod.item)} onClick={(e: any, i: any, v: number) => { handleProducts(e, i, v) }} onClear={(e: any) => { handleClear(e) }} />
                    <Product title='Mfg:' isOpen={result.prod !== '' || result.prods.length > 0} products={theRoom.prod.mfg} hasCustom={'text'} onClick={(e: any, i: any) => setter({ ...result, mfg: e })} />
                    <Product title='Pwr:' isOpen={result.mfg !== '' && theRoom.prod.pwr.length > 0} products={theRoom.prod.pwr} onClick={(e: any, i: any) => setter({ ...result, pwr: e })} />
                    {theSetSize > -1 && <InputTouchSpin value={result.qty ? result.qty : 1} title='Square Feet' setter={(e: any) => setter({ ...result, qty: e })} />}
                    <Product title='Attr1:' isOpen={theAttr.length > 0} products={theAttr[0]} onClick={(e: any, i: any) => setter({ ...result, attr1: e })} />
                    <Product title='Attr2:' isOpen={theAttr.length > 1} products={theAttr[1]} onClick={(e: any, i: any) => setter({ ...result, attr2: e })} />
                    {!basicOnly && <Product title='Material:' isOpen={result.prod !== '' || result.prods.length > 0} products={selectFinishes(theRoom)} onClick={(e: any, i: any) => setter({ ...result, material: e })} />}
                    {!basicOnly && <Product title='Finish:' isOpen={result.material !== '' && result.material !== ' ' && result.material !== 'Color' && result.material !== 'Wood'} products={whichFinish(result.material, theRoom)} onClick={(e: any, i: any) => setter({ ...result, finish: e })} />}
                    <FinishPick isOpen={result.material === 'Wood'} onClick={(e: any, i: any) => setter({ ...result, finish: e })} />

                    <ColorPick isOpen={result.material === 'Color'} onClick={(e: any, i: any) => setter({ ...result, finish: e })} />
                    <Product title='Fabric:' isOpen={result.finish !== '' || result.fabric === ' '} products={theRoom.prod.fabric} onClick={(e: any, i: any) => setter({ ...result, fabric: e })} />
                    <Product title='Condition:' isOpen={result.finish !== '' || result.material === ' '} products={conditions} onClick={(e: any, i: any) => setter({ ...result, condition: e })} />
                    <Product title='Condition:' isOpen={result.finish !== '' || result.material === ' '} products={conditionAdds} onClick={(e: any, i: any) => setter({ ...result, conditionAdds: e })} />
                    <Product title='Price:' isOpen={result.condition !== '' || (basicOnly && result.prods.length > 0)} products={prices} hasCustom={'number'} onClick={(e: any, i: any) => setter({ ...result, price: e })} />
                    <Product title='Seo:' isOpen={result.price !== ''} products={theRoom.prod.seo} hasCustom={'text'} onClick={(e: any, i: any) => setter({ ...result, seo: e })} />
                    <Product title='Source:' isOpen={result.seo !== ''} products={sources} hasCustom={'text'} onClick={(e: any, i: any) => setter({ ...result, src: e })} />

                    {result.src !== '' && Number(result.price.replace(/\$/g, '')) >= 10 && <Button onClick={() => handleSave()} >Generate Description</Button>}
                    {result.src === '' && <Button onClick={() => handleClearScreen()}  >Clear</Button>}

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
