import './main.css';

import { useEffect, useState } from 'react'
import { schemaResult, schemaType } from '../../helpers/objects';
import { Button, OpenAI, WebcamCapture } from '../../components';
import { useShopify } from '../../hooks';
import { Wizard } from '../../components/Wizard';
import { getLocalStorage, setLocalStorage } from '../../helpers/localStorage';
import { ClipLoader } from 'react-spinners';

export function Main() {
  const [theType, setTheType] = useState<Itype>(schemaType)
  const [doShopify, getCollections, theCollections, shopifyDone]: any = useShopify()

  useEffect(() => {
    console.log('getCollections')
    getCollections(true);
  }, [])

  useEffect(() => {
    console.log('Print11')
    if (!shopifyDone) { return }
    console.log('Print:', shopifyDone)
    if (shopifyDone) {
      window.location.reload()
    }
  }, [shopifyDone])

  function handleSetType(e: string, i: number) {
    console.log(e, theType.type)
    if (e !== theType.type) {
      setTheType({ ...theType, type: e, idx: i, result: schemaResult })
    }
  }

  function addToPrintQueue(bc: any) {
    let theQueue = getLocalStorage('barcodes')
    if (!theQueue) {
      theQueue = []
    }
    theQueue.unshift(bc)
    setLocalStorage('barcodes',theQueue)
  }

  function handleSubmit(f: boolean) {
    addToPrintQueue(theType)
    doShopify(theType, f)
    setTheType(schemaType)
    // doPrint && doPrint(theType)
  }

  return (
    <div className="apptop">
      <Wizard setter={(e: any) => setTheType(e)} />
      <div className="aigrid">
        <OpenAI isOpen={theType.result.seo !== ''} disable={theType.result.desc !== ''} userData={theType} setResult={(e: any) => setTheType({ ...theType, result: { ...theType.result, desc: e } })} />
      </div>
      <div className="photogrid">
        {theType.result.desc !== '' && <WebcamCapture setter={((e: any) => setTheType({ ...theType, imgs: e }))} />}
      </div>
      <Button onClick={(e) => handleSubmit(false)} disabled={theType.imgs === ''}>Submit</Button>
      <Button onClick={(e) => handleSubmit(true)} disabled={theType.imgs === ''}>Submit as Featured</Button>
      {/* <ClipLoader loading={shopifyDone} /> */}
    </div>
  )
}