import './printbarcode.css';

import { useEffect, useState } from "react";
import { BarCode, Button, Input } from "../../components";
import { useBarCode, usePrint } from '../../hooks';

export function PrintBarcode() {
  const [theUpc, setTheUpc] = useState('')
  const [errMsg, setErrMsg] = useState('')

  const [printQ, doPrint, doAlign, doReprint]: any = usePrint()
  const [barcodes, getBarcodes, status, getStatus]: any = useBarCode()

  useEffect(() => {
    if (barcodes) return
    console.log('getbarcodes')
    getBarcodes(true)
    getStatus(true)
  }, [])

  return (
    <>
      {status &&
        <div>Printer Status: {status[0].statusMsg}<br/>If the printer is reporting "Out of paper", then open and close the cover on the barcode printer.</div>
      }
      <Button onClick={() => { doAlign(true) }}>Calibrate Printer</Button> First press the Feed button on the barcode printer, then press this button.

      {/* <Input type='text' value={theUpc} title='enter barcode' onChange={(e: string) => setTheUpc(e)} />
      {errMsg && <div>{errMsg}</div>}
      <Button onClick={() => { handleScan(theUpc) }}>Print</Button> */}
      {barcodes &&
        barcodes.map((bc: any, i: number) => (showBarcode(bc, i)))

      }

    </>
  )
  function showBarcode(bcInfo: any, i: number) {
    return (
      <div key={i}>
        <Button onClick={() => { handlePrint(bcInfo.job) }}>Reprint</Button>
        {bcInfo.printed ? 'Complete' : 'Waiting'}
        {` ${bcInfo.job} ${bcInfo.desc}`}
      </div>
    )
  }

  function handlePrint(job: any) {
    console.log('Reprint', job)
    doReprint(job)
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