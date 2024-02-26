import './printbarcode.css';

import { useEffect, useState } from "react";
import { BarCode, Button, Input } from "../../components";
import { useBarCode, useEmptyBarCodes, useInterval, usePrint, usePrinter, useReadProduct, useTimeout } from '../../hooks';
import { getLocalStorage, setLocalStorage } from '../../helpers/localStorage';
import { ClipLoader } from 'react-spinners';
import { addToPrintQueue } from '../../helpers/addToPrintQueue';

export function PrintBarcode() {
  const [theHandle, setTheHandle] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [force, setForce] = useState('')
  const [timerVal, setTimerVal] = useState(80000)

  const [printQ, doPrint, doAlign, doReprint]: any = usePrint()
  const print = usePrinter({})

  const [barcodes, getBarcodes, status]: any = useBarCode()
  const [theProduct, doReadProduct]: any = useReadProduct()

  useInterval(() => { console.log('timer pop'); getBarcodes(true) }, 80000)
  // useTimeout(() => { console.log('timer pop'); getBarcodes(true) }, timerVal)

  useEffect(() => {
    console.log(theProduct)
    if (!theProduct) return
    if (theProduct.theProduct.data.products.length > 0) {
      console.log(theProduct.theProduct.data.products[0].title, theProduct.theProduct.data.products[0].variants[0].barcode)
      addToPrintQueue({
        type: theProduct.theProduct.data.products[0].product_type,
        barcode: theProduct.theProduct.data.products[0].variants[0].barcode,
        imgs: theProduct.theProduct.data.products[0].images[0].src,
        result: {
          desc: [theProduct.theProduct.data.products[0].title.slice(6)],
          price: theProduct.theProduct.data.products[0].variants[0].price
        }
      })
      setForce(`${Date.now()}`)
    } else {
      console.log('Handle not found')
      alert("This product was not found. Most likely the title was changed and so it no longer matches the Handle.")
    }
  }, [theProduct])

  useEffect(() => {
    if (!barcodes) return
    console.log('barcodes', barcodes)
    updatebcstatus()
  }, [barcodes])


  useEffect(() => {
    if (barcodes) return
    console.log('getbarcodes')
    // temporarily remove getBarcodes
    getBarcodes(true)
    // getStatus(true)
  }, [])

  return (
    <>
      {status &&
        <div>Printer Status: {status[0].statusMsg}<br />If the printer is reporting "Out of paper", then open and close the cover on the barcode printer.</div>
      }
      <div><Button onClick={() => { doAlign(true) }}>Calibrate Printer</Button>
        {/* <ClipLoader loading={true} /> */}
        First press the Feed button on the barcode printer, then press this button.</div>
      <div><Button onClick={() => { handleClear() }}>Clear Barcode List</Button> Clears the below list of barcodes.</div>
      <div className='displayflex'>
        <Button onClick={() => { handleFetch(theHandle) }}>Find Product</Button>
        <Input type='text' value={theHandle} title='Barcode...' onChange={(e: string) => setTheHandle(e)} />
      </div>


      {/* <Input type='text' value={theUpc} title='enter barcode' onChange={(e: string) => setTheUpc(e)} />
      {errMsg && <div>{errMsg}</div>}
      <Button onClick={() => { handleScan(theUpc) }}>Print</Button> */}
      {/* {barcodes &&
        barcodes.map((bc: any, i: number) => (showBarcode(bc, i)))

      } */}
      {getLocalStorage('barcodes') && getLocalStorage('barcodes').map((bc: any, i: number) => (showBarcode(bc, i)))}

    </>
  )

  function showBarcode(bcInfo: any, i: number) {
    const gptDesc = bcInfo.result.desc[0]
    console.log('showBarcode:', gptDesc)
    return (
      <div key={i}>
        <Button onClick={() => { handlePrint(bcInfo, i) }}>Print</Button>
        <ClipLoader loading={bcInfo.hasOwnProperty('printing') && bcInfo.printing} />
        {` ${bcInfo.barcode} ${gptDesc}`}
      </div>
    )
  }

  function handlePrint(bc: any, i: number) {
    console.log('Reprint', bc)
    doPrint(bc)
    print({ was: bc.result.price, now: bc.result.price, item: bc.barcode.slice(-5) })
    setbcprint(i, true)
  }

  function handleClear() {
    setLocalStorage('barcodes', [])
    setForce(`${Date.now()}`)
  }

  function handleFetch(bc: any) {
    doReadProduct(bc.replace(/\s\s+/g, ' ').replace(/\s+/g, '-').replace(/-{2,}/g, '-').toLowerCase())
    setTheHandle('')
  }

  function setbcprint(i: any, printing: boolean) {
    let bcs: any = getLocalStorage('barcodes')
    let thisbc: any = bcs[i]
    thisbc = { ...thisbc, printing: printing }
    bcs[i] = thisbc
    setLocalStorage('barcodes', bcs)
    setTimerVal(80000)
  }

  function updatebcstatus() {
    let thisbc: any = {}
    getLocalStorage('barcodes') && getLocalStorage('barcodes').map((bc: any, i: number) => {
      if (bc.printing) {
        thisbc = barcodes.find((x: any) => { return x.bc === bc.barcode })
        console.log(thisbc)
        if (thisbc && thisbc.hasOwnProperty('printed') && thisbc.printed) {
          setbcprint(i, false)
        }
      }
    })


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