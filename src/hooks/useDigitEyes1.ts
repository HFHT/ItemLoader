// Looks up the upc in the Digit Eyes database and returns the result
// Will return if upc is empty
// The upc will be trimmed and then checked to be numeric and of the correct length
import { useState } from "react";

export function useDigitEyes1() {
    const [upcData, setUpcData] = useState({ status: 0, data: {} });
    const [idx, setIdx] = useState(0);

    const getUPC = async (upc: any) => {
        if (!upc) return;
        const thisUpc = upc.replace(/\s/g, "");
        if (/^\d+$/.test(thisUpc)) {
            if (thisUpc.length > 11) {
                //                const found = SKUs.find((i: any) => i.SKU === thisUpc);
                const found = false;

                if (!found) {
                    const headers = new Headers();
                    const url = `${import.meta.env.VITE_AZURE_FUNC_URL}/api/HFHTgetUPC?upc=${thisUpc}`;
                    const options = {
                        method: "GET",
                        headers: headers
                    };
                    try {
                        const response = await fetch(url, options);
                        if (!response.ok) throw `UPC lookup failed with ${response.status}: ${response.statusText}`
                        const upcResponse = (await response.json());
                        console.log(upcResponse);
                        checkStatusCode(upcResponse.status);
                        setUpcData(upcResponse);
                    }
                    catch (error) {
                        console.log(error);
                    }
                }
            } else {
                setUpcData({ ...upcData, status: 400, data: { return_code: 999, return_message: 'UPC must be greater than 11 characters!' } });
                alert('UPC must be greater than 11 characters!');
            }
        } else {
            setUpcData({ ...upcData, status: 400, data: { return_code: 999, return_message: 'UPC can only contain numbers!' } });
            alert('UPC can only contain numbers!');
        }
    }
    return [upcData, getUPC, idx, setIdx];
}

export function checkStatusCode(status: string) {
    if (status === '402') { alert('Contact support: DigitEyes account needs more funding!') }
    if (status.toString().match(/(400|401)/)) { alert(`Contact support: DigitEyes program error: ${status}`) }
}