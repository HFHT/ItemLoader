// Return current date in DB format
export const getCategories = (catObj:any) => {
    var theCats:any = []
    // console.log(catObj)
    catObj.map((cat:any)=> {
        theCats.push(Object.getOwnPropertyNames(cat)[0])
    })
    return theCats
};