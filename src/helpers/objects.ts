
export const schemaResult = { room: '', prod: '', attr1: '', attr2: '', desc: '', material: '', finish: '', condition: '', conditionAdds: '', price: '', seo: '' }
export const schemaType = { type: '', imgs: '', result: schemaResult }

export const prices = ['$20', '$25', '$30', '$50', '$75', '$100', '$125', '$150', '$175', '$200', '$250', '$300', '$350', '$400'];

export const conditions = ['New', 'Like new', 'Gently used', 'Good condition', 'Some wear']
export const conditionAdds = [' ', 'Fade', 'Scuffs', 'Scratches', 'Stains', 'Cracking', 'Handcrafted', 'Upcycled']
export const collections = ['Treasures']


const mfg: Iidx = {
  Appl: ['Bosch', 'Electrolux', 'Frigidaire', 'GE', 'Kenmore', 'Kitchen Aid', 'LG', 'Maytag', 'Samsung', 'Whirlpool']
}
const types: Iidx = {
  Pwr: ['Electric', 'Gas', 'Other']
}
const finish: Iidx = {
  Appl: ['Black', 'White', 'Stainless'],
  Wood: ['Birch', 'Cherry', 'Maple', 'Mesquite', 'Oak', 'Pine', 'Walnut'],
  Metal: ['Bronze', 'Pewter', 'Nickel'],
  Paint: ['White', 'Black'],
}
const attr: Iidx = {
  Bed: ['Twin', 'Double', 'King', 'California King'],
  Frig: ['Top Freezer', 'Bottom Freezer', 'Side-by-Side', 'French Door', 'Mini/Compact'],
  CabType: ['Base', 'Corner', 'Drawer Base', 'Pantry', 'Sink Base', 'Speciality', 'Wall'],
  CabSize: ['9 in.', '12 in.', '18 in.', '24 in.', '36 in.', '48 in.']
}

const seo: Iidx = {
  Furniture: [' ', 'Antique', 'Art Deco', 'Asian', 'Early American', 'Gothic', 'Industrial', 'Minimalist', 'Mid-Century Modern', 'Mission', 'Modern', 'Nautical', 'Queen Anne', 'Rustic', 'Southwest', 'Traditional', 'Victorian', 'Vintage']
}

export const catType = ['Furniture', 'Appliances', 'Cabinet', 'Housewares', 'Door', 'Lighting', 'Plumbing', 'Tool', 'Window']

export const catApplType = [
  { Climate: { item: [{ AC: { i: 3265 } }, { 'Air Purifier': { i: 3266 } }, { 'Ceiling Fan': { i: 3271 } }, { 'Evaporative Cooler': { i: 3269 } }, { Furnace: { i: 3276 } }, { 'Pedestal Fan': { i: 3272 } }, { 'Space Heater': { i: 3281 } }, { 'Ventilation Fan': { i: 3274 } }, { 'Water Heater': { i: 3302 } }], mfg: [], pwr: [], finish: [], color: [], seo: [] } },
  { Floor: { item: [{ 'Floor Buffer': { i: 3288 } }, { 'Rug Shampooer': { i: 3284 } }, { 'Steam Cleaner': { i: 3283 } }, { 'Steam Mop': { i: 3287 } }, { 'Vacuum Cleaner': { i: 3300 } }], mfg: [], pwr: [], finish: [], color: [], seo: [] } },
  { Household: { item: [{ 'Household Appliance': { i: 3263 } }], mfg: [], pwr: [], finish: [], color: [], seo: [] } },
  { Kitchen: { item: [{ Refigerator: { i: 3649 } }], mfg: mfg.Appl, pwr: types.Pwr, finish: finish.Appl, color: [], seo: [] } },
  { Laundry: { item: [{ 'Clothes Dryer': { i: 3293 } }, { 'Iron/Ironing Board': { i: 3295 } }, { 'Washing Machine': { i: 3298 } }, { 'Washer/Dryer Combo': { i: 3296 } }], mfg: mfg.Appl, pwr: types.Pwr, finish: finish.Appl, color: [], seo: [] } },
  { Outdoor: { item: [{ 'Grill': { i: 0 } }, { 'Misting System': { i: 3279 } }, { 'Patio Heater': { i: 3280 } }], mfg: [], pwr: types.Pwr, finish: finish.Appl, color: [], seo: [] } },

]

