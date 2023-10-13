import './printbarcode.css';

import { useEffect, useState } from "react";
import { BarCode, Button, Input } from "../../components";
import { useBarCode, usePrint } from '../../hooks';
import { getLocalStorage, setLocalStorage } from '../../helpers/localStorage';
import { parseGPT } from '../../helpers/functions';

export function PrintBarcode() {
  const [theUpc, setTheUpc] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [force, setForce] = useState('')

  const [printQ, doPrint, doAlign, doReprint]: any = usePrint()
  const [barcodes, getBarcodes, status, getStatus]: any = useBarCode()

  useEffect(() => {
    if (barcodes) return
    console.log('getbarcodes')
    // temporarily remove getBarcodes
    // getBarcodes(true)
    // getStatus(true)
  }, [])

  return (
    <>
      {status &&
        <div>Printer Status: {status[0].statusMsg}<br />If the printer is reporting "Out of paper", then open and close the cover on the barcode printer.</div>
      }
      <div><Button onClick={() => { doAlign(true) }}>Calibrate Printer</Button> First press the Feed button on the barcode printer, then press this button.</div>
      <div><Button onClick={() => { handleClear() }}>Clear Barcode List</Button> Clears the below list of barcodes.</div>

      {/* <Input type='text' value={theUpc} title='enter barcode' onChange={(e: string) => setTheUpc(e)} />
      {errMsg && <div>{errMsg}</div>}
      <Button onClick={() => { handleScan(theUpc) }}>Print</Button> */}
      {/* {barcodes &&
        barcodes.map((bc: any, i: number) => (showBarcode(bc, i)))

      } */}
      {getLocalStorage('barcodes').map((bc: any, i: number) => (showBarcode(bc, i)))}

    </>
  )

  function showBarcode(bcInfo: any, i: number) {
    const gptDesc = parseGPT(bcInfo.result.desc, 0)
    return (
      <div key={i}>
        <Button onClick={() => { handlePrint(bcInfo) }}>Print</Button>
        {` ${bcInfo.barcode} ${gptDesc}`}
      </div>
    )
  }

  function handlePrint(bc: any) {
    console.log('Reprint', bc)
    doPrint(bc)
  }

  function handleClear() {
    setLocalStorage('barcodes', [])
    setForce(`${Date.now()}`)
  }

  // Old way using data fetched from DB
  // function showBarcode(bcInfo: any, i: number) {
  //   return (
  //     <div key={i}>
  //       <Button onClick={() => { handlePrint(bcInfo.job) }}>Reprint</Button>
  //       {bcInfo.printed ? 'Complete' : 'Waiting'}
  //       {` ${bcInfo.job} ${bcInfo.desc}`}
  //     </div>
  //   )
  // }

  // function handlePrint(job: any) {
  //   console.log('Reprint', job)
  //   doReprint(job)
  // }

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