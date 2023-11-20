// usePrint places a record in the MongoDB printqueue database, the printer picks it up from there.

import { useState } from "react";
import { CONST_PRINT_MAC, CONST_STARLABEL, CONST_STARLABEL_ADJ, CONST_STAR_ADJUST_CNT, CONST_STAR_ALIGN } from "../constants";
import { getCookie, setCookie } from "../helpers/cookies";

export function usePrint() {
    const [printQ, setPrintQ] = useState();
    const [printResult, setPrintResult] = useState();

    const doPrint = async (userData: any) => {
        // if (!chatGPT) return;
        console.log(userData)
        if (!userData) return;
        const printed = getCookie('print') ? Number(getCookie('print')) : 0
        console.log(printed);

        const header: any = { method: "POST", headers: new Headers() };
        const gptDesc = userData.result.desc[0]
        console.log(gptDesc)
        header.body = JSON.stringify(
            {
                method: 'insertOne',
                db: 'Inventory',
                collection: 'PrintQueue',
                data: {
                    mac: CONST_PRINT_MAC,
                    printed: false,
                    // job: userData.barcode,
                    job: Date.now(),
                    date: Date.now(),
                    bc: userData.barcode,
                    desc: (userData.barcode.slice(-5) + ' ' + gptDesc).slice(0, 35),
                    blob: buildStarBlob(userData, gptDesc, printed),
                    fileX: ''
                }
            }
        )
        try {
            const response = await fetch(`${import.meta.env.VITE_MONGO_URL}`, header);
            if (!response.ok) throw `Barcode print failed with ${response.status}: ${response.statusText}`
            console.log(response);
            const prtResponse = (await response.json());
            console.log(prtResponse);
            setPrintResult(prtResponse);
            saveCount(printed);
        }
        catch (error) {
            console.log(error);
            alert(error);
        }

        // try {
        //     fetch(`${import.meta.env.VITE_MONGO_URL}`, header)
        //         .then(response => response.json())
        //         .then(data => { setPrintResult(data); saveCount(printed) })
        //         .catch(error => console.log(error))
        // }
        // catch (error) {
        //     console.log(error);
        // }

    }

    const doAlign = async (doIt: boolean) => {
        if (!doIt) return
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
            const response = await fetch(`${import.meta.env.VITE_MONGO_URL}`, header);
            console.log(response);
            if (!response.ok) throw `Barcode align failed with ${response.status}: ${response.statusText}`
            const prtResponse = (await response.json());
            console.log(prtResponse);
            setPrintResult(prtResponse);
        }
        catch (error) {
            console.log(error);
            alert(error);
        }


        // try {
        //     fetch(`${import.meta.env.VITE_MONGO_URL}`, header)
        //         .then(response => response.json())
        //         .then(data => { setPrintResult(data) })
        //         .catch(error => console.log(error))
        // }
        // catch (error) {
        //     console.log(error);
        // }

    }

    const doReprint = async (job: string) => {
        const header: any = { method: "POST", headers: new Headers() };
        //req={"method":"updateOne","db":"Inventory","collection":"Test","data":{"a":5},"find":{"_id":0}}

        header.body = JSON.stringify(
            {
                method: 'updateOne',
                db: 'Inventory',
                collection: 'PrintQueue',
                find: { job: job },
                data: { printed: false }
            }
        )
        try {
            fetch(`${import.meta.env.VITE_MONGO_URL}`, header)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    response.json()
                })
                //@ts-ignore
                .then(data => { setPrintResult(data) })
                .catch(error => console.log(error))
        }
        catch (error) {
            console.log(error);
        }

    }

    return [printQ, doPrint, doAlign, doReprint, printResult];
}

function buildStarBlob(blob: any, gptDesc:string, printed: number) {
    if (printed === CONST_STAR_ADJUST_CNT) {
        return CONST_STARLABEL_ADJ.replace(/{price}/g, blob.result.price).replace(/{itemid}/g, blob.barcode.slice(-5)).replace(/{description}/g, gptDesc.slice(0, 26)).replace(/{barcode}/g, blob.barcode)
    }
    return CONST_STARLABEL.replace(/{price}/g, blob.result.price).replace(/{itemid}/g, blob.barcode.slice(-5)).replace(/{description}/g, gptDesc.slice(0, 26)).replace(/{barcode}/g, blob.barcode)
}

function saveCount(printed: number) {
    printed === CONST_STAR_ADJUST_CNT ? setCookie('print', 0, 30) : setCookie('print', printed + 1, 30)
}
