// useBarCode fetches barcodes from the MongoDB printqueue database.

import { useState } from "react";
import { daysAgo } from "../helpers/dateDB";
import { CONST_PRINT_MAC } from "../constants";
import { fetchAndSetAll } from "../helpers/fetchAndSetAll";

export function useBarCode() {
    const [barcodes, setBarcodes] = useState();
    const [status, setStatus] = useState();


    const getBarcodes = async (doIt: boolean) => {
        if (!doIt) return
        const header: any = { method: "POST", headers: new Headers() };
        //req={"method":"find","db":"Inventory","collection":"Test","find":{"_id":0},"sort":{"_id":1}}
        const headerQ: any = {
            ...header, body: JSON.stringify(
                {
                    method: 'find',
                    db: 'Inventory',
                    collection: 'PrintQueue',
                    find: { date: { $gt: daysAgo(3) } },
                    sort: { date: -1 }
                }
            )
        }
        const headerS: any = {
            ...header, body: JSON.stringify(
                {
                    method: 'find',
                    db: 'Inventory',
                    collection: '_Printers',
                    find: { mac: CONST_PRINT_MAC }
                }
            )
        }


        try {
            fetchAndSetAll([
                {
                    url: `${import.meta.env.VITE_MONGO_URL}`,
                    init: headerQ,
                    setter: setBarcodes
                },
                {
                    url: `${import.meta.env.VITE_MONGO_URL}`,
                    init: headerS,
                    setter: setStatus
                }
            ])
        }
        catch (error) { console.log(error); alert('Read of Barcodes failed: ' + error); }
    }
    return [barcodes, getBarcodes, status];
}
