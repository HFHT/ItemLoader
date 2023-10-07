import './printbarcode.css';

import { useState } from "react";
import { BarCode, Button, Input } from "../../components";
import { usePrint } from '../../hooks';

export function PrintBarcode() {
  const [theUpc, setTheUpc] = useState('')
  const [errMsg, setErrMsg] = useState('')

  const [printQ, doPrint, doAlign] = usePrint()



  return (
    <>
      <Button onClick={() => { doAlign && doAlign('') }}>Calibrate Printer</Button>

      <Input type='text' value={theUpc} title='enter barcode' onChange={(e: string) => setTheUpc(e)} />
      {errMsg && <div>{errMsg}</div>}
      <Button onClick={() => { handleScan(theUpc) }}>Print</Button>

    </>
  )
  function handleFeed() {


  }
  function handleScan(theUpc: string) {
    if (theUpc.length < 11) {
      setErrMsg('Barcode should be at least 11 characters!');
      return
    }
    if (theUpc.length > 12) {
      setErrMsg('Barcode should not be more than 12 characters!');
      return
    }
    doPrint && doPrint('')
  }

}