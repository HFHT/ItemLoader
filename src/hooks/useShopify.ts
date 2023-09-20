import { useState } from "react";
import { CONST_DISCOUNTS } from "../constants";
import { uniqueBarCode } from "./barCode";

export function useShopify() {
    const [theCollections, setTheCollections] = useState()

    const headers = new Headers();
    var url = `${import.meta.env.VITE_AZURE_FUNC_URL}/api/HFHTShopify`;

    const doShopify = async (prompt: any, featured: boolean) => {
        if (!prompt.result.room) return;
        console.log('useShopify', prompt)

        let options = {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                method: 'add',
                collections: prepareCollections(theCollections, prompt, featured),
                product: JSON.stringify({
                    "product": {
                        "title": `${prompt.result.seo} ${prompt.result.finish} ${prompt.result.attr1} ${prompt.result.prod}`,
                        "published_scope": "global",
                        "body_html": prompt.result.desc,
                        "vendor": "My Store",
                        "product_type": prompt.result.prod,
                        "status": "active",
                        "tags": [prompt.result.seo, prompt.result.room, prompt.result.prod],
                        "variants": [{
                            "barcode": uniqueBarCode(),
                            "compare_at_price": prompt.result.price,
                            "price": prompt.result.price,
                            "requires_shipping": true,
                            "taxable": false,
                            "inventory_management": "shopify",
                            "inventory_policy": "deny",
                            "inventory_quantity": 1,
                            "weight_unit": "kg",
                            "grams": 0,
                            "weight": 0
                        }]
                    }
                })
            })
        };
        try {
            const response = await fetch(url, options);
            const shopifyResponse = (await response.json());
            console.log(shopifyResponse, shopifyResponse.prodId);
            if (shopifyResponse.hasOwnProperty('prodId')) {
                url = `${import.meta.env.VITE_AZURE_FUNC_URL}/api/HFHTShopifyImage`;

                options.body = JSON.stringify({
                    method: 'image',
                    product: shopifyResponse.prodId,
                    body: prepareImage(1, prompt.imgs.replace(/^data:image\/(png|jpg|jpeg);base64,/, ""))
                })

                const imageResponse = await fetch(url, options);
                const shopifyImgResponse = (await imageResponse.json());
                console.log(shopifyImgResponse);
            } else {
                throw 'Upload to Shopify failed, try again later!'
            }

        }
        catch (error) {
            console.log(error);
            alert(error);
        }
    }
    const getCollections = async () => {
        try {
            const response = await (fetch(url, prepareOptions('listCol', [], '')))
            const shopifyResponse = (await response.json());
            console.log(shopifyResponse);
            if (shopifyResponse.hasOwnProperty('theCollections')) {
                const temp: any = {}
                shopifyResponse.theCollections.data.custom_collections.forEach((e: any) => temp[e.handle] = e.id)
                setTheCollections(temp);

            } else { throw 'Could not retrieve Collections, check the network.' }
        }
        catch (error) {
            console.log(error);
            alert(error);
        }
    }
    return [doShopify, getCollections, theCollections];


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

    function prepareImage(imageNo: number, img: string) {
        return (
            JSON.stringify({
                image: {
                    position: imageNo,
                    metafields: [
                        { key: 'new', value: 'newvlue', type: 'single_line_text_field', namespace: 'global' }
                    ],
                    attachment: img,
                    filename: `H${uniqueBarCode()}.png`
                }
            })
        )
    }

    function prepareCollections(theCollections: any, result: any, featured: boolean) {
        var theDiscounts = CONST_DISCOUNTS
        theDiscounts = theDiscounts.concat(CONST_DISCOUNTS)
        theDiscounts = theDiscounts.concat(CONST_DISCOUNTS)
        const theMonth = new Date().getMonth()
        if (!theCollections) return []
        console.log(theDiscounts, theMonth, theDiscounts[theMonth])
        var aryCol = [
            theCollections['newly-added-items'],
            theCollections[theDiscounts[theMonth]]
        ]
        featured && (aryCol.push(theCollections['featured-items']))
        result.result.col.forEach((c: string) => {
            aryCol.push(theCollections[c])
        })
        console.log(aryCol)
        return aryCol
    }

}