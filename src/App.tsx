// import './App.css'
import { useState } from 'react'
import { PageLayout, Tiles } from './components'
import { catS } from './helpers/objects';

function App() {
  // const [m0Idx, setM0Idx] = useState(-1);
  // const [m1Idx, setM1Idx] = useState(-1);
  // const [m2Idx, setM2Idx] = useState(-1);
  const [mIdx, setMIdx] = useState({ m0: -1, m1: -1, m2: -1 })

  console.log(catS);
  console.log((catS.map(i => i.n0)))

  return (
    <div className="app">
      <PageLayout >
        <Tiles tiles={catS.map(i => i.n0)} selected={mIdx.m0} onClick={(e: any, i: any) => handleSetM0(e, i)} />
        {mIdx.m0 > -1 &&
          <Tiles tiles={catS[mIdx.m0].m0.map((i: any) => i.n1)} selected={mIdx.m1} onClick={(e: any, j: any) => handleSetM1(e, j)} />
        }
        {mIdx.m1 > -1 &&
          <Tiles tiles={catS[mIdx.m0].m0[mIdx.m1].m1.map((i: any) => i.n2)} selected={mIdx.m2} onClick={(e: any, j: any) => handleSetM2(e, j)} />
        }
      </PageLayout>
    </div>
  )

  function handleSetM0(e: string, i: number) {
    setMIdx({...mIdx, m0:i, m1: -1, m2:-1})

    console.log(catS[i])
    // setTheType(subMenu)
  }

  function handleSetM1(e: string, i: number) {
    setMIdx({...mIdx, m1: i, m2:-1})
    console.log(catS[i])
    // setTheType(subMenu)
  }

  function handleSetM2(e: string, i: number) {
    setMIdx({...mIdx, m2:i})
    console.log(catS[i])
    // setTheType(subMenu)
  }
}

export default App
