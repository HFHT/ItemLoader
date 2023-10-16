import './admin.css';

import { Button } from "../../components";
import { useEmptyBarCodes, usePrint } from '../../hooks';
import { setLocalStorage } from '../../helpers/localStorage';

export function Admin() {
  const [delBarcodes, delStatus]: any = useEmptyBarCodes()

  return (
    <>
      <div><Button onClick={() => { handleEmpty() }}>Empty Database</Button> Run this at the end of day.</div>
    </>
  )

  function handleEmpty() {
    setLocalStorage('barcodes', [])
    delBarcodes(true)
  }

}