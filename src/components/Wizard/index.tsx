import './wizard.css';

import { useEffect, useState } from 'react'
import { catApplType, catCabType, catDoorType, catFloorType, catFurnType, catHouseType, catLightType, catPlumbType, catToolType, catType, schemaResult, schemaType } from '../../helpers/objects';
import { uniqueBarCode } from '../../helpers/barCode';
import { BarCode, Button, Cabinet, Category, ColorPick, Door, OpenAI, PageLayout, Product, Setup, Tiles, WebcamCapture, Windows } from '../../components';
import { useShopify } from '../../hooks';

interface IWiz {
  setter: Function;
}

export function Wizard({ setter }: IWiz) {
  const [theType, setTheType] = useState<Itype>(schemaType)
  const [doPrint, setDoPrint] = useState(false)
  const [doShopify, getCollections, theCollections]: any = useShopify()

  useEffect(() => {
    //if (!theCollections) return;
    getCollections();
  }, [])

  function handleSetType(e: string, i: number) {
    // console.log(e, theType.type)
    if (e !== theType.type) {
      setTheType({ ...theType, type: e, idx: i, result: schemaResult })
    }
  }

  function handleSubmit(f: boolean) {
    doShopify(theType, f)
    setTheType(schemaType)
    setDoPrint(true)
  }
  useEffect(() => {
    if (!theType) return
    // Once the seo property has been set then the wizard is done.
    if (theType.result.seo !== '') {
      setter(theType);
      setTheType(schemaType)
    }
  
  }, [theType])
  

  return (
    <div className="apptop">
      {/* <PageLayout > */}
      <div className="maingrid">

        <div className="usergrid">
          <Tiles tiles={catType} selected={theType.idx} onClick={(e: string, i: number) => handleSetType(e, i)} />
          <Category key={1} categories={catFurnType} isOpen={theType.type === 'Furniture'} onClick={(e: any) => setTheType({ ...theType, result: e })} />
          <Category key={2} categories={catApplType} isOpen={theType.type === 'Appliances'} onClick={(e: any) => setTheType({ ...theType, result: e })} />
          <Category key={3} categories={catHouseType} isOpen={theType.type === 'Housewares'} onClick={(e: any) => setTheType({ ...theType, result: e })} />
          <Category key={4} categories={catFloorType} isOpen={theType.type === 'Flooring'} onClick={(e: any) => setTheType({ ...theType, result: e })} />
          <Category key={5} categories={catLightType} isOpen={theType.type === 'Lighting'} onClick={(e: any) => setTheType({ ...theType, result: e })} />
          <Category key={6} categories={catPlumbType} isOpen={theType.type === 'Plumbing'} onClick={(e: any) => setTheType({ ...theType, result: e })} />
          <Category key={7} categories={catToolType} isOpen={theType.type === 'Tool'} onClick={(e: any) => setTheType({ ...theType, result: e })} />
          <Category key={8} categories={catCabType} isOpen={theType.type === 'Cabinet'} onClick={(e: any) => setTheType({ ...theType, result: e })} />
          <Category key={9} categories={catDoorType} isOpen={theType.type === 'Door'} onClick={(e: any) => setTheType({ ...theType, result: e })} />

          <Windows isOpen={theType.type === 'Windows'} onClick={(e: any) => setTheType({ ...theType, result: e })} />
        </div>
        {/* <div className="aigrid">
          <OpenAI isOpen={theType.result.seo !== ''} disable={theType.result.desc !== ''} userData={theType} setResult={(e: any) => setTheType({ ...theType, result: { ...theType.result, desc: e } })} />
        </div>
        <div className="photogrid">
          {theType.result.desc !== '' && <WebcamCapture setter={((e: any) => setTheType({ ...theType, imgs: e }))} />}
        </div> */}
        {/* <Button onClick={(e) => handleSubmit(false)} disabled={theType.imgs === ''}>Submit</Button>
        <Button onClick={(e) => handleSubmit(true)} disabled={theType.imgs === ''}>Submit as Featured</Button>
        {doPrint && <BarCode barcode={uniqueBarCode()} done={() => setDoPrint(false)} />} */}

      </div>
      {/* </PageLayout> */}
    </div>
  )
}