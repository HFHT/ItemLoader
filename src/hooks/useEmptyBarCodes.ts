// useBarCode fetches barcodes from the MongoDB printqueue database.

import { useState } from "react";
import { daysAgo } from "../helpers/dateDB";
import { CONST_PRINT_MAC } from "../constants";
import { fetchAndSetAll } from "../helpers/fetchAndSetAll";

export function useEmptyBarCodes() {
    const [status, setStatus] = useState();


    const delBarcodes = async (doIt: boolean) => {
        if (!doIt) return
        const header: any = { method: "POST", headers: new Headers() };
        //req={"method":"deleteMany","db":"Inventory","collection":"Test","data":{"a": {$gt: 3}}}  {} removes everything

        const headerS: any = {
            ...header, body: JSON.stringify(
                {
                    method: 'deleteMany',
                    db: 'Inventory',
                    collection: 'PrintQueue',
                    data: { keep: { $exists: false } }
                }
            )
        }
        try {
            fetchAndSetAll([
                {
                    url: `${import.meta.env.VITE_MONGO_URL}`,
                    init: headerS,
                    setter: setStatus
                }
            ])
        }
        catch (error) { console.log(error); alert('Delete of Barcodes failed: ' + error); }
    }
    return [delBarcodes, status];
}
