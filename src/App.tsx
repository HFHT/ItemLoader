import { useState } from 'react'
import { PageLayout, Tiles } from './components'
import { catS, dimension, finish, mfg, prices, types } from './helpers/objects';

function App() {
  const [mIdx, setMIdx] = useState<Iidx>({ m0: -1, m1: -1, m2: -1, m3: -1, ty: -1, mf: -1, f0: -1, f1: -1, dh: -1, dw: -1, dd: -1 })

  console.log(catS);

  return (
    <div className="app">
      <PageLayout >
        <Tiles tiles={catS.map(i => i.n0)} selected={mIdx.m0} onClick={(e: any, i: any) => handleSetCat(e, 'm0', i)} />
        {hasProp('m0') &&
          <Tiles tiles={catS[mIdx.m0].m0.map((i: any) => i.n1)} selected={mIdx.m1} onClick={(e: any, j: any) => handleSetCat(e, 'm1', j)} />
        }
        {hasProp('m1') &&
          <Tiles tiles={catS[mIdx.m0].m0[mIdx.m1].m1.map((i: any) => i.n2)} selected={mIdx.m2} onClick={(e: any, j: any) => handleSetCat(e, 'm2', j)} />
        }
        {hasProp('m2') &&
          <Tiles tiles={prices} selected={mIdx.m3} onClick={(e: any, j: any) => handleSetCat(e, 'm3', j)} />
        }
        {hasProp('m3') && hasAttr('t') &&
          <Tiles tiles={getInfo('Types')} selected={mIdx.ty} onClick={(e: any, j: any) => handleSetCat(e, 'ty', j)} />
        }
        {hasProp('m3') && hasAttr('m') &&
          <Tiles tiles={getInfo('MFG')} selected={mIdx.mf} onClick={(e: any, j: any) => handleSetCat(e, 'mf', j)} />
        }
        {hasProp('m3') && hasAttr('f') &&
          <Tiles tiles={getInfo('Finish')} selected={mIdx.f0} onClick={(e: any, j: any) => handleSetCat(e, 'f0', j)} />
        }
        {hasProp('f0') && hasAttr('f') &&
          <Tiles tiles={getInfo('Finish1')} selected={mIdx.f1} onClick={(e: any, j: any) => handleSetCat(e, 'f1', j)} />
        }
        {hasProp('f0') && hasAttr('d') &&
          <Tiles tiles={getInfo('Height')} selected={mIdx.dh} onClick={(e: any, j: any) => handleSetCat(e, 'dh', j)} />
        }
        {hasProp('dh') && hasAttr('d') &&
          <Tiles tiles={getInfo('Width')} selected={mIdx.dw} onClick={(e: any, j: any) => handleSetCat(e, 'dw', j)} />
        }
        {hasProp('dw') && hasAttr('d') &&
          <Tiles tiles={getInfo('Depth')} selected={mIdx.dd} onClick={(e: any, j: any) => handleSetCat(e, 'dd', j)} />
        }

      </PageLayout>
    </div>
  )

  function getInfo(a: string) {
    console.log(a, catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2])
    switch (a) {
      case 'Types':
        if (catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].hasOwnProperty('t'))
          return types[catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].t]
        break
      case 'MFG':
        if (catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].hasOwnProperty('m'))
          return mfg[catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].m]
        break
      case 'Finish':
        if (catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].hasOwnProperty('f')) {
          if (typeof (catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].f) === 'string') {
            console.log(catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].f)
            if (finish.hasOwnProperty(catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].f)) {
              return finish[catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].f]
            } else {
              alert(`Bad Finish Type: ${catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].f}`)
            }
          } else {
            console.log(catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].f)
            return catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].f
          }
        }
        break
      case 'Finish1':
        console.log(catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].f[mIdx.f0], finish['Wood'])
        return finish[catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].f[mIdx.f0]]
        break
      case 'Height':
        console.log(catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].d)
        return dimension[catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].d.Height]
      case 'Width':
        return dimension[catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].d.Width]
      case 'Depth':
        return dimension[catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].d.Depth]
    }
    return [];
  }

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
    console.log(catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2])
    return (catS[mIdx.m0].m0[mIdx.m1].m1[mIdx.m2].hasOwnProperty(a))
  }

}

export default App
