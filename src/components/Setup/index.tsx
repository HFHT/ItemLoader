import { Header, Input, Tiles } from '..';
import './setup.css';

interface IPL {
    collection: number
    barcode: string
    setCol: Function
    setBarcode: Function
    children?: React.ReactNode;
}
export const CONST_DISCOUNTS = ['blue-discount-collection', 'green-discount-collection', 'red-discount-collection', 'yellow-discount-collection']

export function Setup({ collection, barcode, setCol, setBarcode }: IPL) {

    const handleCollection = (e: string, i: number) => {
        setCol({c: CONST_DISCOUNTS[i], i:i})
    }
    return (
        <>
            <div className="setuptop">
                <Tiles tiles={['Blue', 'Green', 'Red', 'Yellow']} selected={collection} onClick={(e: string, i: number) => handleCollection(e, i)} />
                <Input type={'text'} value={barcode} title={'Barcode'} setter={(e: string) => setBarcode(e)} />
            </div>
        </>
    )
}