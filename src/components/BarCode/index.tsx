import JsBarcode from 'jsbarcode';
import { Input } from '../Input';
import './barcode.css';
import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';

interface IPL {
    children?: React.ReactNode;
}

export function BarCode({ children }: IPL) {
    const [value, setValue] = useState('')
    const barcodeRef = useRef(null)
    const onChange = (e: any) => {
        console.log(e)
        setValue(e.target.value)
    }
    return (
        <div className="content">
            <Input type={'text'} value={value} onChange={(e: any) => setValue(e)} title={''} />
            <div ref={barcodeRef}>
                <svg onClick={(e) => window.print()} id="barcode"></svg>
            </div>
            <button onClick={(e) => genBarcode()} id="btn">Generate</button>
        </div>
    )
    function genBarcode() {
        JsBarcode("#barcode", value,
            {

            });
        const opt = { scale: 4 }
        const elem:any = barcodeRef.current
        html2canvas(elem, opt).then(canvas => {
            const iframe = document.createElement('iframe')
            iframe.name = 'printf'
            iframe.id = 'printf'
            iframe.height = '0'
            iframe.width = '0'
            document.body.appendChild(iframe)
            //@ts-ignore
            const imgUrl = canvas.toDataURL({
                format: 'jpeg',
                quality: '1.0'
            })
            const style = `height:100vh;width:100vw;position:absolute;left:0;top:0`
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