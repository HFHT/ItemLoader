import JsBarcode from 'jsbarcode';
import { Input } from '../Input';
import './barcode.css';
import { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';

interface IPL {
    barcode: string;
    done: Function;
}

export function BarCode({ barcode, done }: IPL) {
    const [value, setValue] = useState('')
    const barcodeRef = useRef(null)
    useEffect(() => {
        genBarcode(barcode)
        done()
    }, [barcode])
    
    return (
        <div className="content">
            {/* <Input type={'text'} value={value} onChange={(e: any) => setValue(e)} title={''} /> */}
            <div ref={barcodeRef}>
                <svg id="barcode"></svg>
            </div>
            {/* <button onClick={(e) => genBarcode()} id="btn">Generate</button> */}
        </div>
    )
    function genBarcode(theCode:string) {
        JsBarcode("#barcode", theCode,
            {

            });
        const opt = { scale: 4 }
        const elem:any = barcodeRef.current
        html2canvas(elem, opt).then(canvas => {
            const iframe = document.createElement('iframe')
            iframe.name = 'printf'
            iframe.id = 'printf'
            iframe.height = '100px'
            iframe.width = '200px'
            document.body.appendChild(iframe)
            //@ts-ignore
            const imgUrl = canvas.toDataURL({
                format: 'jpeg',
                quality: '1.0'
            })
            const style = `height:100px;width:200px;position:absolute;left:0;top:0`
            const url = `<img style="${style}" src="${imgUrl}"/>`
            //@ts-ignore
            var newWin = window.frames['printf']
            newWin.document.write(`<body onload="window.print()">${url}</body>`)
            newWin.document.close()
        })
        // window.print()
        // window.open('', '_parent', '')
        // window.close()
    }
}