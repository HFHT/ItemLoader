import './addsku.css';

import { useEffect, useState } from "react";
import { useDigitEyes1, useShopify } from "../../hooks";
import { parseUpcSKU } from "../../helpers/parseUpc";
import { AltDesc, Button, Input, OpenAI, Scan, WebcamCapture } from "../../components";
import { Wizard } from "../../components/Wizard";
import { schemaType } from "../../helpers/objects";

export function AddSku() {
  const [theType, setTheType] = useState<Itype>(schemaType)
  const [doPrint, setDoPrint] = useState(false)
  const [doShopify, getCollections, theCollections]: any = useShopify()

  function handleSubmit(f: boolean) {
    doShopify(theType, f, true)
    setTheType(schemaType)
    setDoPrint(true)
  }

  useEffect(() => {
    //if (!theCollections) return;
    getCollections();
  }, [])

  return (
    <>
      <Scan isOpen={true} setter={(e: Itype) => setTheType({ ...theType, ...e })} />
      <Wizard setter={(e: Itype) => setTheType({ ...theType, ...e })} />
      <div className="addaigrid">
        <OpenAI isOpen={theType.result.seo !== ''} disable={theType.result.desc !== ''} userData={theType} setResult={(e: any) => setTheType({ ...theType, result: { ...theType.result, desc: e } })} />
        <AltDesc isOpen={theType.desc !== ''} disable={theType.result.seo === ''} userData={theType.desc} setResult={(e: any) => setTheType({ ...theType, result: { ...theType.result, desc: e } })} />
      </div>
      <div className="photogrid">
        {(theType.result.desc !== '' || theType.imgUrl) && <WebcamCapture imgUrl={theType.imgUrl} setter={((e: any) => setTheType({ ...theType, imgs: e }))} />}
      </div>
      <Button onClick={(e) => handleSubmit(false)} disabled={theType.imgs === ''}>Submit</Button>
      <Button onClick={(e) => handleSubmit(true)} disabled={theType.imgs === ''}>Submit as Featured</Button>
    </>
  )


}