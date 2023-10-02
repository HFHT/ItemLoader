import './printbarcode.css';

import { useState } from "react";
import { BarCode, Button, Input } from "../../components";

export function PrintBarcode() {
  const [theUpc, setTheUpc] = useState('')
  const [errMsg, setErrMsg] = useState('')

  const [doPrint, setDoPrint] = useState(false)


  return (
    <>
      <Input type='text' value={theUpc} title='enter barcode' onChange={(e: string) => setTheUpc(e)} />
      {errMsg && <div>{errMsg}</div>}
      <Button onClick={() => { handleScan(theUpc) }}>Print</Button>
      {doPrint && <BarCode barcode={theUpc} done={() => setDoPrint(false)} />}

    </>
  )
  function handleScan(theUpc: string) {
    if (theUpc.length<11) {
      setErrMsg('Barcode should be at least 11 characters!');
      return
    }
    if (theUpc.length>12) {
      setErrMsg('Barcode should not be more than 12 characters!');
      return
    }
    setDoPrint(!doPrint);
    setErrMsg('');
    console.log(theUpc);
}

}