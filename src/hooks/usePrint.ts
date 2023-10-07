// usePrint places a record in the MongoDB printqueue database, the printer picks it up from there.

import { useState } from "react";
import { parseGPT } from "../helpers/functions";
import { CONST_PRINT_MAC, CONST_STARLABEL, CONST_STAR_ALIGN } from "../constants";

export function usePrint() {
    const [printQ, setPrintQ] = useState();
    const [printResult, setPrintResult] = useState();

    const doPrint = async (userData: any) => {
        // if (!chatGPT) return;
        console.log(userData)
        if (!userData) return;

        const header: any = { method: "POST", headers: new Headers() };

        header.body = JSON.stringify(
            {
                method: 'insertOne',
                db: 'Inventory',
                collection: 'PrintQueue',
                data: {
                    mac: CONST_PRINT_MAC,
                    printed: false,
                    job: userData.barcode,
                    blob: buildStarBlob(userData),
                    fileX: ''
                }
            }
        )
        try {
            fetch(`${import.meta.env.VITE_MONGO_URL}`, header)
                .then(response => response.json())
                .then(data => { setPrintResult(data) })
                .catch(error => console.log(error))
        }
        catch (error) {
            console.log(error);
        }

    }

    const doAlign = async () => {
        const header: any = { method: "POST", headers: new Headers() };

        header.body = JSON.stringify(
            {
                method: 'updateOne',
                db: 'Inventory',
                collection: 'PrintQueue',
                data: {
                    mac: CONST_PRINT_MAC,
                    printed: false,
                    job: '123456789012',
                    blob: CONST_STAR_ALIGN,
                    code: '',
                    fileX: ''
                },
                find: { job: '123456789012' }
            }
        )
        try {
            fetch(`${import.meta.env.VITE_MONGO_URL}`, header)
                .then(response => response.json())
                .then(data => { setPrintResult(data) })
                .catch(error => console.log(error))
        }
        catch (error) {
            console.log(error);
        }

    }

    return [printQ, doPrint, doAlign, printResult];
}

function buildStarBlob(blob: any) {
    return CONST_STARLABEL.replace(/{price}/g, blob.result.price).replace(/{description}/g, parseGPT(blob.result.desc, 0).slice(0, 24)).replace(/{barcode}/g, blob.barcode)
}