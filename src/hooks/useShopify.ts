import { useState } from "react";
import { CONST_COLLECTIONS } from "../constants";

export function useShopify() {
    const [theCollections, setTheCollections] = useState()

    const headers = new Headers();
    var url = `${import.meta.env.VITE_AZURE_FUNC_URL}/api/HFHTShopify`;

    const doShopify = async (prompt: any) => {
        if (!prompt.result.room) return;
        console.log('useShopify', prompt)



        // const gQL = {
        //     bodyHtml: "Good snowboard!",
        //     collectionsToJoin: `["gid://shopify/Collection/${shopifyCollections.Red}","gid://shopify/Collection/${shopifyCollections.New}"]`,
        //     productCategory: "Electronics > Electronics Accessories > Computer Components > Input Devices > Keyboards",
        //     productType: "snowboard",
        //     status: "gid://shopify/ProductStatus/ACTIVE",
        //     tags: '["Barne", "Big Air", "John Fav"]',
        //     title: "Sweet new product",
        //     variants: `[{ barcode: "11223344", price: "189" }]`,            
        //     vendor: "My Store"
        // }
        // console.log(gQL)
        // console.log(JSON.stringify(gQL))
        // const graphStr = `{bodyHtml: "${gQL.bodyHtml}", collectionsToJoin: ${gQL.collectionsToJoin}, productCategory: {productTaxonomyNodeId: ${gQL.productCategory}}, productType: "${gQL.productType}", status: "${gQL.status}", tags: ${gQL.tags}, title: "${gQL.title}", variants: ${gQL.variants}, vendor: "${gQL.vendor}"}`

        // console.log(graphStr)
        let options = {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                method: 'add',
                collections: theCollections ? [theCollections['newly-added-items'], theCollections['blue-discount-collection']] : [],
                product: JSON.stringify({
                    // "query": 'mutation { productCreate(input: '+graphStr+') { product {id}}}'
                    "product": {
                        "title": `${prompt.result.seo} ${prompt.result.finish} ${prompt.result.attr1} ${prompt.result.prod}`,
                        "published_scope": "global",
                        "body_html": prompt.result.desc,
                        "vendor": "My Store",
                        "product_type": prompt.result.prod,
                        "status": "active",
                        "tags": [prompt.result.seo, prompt.result.room, prompt.result.prod],
                        "variants": [{
                            "barcode": "11223344",
                            "price": prompt.result.price,
                            "requires_shipping": false,
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
                    body: prepareImage(1, prompt.imgs)
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
                    filename: 'rails_logo_gif'
                }
            })
        )
    }
    function formatGraphQL(g: any) {
        let strQL = '';


    }
}