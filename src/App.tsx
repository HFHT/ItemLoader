import { useEffect, useState } from 'react'
import { Appliance, Button, Cabinet, Door, Furniture, Lighting, OpenAI, PageLayout, Photo, Plumbing, Tiles, Windows } from './components'
import { catType, schemaResult, schemaType } from './helpers/objects';
import { useShopify } from './hooks';

function App() {
  const [mIdx, setMIdx] = useState<Iidx>({ m0: -1, m1: -1, m2: -1, m3: -1, ty: -1, mf: -1, f0: -1, f1: -1, dh: -1, dw: -1, dd: -1 })
  const [theType, setTheType] = useState<Itype>(schemaType)
  const [doShopify, getCollections, theCollections]: any = useShopify()


  useEffect(() => {
    //if (!theCollections) return;
    getCollections();
  }, [])

  function handleSetType(e: string) {
    console.log(e, theType.type)
    if (e !== theType.type) {
      setTheType({ ...theType, type: e, result: schemaResult })
    }
  }

  return (
    <div className="app">
      <PageLayout >
        <div className="maingrid">
          <div className="usergrid">
            <Tiles tiles={catType} selected={mIdx.m0} onClick={(e: any) => handleSetType(e)} />
            <Furniture isOpen={theType.type === 'Furniture'} onClick={(e: any) => setTheType({ ...theType, result: e })} />
            <Appliance isOpen={theType.type === 'Appliances'} onClick={(e: any) => setTheType({ ...theType, result: e })} />
            <Cabinet isOpen={theType.type === 'Cabinet'} onClick={(e: any) => setTheType({ ...theType, result: e })} />
            <Door isOpen={theType.type === 'Door'} onClick={(e: any) => setTheType({ ...theType, result: e })} />
            <Lighting isOpen={theType.type === 'Lighting'} onClick={(e: any) => setTheType({ ...theType, result: e })} />
            <Plumbing isOpen={theType.type === 'Plumbing'} onClick={(e: any) => setTheType({ ...theType, result: e })} />
            <Windows isOpen={theType.type === 'Windows'} onClick={(e: any) => setTheType({ ...theType, result: e })} />
          </div>
          <div className="aigrid">
            <OpenAI isOpen={theType.result.room !== ''} userData={theType} setResult={(e: any) => setTheType({ ...theType, result: { ...theType.result, desc: e } })} />
          </div>
          <div className="photogrid">
            <Photo isOpen={theType.result.seo !== ''} setter={((e: any) => setTheType({ ...theType, imgs: e }))} />
          </div>
          <Button onClick={(e) => doShopify(theType)} disabled={theType.imgs === ''}>Submit</Button>
        </div>
      </PageLayout>
    </div>
  )

  // function getInfo(a: string) {
  //   console.log(a, catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2])
  //   switch (a) {
  //     case 'Types':
  //       if (catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].hasOwnProperty('t'))
  //         return types[catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].t]
  //       break
  //     case 'MFG':
  //       if (catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].hasOwnProperty('m'))
  //         return mfg[catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].m]
  //       break
  //     case 'Finish':
  //       if (catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].hasOwnProperty('f')) {
  //         if (typeof (catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].f) === 'string') {
  //           console.log(catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].f)
  //           if (finish.hasOwnProperty(catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].f)) {
  //             return finish[catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].f]
  //           } else {
  //             alert(`Bad Finish Type: ${catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].f}`)
  //           }
  //         } else {
  //           console.log(catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].f)
  //           return catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].f
  //         }
  //       }
  //       break
  //     case 'Finish1':
  //       console.log(catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].f[mIdx.f0], finish['Wood'])
  //       return finish[catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].f[mIdx.f0]]
  //       break
  //     case 'Height':
  //       console.log(catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].d)
  //       return dimension[catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].d.Height]
  //     case 'Width':
  //       return dimension[catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].d.Width]
  //     case 'Depth':
  //       return dimension[catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].d.Depth]
  //   }
  //   return [];
  // }

  function handleSetCat(e: string, p: string, i: number) {
    console.log('handleSetCat', e, p, i)
    const resets: { [k: string]: any } = {
      "m0": { m0: i, m1: -1, m2: -1, m3: -1, ty: -1, mf: -1, f0: -1, f1: -1, dh: -1, dw: -1, dd: -1 },
      "m1": { m1: i, m2: -1, m3: -1, ty: -1, mf: -1, f0: -1, f1: -1, dh: -1, dw: -1, dd: -1 },
      "m2": { m2: i, m3: -1, ty: -1, mf: -1, f0: -1, f1: -1, dh: -1, dw: -1, dd: -1 },
      "m3": { m3: i, ty: -1, mf: -1, f0: -1, f1: -1, dh: -1, dw: -1, dd: -1 },
      "ty": { ty: i, mf: -1, f0: -1, f1: -1, dh: -1, dw: -1, dd: -1 },
      "mf": { mf: i, f0: -1, f1: -1, dh: -1, dw: -1, dd: -1 },
      "f0": { f0: i, f1: -1, dh: -1, dw: -1, dd: -1 },
      "f1": { f1: 1, dh: -1, dw: -1, dd: -1 },
      "dh": { dh: i, dw: -1, dd: -1 },
      "dw": { dw: i, dd: -1 },
      "dd": { dd: i }
    }
    setMIdx({ ...mIdx, ...resets[p] })
  }

  function hasProp(p: string) {
    console.log(mIdx[p])
    return (mIdx[p] > -1)
  }

  function hasAttr(a: string) {
    // console.log(catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2])
    // return (catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].hasOwnProperty(a))
  }

}

export default App
