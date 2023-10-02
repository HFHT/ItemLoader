// The upc information will be placed into the appropriate fields 

export const parseUpcSKU = (upc: IUPC, theUpc: string) => {
    const theImg = upc.thumbnail.url ? `https://${upc.thumbnail.url}` : '';
    //@ts-ignore
    let newSKU: Itype = {
        barcode: theUpc ? theUpc : upc.upc_code,
        sku: upc.upc_code,
        imgUrl: theImg,
        vendor: upc.brand,
        desc: upc.description + '\r\n' + upc.usage
    };

    //@ts-ignore
    let newResult: Iresult = {
        col: ['purchased-products']
    }

    newSKU = { ...newSKU, result: newResult }

    console.log('parseUpcSKU:', newSKU);

    return newSKU;
}