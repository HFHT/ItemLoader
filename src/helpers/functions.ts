// Return current date in DB format
export const getCategories = (catObj: any) => {
    var theCats: any = []
    // console.log(catObj)
    catObj.map((cat: any) => {
        theCats.push(Object.getOwnPropertyNames(cat)[0])
    })
    return theCats
};

export const parseGPT = (gpt: string, pos: number) => {
    if (!gpt) return
    let theResult: string = gpt.replace(/[\r\n|\n]+/gm, '')
    if (pos===0) {
        return theResult.slice(8, theResult.search('Descx:'))
    }
    return theResult.slice(theResult.search('Descx:') + 7)
}