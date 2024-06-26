import './main.css';

import { useEffect, useState } from 'react'
import { schemaResult, schemaType } from '../../helpers/objects';
import { Button, OpenAI, WebcamCapture } from '../../components';
import { useShopify } from '../../hooks';
import { Wizard } from '../../components/Wizard';
import { getLocalStorage, setLocalStorage } from '../../helpers/localStorage';
import { ClipLoader } from 'react-spinners';
import { addToPrintQueue } from '../../helpers/addToPrintQueue';

export function Main(collections: any) {
  const [theType, setTheType] = useState<Itype>(schemaType)
  const [doShopify, shopifyLoading]: any = useShopify()
  const [hasSaved, setHasSaved] = useState(false)
  // console.log(collections)

  // useEffect(() => {
  //   console.log('getCollections')
  //   getCollections(true);
  // }, [])

  // useEffect(() => {
  //   console.log('Print11')
  //   if (!shopifyDone) { return }
  //   console.log('Print:', shopifyDone)
  //   if (shopifyDone) {
  //     window.location.reload()
  //   }
  // }, [shopifyDone])

  function handleSetType(e: string, i: number) {
    console.log(e, theType.type)
    if (e !== theType.type) {
      setTheType({ ...theType, type: e, idx: i, result: schemaResult })
    }
  }

  function handleSubmit(f: 'submit' | 'online' | 'treasure') {
    addToPrintQueue(theType)
    console.log(theType, collections, f)
    doShopify(theType, collections, f)
    let initType = schemaType
    initType.result.prods = []
    setTheType(initType)
    setHasSaved(false)
    // doPrint && doPrint(theType)
  }

  return (
    <div className="apptop">
      <Wizard isOpen={!hasSaved} thisType={theType} setter={(e: any) => setTheType(e)} setSaved={(e: boolean) => setHasSaved(e)} />
      <div className="aigrid">
        <OpenAI isOpen={hasSaved && theType.result.desc === ''} disable={theType.result.desc !== ''} userData={theType} setResult={(e: any) => setTheType({ ...theType, result: { ...theType.result, desc: e } })} />
      </div>
      <div className="photogrid">
        {theType.result.desc !== '' && <WebcamCapture setter={((e: any) => setTheType({ ...theType, imgs: e }))} />}
      </div>
      <Button onClick={(e) => handleSubmit('submit')} disabled={true}>Submit</Button>
      <Button onClick={(e) => handleSubmit('online')} disabled={theType.imgs[0] === ''}>Submit Online</Button>
      <Button onClick={(e) => handleSubmit('treasure')} disabled={theType.imgs[0] === ''}>Submit as Treasure</Button>
      {/* <ClipLoader loading={shopifyDone} /> */}
    </div>
  )
}