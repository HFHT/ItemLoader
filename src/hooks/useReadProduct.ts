import { useState } from "react";

export function useReadProduct() {
    const [theProduct, setTheProduct] = useState()

    const headers = new Headers();
    var url = `${import.meta.env.VITE_AZURE_FUNC_URL}/api/HFHTShopify`;

    const doReadProduct = async (bc: string) => {
        if (!bc) return;
        console.log('useReadProduct', prompt)

        let options = {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                method: 'getProd',
                collections: '',
                product: `handle=${bc}`
            })
        };
        try {
            const response = await fetch(url, options);
            console.log(response);
            if (!response.ok) throw `Shopify Product failed with ${response.status}: ${response.statusText}`
            const shopifyResponse = (await response.json());
            console.log(shopifyResponse, shopifyResponse.prodId);
            setTheProduct(shopifyResponse)
        }
        catch (error) {
            console.log(error);
            alert(error);
        }
    }
    return [theProduct, doReadProduct];
}
