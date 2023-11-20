import { getLocalStorage, setLocalStorage } from "./localStorage"

export function addToPrintQueue(bc: any) {
    let theQueue = getLocalStorage('barcodes')
    if (!theQueue) {
      theQueue = []
    }
    theQueue.unshift(bc)
    setLocalStorage('barcodes', theQueue)
  }