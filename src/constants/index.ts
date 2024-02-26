
export const CONST_PRINT_MAC = '00:11:62:0e:2f:bc'
export const CONST_LOGO_IMAGE = 'HabiStorelogo_stacked_black.png'
// export const CONST_STAR_ALIGN = '[feed: tearbar]\[feed: length 16mm]'
export const CONST_STAR_ALIGN = '[feed: length 24mm]'

export const CONST_STAR_ADJUST_CNT = 4

export const CONST_STARLABEL = '[align: center][mag: w 2; h 2]{price}[mag] {itemid} {description}\[barcode: type code128; data {barcode}; height 10mm; hri][feed: length 6mm]'
export const CONST_STARLABEL_ADJ = '[align: center][mag: w 2; h 2]{price}[mag] {itemid} {description}\[barcode: type code128; data {barcode}; height 10mm; hri][feed: length 7mm]'

export const CONST_DISCOUNTS = ['blue-discount-collection', 'yellow-collection', 'red-collection', 'green-collection']
export const CONST_DISCOUNT_COLORS = [{bg:'#194b9d'}, {bg:'#FFCC00'}, {bg:'#A63740'}, {bg:'#43B02A'}]


export const CONST_GPT_PROD = 'Write an informative, two or three sentences product description for {products} include keywords: {condition} with {flaw}, {seo},  {pieces}, {sqft}, {attr1}, {attr2}, {fabric}, {finish}'

export const CONST_GPT_TITLE = 'Write a short product title for {mfg} {products} which includes: {pieces} {seo} {fabric} {finish} {sqft}'

export const CONST_GPT_PROMPT = 'Write a product title and a product description. Precede the product title with "Titlex:" and the product description with "Descx:".\n Include only the following keywords: {seo}, {products}, {sqft}.\n Write an informative, two or three sentences, product description for {products} include keywords: {condition} with {flaw}, {seo},  {pieces}, {sqft}, {attr1}, {attr2}, {finish}'

// The following are now unused, being kept for now just in case of problems fetching collections
export const CONST_COLLECTIONS = {
    "appliances": 458029072692,
    "art-home-decor": 458559619380,
    "bathroom": 458762846516,
    "bedroom": 458559291700,
    "blue-discount-collection": 458699637044,
    "building-materials": 458029302068,
    "cabinets": 458029236532,
    "dining-room": 458559357236,
    "doors-windows": 458559979828,
    "featured-collection": 460037718324,
    "flooring": 458560045364,
    "green-collection": 457776300340,
    "heating-cooling": 458559914292,
    "furniture": 458028908852,
    "home-improvement": 458560569652,
    "frontpage": 457649455412,
    "household-appliances": 458559947060,
    "kitchen-appliances": 458559815988,
    "kitchen": 458559422772,
    "laundy-appliances": 458559881524,
    "lighting": 458029334836,
    "living-room": 458333454644,
    "newly-added-items": 457779544372,
    "office-furniture": 458559521076,
    "paint": 458560373044,
    "patio-outdoor-living": 458559652148,
    "plumbing": 458029433140,
    "priced-items": 460192481588,
    "purchased-products": 459866800436,
    "red-collection": 457779183924,
    "rugs": 458559684916,
    "sporting-goods": 458559717684,
    "yellow-tags": 459019026740,
    "tags": 459018273076,
    "tools": 458560110900,
    "featured-items": 457779642676,
    "yellow-collection": 457778987316
}
