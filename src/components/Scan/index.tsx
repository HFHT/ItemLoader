import { useEffect, useState } from 'react';
import { Button, Header, Input, Tiles } from '..';
import './scan.css';
import { useDigitEyes1 } from '../../hooks';
import { parseUpcSKU } from '../../helpers/parseUpc';
import { schemaType } from '../../helpers/objects';

interface IPL {
    setter: Function
    isOpen: boolean
}

export function Scan({ isOpen, setter }: IPL) {
    const [theUpc, setTheUpc] = useState('')
    const [theQty, setTheQty] = useState('1')
    const [upc, getUpc, prodIdx, setProdIdx]: any = useDigitEyes1();

    useEffect(() => {
        if (!upc) return
        console.log(upc)
        if (upc.status === 200) {
            // upc Search found a product
            let newSKU: Itype = parseUpcSKU(upc.data);
            newSKU = {...newSKU, invQty: Number(theQty)}
            console.log(newSKU)
            setter(newSKU)
        }
        if (upc.status === 404) {
            // upc Search couldn't find a product
            console.log('useEffect-item-upc-404:', upc);
            setter(schemaType)
            //@ts-ignore
            let newSKU: Itype = {
                barcode: upc,
                invQty: Number(theQty),
                sku: upc
            };
            setter(newSKU)
        }

    }, [upc])

    return (
        <div className='scantop'>
            {isOpen &&
                <>
                    <Input type='number' value={theQty} title='Quantity' onChange={(e: string) => setTheQty(e)} />
                    <Input type='text' value={theUpc} title='scan barcode' onChange={(e: string) => setTheUpc(e)} />
                    <Button onClick={() => { handleScan(theUpc) }}>Search</Button>
                </>
            }
        </div>
    )
    function handleScan(theUpc: string) {
        getUpc(theUpc);
    }
}