
export const CONST_PRINT_MAC = '00:11:62:0e:2f:bc'

// export const CONST_STAR_ALIGN = '[feed: tearbar]\[feed: length 16mm]'
export const CONST_STAR_ALIGN = '[feed: length 24mm]'


export const CONST_STARLABEL = '[align: center][mag: w 2; h 2]{price}[mag] {description}\[barcode: type code128; data {barcode}; height 10mm; hri][feed: length 7mm]'

export const CONST_DISCOUNTS = ['red-collection','yellow-collection', 'blue-discount-collection','green-collection']

export const CONST_GPT_PROD = 'Write an informative, two or three sentences, product description for:'

export const CONST_GPT_TITLE = 'Make this into a product title,'

export const CONST_GPT_PROMPT = 'Write a product title and a product description. Precede the product title with "Titlex:" and the product description with "Descx:".\n The product title keywords are: {seo}, {products}, {sqft}.\n Write an informative, two or three sentences, product description for {products} include keywords: {condition} with {flaw}, {seo},  {pieces}, {sqft}, {attr1}, {attr2}, {finish}'