export const catCabType = [
  { Bath: { item: [{ Vanity: { i: 2085 } }], finish: finish.Wood, color: finish.Paint, seo: [] } },
  { Kitchen: { item: [{ Cabinet: { i: 2078 } }, { Island: { i: 2090 } }, { "Sink Base": { i: 2078 } }], finish: finish.Wood, color: finish.Paint, seo: [] } },
  { Storage: { item: [{ Chest: { i: 2082 } }], finish: finish.Wood, color: finish.Paint, seo: [] } },

]
export const catDoorType = []
export const catFurnType = [
  { Baby: { item: [{ Bassinet: { i: 2053 } }, { Bed: { i: 2058 } }, { 'Changing Table': { i: 2054 } }, { Crib: { i: 2058 } }, { 'High Chair': { i: 2060 } }, { 'Toy Chest': { i: 2084 } }] } },
  { Bedroom: { item: [{ Bed: { a: [attr.Bed], i: 2063 } }, { 'Bed Frame': { a: [attr.Bed], i: 2063 } }, { 'Bedroom Set': { a: [attr.Bed], i: 2111, s: true } }, { Dresser: { i: 2075 } }, { Foundation: { a: [attr.Bed], i: 2065 } }, { 'Head/Foot': { a: [attr.Bed], i: 2064 } }, { Mattress: { a: [attr.Bed], i: 2066 } }, { Nightstand: { i: 0, s: true } }, { Shelving: { i: 0 } }, { Wardrobe: { i: 2072 } }], finish: finish.Wood, color: finish.Paint, seo: seo.Furniture } },
  { Bathroom: { item: [{ 'Bath Set': { i: 2110, s: true } }, { Cabinet: { i: 0 } }, { 'Bathroom Mirror': { i: 0 } }, { 'Bath Organizer': { i: 0 } }, { 'Shelving': { i: 0 } }, { 'Vanity': { i: 2070 } }], finish: finish.Wood, color: finish.Paint, seo: seo.Furniture } },
  { "Dining Room": { item: [{ Barstool: { i: 0, s: true } }, { Buffet: { i: 2073 } }, { Cart: { i: 2091 } }, { 'China Cabinet': { i: 2074 } }, { 'Corner Cabinet': { i: 0 } }, { 'Hope Chest': { i: 2083 } }, { 'Liquor Cabinet': { i: 2088 } }, { 'Dining Table': { i: 2165 } }, { 'Dining Chairs': { i: 0, s: true } }, { 'Dining Room Set': { s: true, i: 2112 } }, { 'Wine Rack': { i: 2089 } }], finish: finish.Wood, color: finish.Paint, seo: seo.Furniture } },
  { Kitchen: { item: [{ Bench: { i: 2068 } }], finish: finish.Wood, color: finish.Paint, seo: seo.Furniture } },
  { "Living Room": { item: [{ 'Arm Chair': { i: 2096 } }, { 'Bean Bag Chair': { i: 2097 } }, { 'Coffee Table': { i: 0 } }, { 'End Table': { i: 0, s: true } }, { 'Media Center': { i: 2080 } }, { 'Living Room Set': { i: 2113, s: true } }, { Recliner: { i: 0 } }, { Sectional: { i: 0, s: true } }, { Shelving: { i: 0 } }, { Sofa: { i: 0 } }, { Storage: { i: 2081 } }, { 'TV Stand': { i: 0 } }], finish: finish.Wood, color: finish.Paint, seo: seo.Furniture } },
  { Office: { item: [{ Bookcase: { i: 0 } }, { Credenza: { i: 0 } }, { Desk: { i: 0 } }, { 'File Cabinet': { i: 2076 } }, { 'Office Chair': { i: 0 } }, { 'Office Set': { i: 2076, s: true } }, { 'Printer Stand': { i: 0 } }], finish: finish.Wood, color: finish.Paint, seo: seo.Furniture } },
  { Patio: { item: [{ Hammock: { i: 3869 } }, { 'Outdoor Bed': { i: 2131 } }, { 'Outdoor Sofa': { i: 2138 } }, { 'Outdoor Storage Box': { i: 2140 } }, { 'Outdoor Structure': { i: 3874 } }, { 'Patio Chairs': { i: 2136, s: true } }, { 'Patio Set': { i: 2132, s: true } }, { 'Sunshade': { i: 3885 } }], finish: finish.Wood, color: finish.Paint, seo: seo.Furniture } },
]
//Taxonomy 3894
export const catToolType = []

export const catHouseType = []




export const catLightType = []
export const catPlumbType = []
export const catWindType = []




export const dimension: Iidx = {
  "CH": ['18.5', '25', '31.5', '35'],
  "CW": ['9', '12', '21', '24', '30', '33', '36', '48'],
  "CD": ['12', '28.5', '30'],
  "Door": ['24x80', '30x80', '32x80', '36x80'],
  "WH": ['12', '18', '24', '30', '36', '42', '48', '54', '60']
}


