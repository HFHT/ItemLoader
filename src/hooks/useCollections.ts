import { useState } from "react";
import { CONST_COLLECTIONS, CONST_DISCOUNTS } from "../constants";
import { uniqueBarCode } from "../helpers/barCode";
import { parseGPT } from "../helpers/functions";

export function useCollections() {
    // const [theCollections, setTheCollections] = useState()
    const [isDone, setIsDone] = useState('')

    const headers = new Headers();
    var url = `${import.meta.env.VITE_AZURE_FUNC_URL}/api/HFHTShopify`;

    async function getCollections(doIt:boolean) {
        if (!doIt) return
        // try {
        //     const response = await (fetch(url, prepareOptions('listCol', [], '')))
        //     console.log(response)
        //     const shopifyResponse = (await response.json());
        //     console.log(shopifyResponse);
        //     if (shopifyResponse.hasOwnProperty('theCollections')) {
        //         const temp: any = {}
        //         shopifyResponse.theCollections.data.custom_collections.forEach((e: any) => temp[e.handle] = e.id)
        //         setTheCollections(temp);

        //     } else { throw 'Could not retrieve Collections, check the network.' }
        // }
        // catch (error) {
        //     console.log(error);
        //     alert(error);
        // }
        return
    }
    // return [doShopify, getCollections, theCollections, isDone];
    return [CONST_COLLECTIONS, getCollections];


    function prepareOptions(method: string, collections: [], product: any) {
        return ({
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                method: method,
                collections: collections.length > 0 ? collections : '',
                product: product !== '' ? JSON.stringify(product) : ''
            })
        });
    }

    function prepareImage(imageNo: number, alt: string, img: string) {
        let theImg = {}
        console.log(img.slice(0, 8))
        if (img.slice(0, 8) === 'https://') {
            theImg = {
                image: {
                    position: imageNo,
                    metafields: [
                        { key: 'new', value: 'newvlue', type: 'single_line_text_field', namespace: 'global' }
                    ],
                    src: img,
                    alt: alt,
                    filename: `H${uniqueBarCode()}.png`
                }
            }
        } else {
            theImg = {
                image: {
                    position: imageNo,
                    metafields: [
                        { key: 'new', value: 'newvlue', type: 'single_line_text_field', namespace: 'global' }
                    ],
                    attachment: img,
                    alt: alt,
                    filename: `H${uniqueBarCode()}.png`
                }
            }
        }
        return (
            JSON.stringify(theImg)
        )
    }

    function prepareCollections(theCollections: any, result: any, featured: boolean, isSku: boolean) {
        if (!theCollections) return []
        var aryCol = [
            theCollections[isSku ? 'purchased-products' : 'newly-added-items'],
            theCollections[currentDiscount()]
        ]
        featured && (aryCol.push(theCollections['featured-items']))
        console.log(theCollections)
        result.result.col.forEach((c: string) => {
            aryCol.push(theCollections[c])
        })
        console.log(aryCol)
        return aryCol
    }

    function currentDiscount() {
        var theDiscounts = CONST_DISCOUNTS
        theDiscounts = theDiscounts.concat(CONST_DISCOUNTS)
        theDiscounts = theDiscounts.concat(CONST_DISCOUNTS)
        const theMonth = new Date().getMonth()
        console.log(theDiscounts, theMonth, theDiscounts[theMonth])
        return theDiscounts[theMonth]
    }

    function prepareTitle(theItem: Itype) {
        const theAttrs = `${theItem.result.seo} ${theItem.result.finish} ${theItem.result.attr1}`
        let theTitle = '';
        if (theItem.result.prod || theItem.result.prods.length == 1) {
            theTitle = `${theAttrs} ${theItem.result.prod} ${theItem.result.prods[0].prod}`
        } else {
            theTitle = `${theItem.result.prods.length} piece ${theAttrs} ${theItem.result.room} set`
        }
        if (theItem.result.qty && theItem.result.qty > -1) {
            theTitle = `${theTitle} (${theItem.result.qty} Sq Ft)`
        }
        return theTitle.replace(/\s+/g, ' ').trim()
    }
}
