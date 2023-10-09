// useBarCode fetches barcodes from the MongoDB printqueue database.

import { useState } from "react";
import { daysAgo } from "../helpers/dateDB";
import { CONST_PRINT_MAC } from "../constants";

export function useBarCode() {
    const [barcodes, setBarcodes] = useState();
    const [status, setStatus] = useState();


    const getBarcodes = async (doIt:boolean) => {
        if (!doIt) return
        const header: any = { method: "POST", headers: new Headers() };
        //req={"method":"find","db":"Inventory","collection":"Test","find":{"_id":0},"sort":{"_id":1}}

        header.body = JSON.stringify(
            {
                method: 'find',
                db: 'Inventory',
                collection: 'PrintQueue',
                find: { date: { $gt: daysAgo(3)} },
                sort: { date: -1 }
            }
        )
        try {
            fetch(`${import.meta.env.VITE_MONGO_URL}`, header)
                .then(response => response.json())
                .then(data => { setBarcodes(data) })
                .catch(error => console.log(error))
        }
        catch (error) {
            console.log(error);
        }

    }
    async function getStatus(doIt:boolean) {
    // const getStatus = async (doIt:boolean) => {
        if (!doIt) return
        const header: any = { method: "POST", headers: new Headers() };
        //req={"method":"find","db":"Inventory","collection":"Test","find":{"_id":0},"sort":{"_id":1}}

        header.body = JSON.stringify(
            {
                method: 'find',
                db: 'Inventory',
                collection: '_Printers',
                find: { mac: CONST_PRINT_MAC }
            }
        )
        try {
            fetch(`${import.meta.env.VITE_MONGO_URL}`, header)
                .then(response => response.json())
                .then(data => { console.log(data); setStatus(data) })
                .catch(error => console.log(error))
        }
        catch (error) {
            console.log(error);
        }

    }    

    return [barcodes, getBarcodes, status, getStatus];
}
