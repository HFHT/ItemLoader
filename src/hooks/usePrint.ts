// usePrint places a record in the MongoDB printqueue database, the printer picks it up from there.

import { useState } from "react";
import { parseGPT } from "../helpers/functions";
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

        header.body = JSON.stringify(
            {
                method: 'insertOne',
                db: 'Inventory',
                collection: 'PrintQueue',
                data: {
                    mac: CONST_PRINT_MAC,
                    printed: false,
                    job: userData.barcode,
                    date: Date.now(),
                    desc: parseGPT(userData.result.desc, 0),
                    blob: buildStarBlob(userData, printed),
                    fileX: ''
                }
            }
        )
        try {
            fetch(`${import.meta.env.VITE_MONGO_URL}`, header)
                .then(response => response.json())
                .then(data => { setPrintResult(data); saveCount(printed) })
                .catch(error => console.log(error))
        }
        catch (error) {
            console.log(error);
        }

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
            fetch(`${import.meta.env.VITE_MONGO_URL}`, header)
                .then(response => response.json())
                .then(data => { setPrintResult(data) })
                .catch(error => console.log(error))
        }
        catch (error) {
            console.log(error);
        }

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
                .then(response => response.json())
                .then(data => { setPrintResult(data) })
                .catch(error => console.log(error))
        }
        catch (error) {
            console.log(error);
        }

    }

    return [printQ, doPrint, doAlign, doReprint, printResult];
}

function buildStarBlob(blob: any, printed: number) {
    if (printed === CONST_STAR_ADJUST_CNT) {
        return CONST_STARLABEL_ADJ.replace(/{price}/g, blob.result.price).replace(/{description}/g, parseGPT(blob.result.desc, 0).slice(0, 24)).replace(/{barcode}/g, blob.barcode)
    }
    return CONST_STARLABEL.replace(/{price}/g, blob.result.price).replace(/{description}/g, parseGPT(blob.result.desc, 0).slice(0, 24)).replace(/{barcode}/g, blob.barcode)
}

function saveCount(printed: number) {
    printed === CONST_STAR_ADJUST_CNT ? setCookie('print', 0, 30) : setCookie('print', printed + 1, 30)
}