// The upc information will be placed into the appropriate fields 

export const parseUpcSKU = (upc: IUPC) => {
    const theImg = upc.thumbnail.url ? `https://${upc.thumbnail.url}` : '';
    //@ts-ignore
    let newSKU: Itype = {
        barcode: upc.upc_code,
        sku: upc.upc_code,
        imgUrl: theImg,
        vendor: upc.brand,
        desc: upc.description + '\r\n' + upc.usage
    };

    //@ts-ignore
    let newResult: Iresult = {
        col: ['purchased-products']
    }

    newSKU = {...newSKU, result: newResult}

    console.log('parseUpcSKU:', newSKU);

    return newSKU;
}