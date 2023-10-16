// performs a request and resolves with JSON
export const fetchJson = async (url: any, init = {}) => {
    console.log(url, init)
    const res = await fetch(url, init);
    if (!res.ok) {
        throw new Error(`${res.status}: ${await res.text()}`);
    }
    return res.json();
};

// get JSON from multiple URLs and pass to setters
export const fetchAndSetAll = async (collection: any) => {
    // fetch all data first
    const allData = await Promise.all(
        //   collection.map(({ url, init }:any) => console.log(url, init))
        collection.map(({ url, init }: any) => fetchJson(url, init))
    );
    console.log(allData)
    // iterate setters and pass in data
    collection.forEach(({ setter }: any, i: any) => {
        setter(allData[i]);
    });
};