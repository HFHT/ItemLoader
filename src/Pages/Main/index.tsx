import './main.css';

import { useEffect, useState } from 'react'
import { schemaResult, schemaType } from '../../helpers/objects';
import { uniqueBarCode } from '../../helpers/barCode';
import { BarCode, Button, OpenAI, WebcamCapture } from '../../components';
import { useShopify } from '../../hooks';
import { Wizard } from '../../components/Wizard';

export function Main() {
  const [theType, setTheType] = useState<Itype>(schemaType)
  const [doPrint, setDoPrint] = useState(false)
  const [doShopify, getCollections, theCollections]: any = useShopify()

  useEffect(() => {
    //if (!theCollections) return;
    getCollections();
  }, [])

  function handleSetType(e: string, i: number) {
    console.log(e, theType.type)
    if (e !== theType.type) {
      setTheType({ ...theType, type: e, idx: i, result: schemaResult })
    }
  }

  function handleSubmit(f: boolean) {
    doShopify(theType, f)
    setTheType(schemaType)
    setDoPrint(true)
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
      {doPrint && <BarCode barcode={uniqueBarCode()} done={() => setDoPrint(false)} />}
    </div>
  )
}