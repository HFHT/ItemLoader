import './wizard.css';

import { useEffect, useState } from 'react'
import { catApplType, catCabType, catDoorType, catFloorType, catFurnType, catHouseType, catLightType, catPlumbType, catToolType, catType, catWindType, schemaResult, schemaType } from '../../helpers/objects';
import { Category, Tiles } from '../../components';
import { useShopify } from '../../hooks';
import { uniqueBarCode } from '../../helpers/barCode';

interface IWiz {
  isOpen: boolean;
  thisType: Itype;
  setter: Function;
  setSaved: Function;
}

export function Wizard({ isOpen, thisType, setter, setSaved }: IWiz) {
  // const [theType, setTheType] = useState<Itype>(schemaType)
  // const [doShopify, getCollections, theCollections]: any = useShopify()

  // useEffect(() => {
  //   //if (!theCollections) return;
  //   getCollections();
  // }, [])

  function handleSetType(e: string, i: number) {
    // console.log(e, theType.type)
    if (e !== thisType.type) {
      setter({ ...thisType, type: e, idx: i, barcode: uniqueBarCode(), result: schemaResult })
    }
  }

  useEffect(() => {
    if (!thisType) return
    // Once the seo property has been set then the wizard is done.
    if (thisType.result.seo !== '') {
      setter(thisType);
      // setTheType(schemaType)
    }

  }, [thisType])


  return (
    <div className="apptop">
      {isOpen &&
        <div className="maingrid">
          <div className="usergrid">
            <Tiles tiles={catType} selected={thisType.idx} onClick={(e: string, i: number) => handleSetType(e, i)} />
            <Category key={1} result={thisType.result} categories={catFurnType} isOpen={thisType.type === 'Furniture'} setter={(e: any) => setter({ ...thisType, result: e })} setSaved={(e: boolean) => setSaved(e)} />
            <Category key={2} result={thisType.result} categories={catApplType} isOpen={thisType.type === 'Appliances'} setter={(e: any) => setter({ ...thisType, result: e })} setSaved={(e: boolean) => setSaved(e)} />
            <Category key={3} result={thisType.result} categories={catHouseType} isOpen={thisType.type === 'Housewares'} setter={(e: any) => setter({ ...thisType, result: e })} setSaved={(e: boolean) => setSaved(e)} />
            <Category key={4} result={thisType.result} categories={catFloorType} isOpen={thisType.type === 'Flooring'} setter={(e: any) => setter({ ...thisType, result: e })} setSaved={(e: boolean) => setSaved(e)} />
            <Category key={5} result={thisType.result} categories={catLightType} isOpen={thisType.type === 'Lighting'} setter={(e: any) => setter({ ...thisType, result: e })} setSaved={(e: boolean) => setSaved(e)} />
            <Category key={6} result={thisType.result} categories={catPlumbType} isOpen={thisType.type === 'Plumbing'} setter={(e: any) => setter({ ...thisType, result: e })} setSaved={(e: boolean) => setSaved(e)} />
            <Category key={7} result={thisType.result} categories={catToolType} isOpen={thisType.type === 'Tool'} setter={(e: any) => setter({ ...thisType, result: e })} setSaved={(e: boolean) => setSaved(e)} />
            <Category key={8} result={thisType.result} categories={catCabType} isOpen={thisType.type === 'Cabinet'} setter={(e: any) => setter({ ...thisType, result: e })} setSaved={(e: boolean) => setSaved(e)} />
            <Category key={9} result={thisType.result} categories={catDoorType} isOpen={thisType.type === 'Door'} setter={(e: any) => setter({ ...thisType, result: e })} setSaved={(e: boolean) => setSaved(e)} />
            <Category key={10} result={thisType.result} categories={catWindType} isOpen={thisType.type === 'Window'} setter={(e: any) => setter({ ...thisType, result: e })} setSaved={(e: boolean) => setSaved(e)} />
          </div>
        </div>
      }
    </div>
  )
}