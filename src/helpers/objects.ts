
export const schemaResult = { room: '', prod: '', prods: [], mfg: '', pwr: '', attr1: '', attr2: '', desc: '', col: [''], material: '', finish: '', condition: '', conditionAdds: '', price: '', seo: '' }
export const schemaType = { type: '', idx: -1, imgs: '', result: schemaResult }

export const prices = ['$5', '$10', '$15', '$20', '$25', '$30', '$50', '$75', '$100', '$125', '$150', '$175', '$200', '$250', '$300', '$350', '$400'];

export const conditions = ['New', 'Like new', 'Gently used', 'Good condition', 'Some wear']
export const conditionAdds = [' ', 'Fade', 'Scuffs', 'Scratches', 'Stains', 'Cracking', 'Handcrafted', 'Upcycled']
export const collections = ['Treasures']


const mfg: Iidx = {
  Appl: [' ', 'Amana', 'Bosch', 'Cafe', 'Danby', 'Electrolux', 'Frigidaire', 'GE', 'Haier', 'Igloo', 'Kenmore', 'KitchenAid', 'LG', 'Maytag', 'Panasonic', 'Samsung', 'Subzero', 'Whirlpool'],
  Tool: [' ', 'Bosch', 'Black & Decker', 'Craftsman', 'Dewalt', 'Dremel', 'Festool', 'Hilti', 'Hitachi', 'Homelite', 'Kobalt', 'Makita', 'Milwaukee', 'Porter Cable', 'Powermatic', 'Rigid', 'Ryobi', 'Skil', 'Worx'],
  Yard: [' ', 'Black & Decker', 'Briggs & Stratton', 'Cub Cadet', 'Duromax', 'ECHO', 'Generac', 'Greenworks', 'Honda', 'John Deere', 'Legend Force', 'Milwaukee', 'Ridgid', 'Ryobi', 'Sun Joe', 'Toro', 'Troy-Bilt', 'Westinghouse', 'YardForce']
}
const types: Iidx = {
  Pwr: [' ', 'Electric', 'Gas', 'Propane'],
  Tool: [' ', 'Battery', 'Pneumatic', 'Wired'],
  Yard: [' ', 'Battery', 'Gas', 'Pneumatic', 'Wired']
}
const finish: Iidx = {
  Appl: ['Black', 'White', 'Stainless'],
  Wood: ['Bamboo', 'Birch', 'Cedar', 'Cherry', 'Hickory', 'Maple', 'Mahogany', 'Mesquite', 'Pine', 'Red-oak', 'Redwood', 'Rosewood', 'Walnut', 'White-oak'],
  Finish: ['Bamboo Finish', 'Birch Finish', 'Cedar Finish', 'Cherry Finish', 'Hickory Finish', 'Maple Finish', 'Mahogany Finish', 'Mesquite Finish', 'Pine Finish', 'Red-oak Finish', 'Redwood Finish', 'Rosewood Finish', 'Walnut Finish', 'White-oak Finish'],
  Metal: ['Aluminum', 'Chrome', 'Copper', 'Brass', 'Bronze', 'Gold', 'Iron', 'Nickel', 'Pewter', 'Steel'],
  Paint: ['White', 'Black', 'Violet', 'Blue', 'Cyan', 'Green', 'Yellow', 'Orange', 'Red'],
}
const attr: Iidx = {
  Bed: ['Twin', 'Full', 'Double', 'King', 'California King'],
  Frig: ['Top Freezer', 'Bottom Freezer', 'Side-by-Side', 'French Door', 'Mini/Compact'],
  CabType: ['Base', 'Corner', 'Drawer Base', 'Pantry', 'Sink Base', 'Speciality', 'Wall'],
  CabSize: ['9 in.', '12 in.', '18 in.', '24 in.', '36 in.', '48 in.']
}

const seo: Iidx = {
  Furniture: [' ', 'Antique', 'Art Deco', 'Asian', 'Early American', 'Gothic', 'Industrial', 'Minimalist', 'Mid-Century Modern', 'Mission', 'Modern', 'Nautical', 'Queen Anne', 'Rustic', 'Southwest', 'Traditional', 'Victorian', 'Vintage'],
  Frig: [' ', 'Ice maker', 'Top Freezer', 'Bottom Freezer', 'French Door', 'Side by Side'],
  WashDry: [' ', 'Top loader', 'Front loader'],
  Lighting: [' ', 'xyz', '123'],
  Rug: [' ', 'Abstract', 'Boho', 'Floral', 'Geometric', 'Medallion', 'Modern', 'Moroccan', 'Native American', 'Oriental', 'Persian', 'Solid', 'Vintage'],
  Floor: [' '],
  Tool: [' ']
}

export const catType = ['Furniture', 'Appliances', 'Cabinet', 'Flooring', 'Housewares', 'Door', 'Lighting', 'Plumbing', 'Tool', 'Window']

export const catApplType = [
  { Climate: { col: ['appliances'], item: [{ AC: { i: 3265 } }, { 'Air Purifier': { i: 3266 } }, { 'Evaporative Cooler': { i: 3269 } }, { Furnace: { i: 3276 } }, { 'Space Heater': { i: 3281 } }, { 'Ventilation Fan': { i: 3274 } }, { 'Water Heater': { i: 3302 } }], mfg: mfg.Appl, pwr: types.Pwr, wood: '', finish: '', color: '', metal: '', seo: [' '] } },
  { Floor: { col: ['appliances'], item: [{ 'Floor Buffer': { i: 3288 } }, { 'Rug Shampooer': { i: 3284 } }, { 'Steam Cleaner': { i: 3283 } }, { 'Steam Mop': { i: 3287 } }, { 'Vacuum Cleaner': { i: 3300 } }], mfg: mfg.Appl, pwr: '', wood: '', finish: '', color: '', metal: '', seo: [' '] } },
  { Household: { col: ['appliances'], item: [{ 'Coffee Maker': { i: 0 } }, { 'Griddle': { i: 0 } }, { 'Indoor Grill': { i: 0 } }, { 'Iron/Ironing Board': { i: 3295 } }, { 'Mixer': { i: 0 } }, { 'Waffle Maker': { i: 0 } },], mfg: mfg.Appl, pwr: '', finish: finish.Appl, color: '', metal: '', seo: [' '] } },
  { Kitchen: { col: ['appliances'], item: [{ 'Dish Washer': { i: 0 } }, { Refigerator: { i: 3649 } }], mfg: mfg.Appl, pwr: types.Pwr, wood: '', finish: finish.Appl, color: '', metal: '', seo: seo.Frig } },
  { Laundry: { col: ['appliances'], item: [{ 'Clothes Dryer': { i: 3293 } }, { 'Washing Machine': { i: 3298 } }, { 'Washer/Dryer Combo': { i: 3296 } }], mfg: mfg.Appl, pwr: types.Pwr, wood: '', finish: finish.Appl, color: '', seo: seo.WashDry } },
  { Outdoor: { col: ['appliances'], item: [{ 'Grill': { i: 0 } }, { 'Misting System': { i: 3279 } }, { 'Patio Heater': { i: 3280 } }], mfg: '', pwr: types.Pwr, wood: '', finish: finish.Appl, color: finish.Paint, seo: [' '] } },

]

export const catCabType = [
  { Bath: { col: ['home-improvement', 'cabinets'], item: [{ Vanity: { i: 2085 } }], finish: finish.Wood, color: finish.Paint, seo: [] } },
  { Kitchen: { col: ['home-improvement', 'cabinets'], item: [{ Cabinet: { i: 2078 } }, { Island: { i: 2090 } }, { "Sink Base": { i: 2078 } }], finish: finish.Wood, color: finish.Paint, seo: [] } },
  { Storage: { col: ['home-improvement', 'cabinets'], item: [{ Chest: { i: 2082 } }], finish: finish.Wood, color: finish.Paint, seo: [] } },

]
export const catDoorType = []
export const catFurnType = [
  { Baby: { col: ['furniture', 'bedroom'], item: [{ Bassinet: { i: 2053 } }, { Bed: { i: 2058 } }, { 'Changing Table': { i: 2054 } }, { Crib: { i: 2058 } }, { 'High Chair': { i: 2060 } }, { 'Toy Chest': { i: 2084 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, seo: seo.Furniture } },
  { Bedroom: { col: ['furniture', 'bedroom'], item: [{ Bed: { a: [attr.Bed], i: 2063 } }, { 'Bed Frame': { a: [attr.Bed], i: 2063 } }, { Dresser: { i: 2075 } }, { Foundation: { a: [attr.Bed], i: 2065 } }, { 'Head/Foot': { a: [attr.Bed], i: 2064 } }, { Mattress: { a: [attr.Bed], i: 2066 } }, { Nightstand: { i: 0, s: true } }, { Shelving: { i: 0 } }, { Wardrobe: { i: 2072 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, seo: seo.Furniture } },
  { Bathroom: { col: ['furniture', 'bathroom'], item: [{ 'Bath Set': { i: 2110, s: true } }, { Cabinet: { i: 0 } }, { 'Bathroom Mirror': { i: 0 } }, { 'Bath Organizer': { i: 0 } }, { 'Shelving': { i: 0 } }, { 'Vanity': { i: 2070 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, seo: seo.Furniture } },
  { "Dining Room": { col: ['furniture', 'dining-room'], item: [{ Barstool: { i: 0, s: true } }, { Buffet: { i: 2073 } }, { Cart: { i: 2091 } }, { 'China Cabinet': { i: 2074 } }, { 'Corner Cabinet': { i: 0 } }, { 'Hope Chest': { i: 2083 } }, { 'Liquor Cabinet': { i: 2088 } }, { 'Dining Table': { i: 2165 } }, { 'Dining Chairs': { i: 0, s: true } }, { 'Wine Rack': { i: 2089 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, seo: seo.Furniture } },
  { Kitchen: { col: ['furniture', 'kitchen'], item: [{ Barstool: { i: 0, s: true } }, { Bench: { i: 2068 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, seo: seo.Furniture } },
  { "Living Room": { col: ['furniture', 'living-room'], item: [{ 'Arm Chair': { i: 2096 } }, { 'Bean Bag Chair': { i: 2097 } }, { 'Coffee Table': { i: 0 } }, { 'End Table': { i: 0, s: true } }, { 'Media Center': { i: 2080 } }, { Recliner: { i: 0 } }, { Sectional: { i: 0, s: true } }, { Shelving: { i: 0 } }, { Sofa: { i: 0 } }, { Storage: { i: 2081 } }, { 'TV Stand': { i: 0 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, seo: seo.Furniture } },
  { Office: { col: ['furniture', 'office-furniture'], item: [{ Bookcase: { i: 0 } }, { Credenza: { i: 0 } }, { Desk: { i: 0 } }, { 'File Cabinet': { i: 2076 } }, { 'Office Chair': { i: 0 } }, { 'Printer Stand': { i: 0 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, seo: seo.Furniture } },
  { Patio: { col: ['furniture', 'patio-outdoor-living'], item: [{ Hammock: { i: 3869 } }, { 'Outdoor Bed': { i: 2131 } }, { 'Outdoor Sofa': { i: 2138 } }, { 'Outdoor Storage Box': { i: 2140 } }, { 'Outdoor Structure': { i: 3874 } }, { 'Patio Chairs': { i: 2136, s: true } }, { 'Patio Table': { i: 2136, s: true } }, { 'Sunshade': { i: 3885 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, seo: seo.Furniture } },
]
//Taxonomy 3894
export const catToolType = [
  { Drill: { col: ['tools', 'building-materials'], item: [{ 'Drill': { i: 0 } }, { 'Driver': { i: 0 } }, { 'Electic Screwdriver': { i: 0 } }, { 'Hammer Drill': { i: 0 } }, { 'Impact Drill': { i: 0 } }, { 'Screw Gun': { i: 0 } }], mfg: mfg.Tool, pwr: types.Tool, wood: '', finish: '', color: '', metal: '', seo: seo.Tool } },
  { 'Nail Gun': { col: ['tools', 'building-materials'], item: [{ 'Framing Nailer': { i: 0 } }, { 'Floor Nailer': { i: 0 } }, { 'Brad Nailer': { i: 0 } }, { 'Roofing Nailer': { i: 0 } }], mfg: mfg.Tool, pwr: types.Tool, wood: '', finish: '', color: '', metal: '', seo: seo.Tool } },

  { 'Power Tool': { col: ['tools', 'building-materials'], item: [{ 'Demolition Hammer': { i: 0 } }, { 'Jack-hammer': { i: 0 } }, { 'Lathe': { i: 0 } }, { 'Oscillating Tool': { i: 0 } }, { 'Rotary Tool': { i: 0 } }], mfg: mfg.Tool, pwr: types.Tool, wood: '', finish: '', color: '', metal: '', seo: seo.Tool } },
  { Sander: { col: ['tools', 'building-materials'], item: [{ 'Belt Sander': { i: 0 } }, { 'Palm Sander': { i: 0 } }, { 'Orbital Sander': { i: 0 } }, { 'Angle Grinder': { i: 0 } }, { 'Bench Grinder': { i: 0 } }], mfg: mfg.Tool, pwr: types.Tool, wood: '', finish: '', color: '', metal: '', seo: seo.Tool } },
  { Saw: { col: ['tools', 'building-materials'], item: [{ 'Band Saw': { i: 0 } }, { 'Chop Saw': { i: 0 } }, { 'Circular Saw': { i: 0 } }, { 'Folding Table Saw': { i: 0 } }, { 'Jig Saw': { i: 0 } }, { 'Miter Saw': { i: 0 } }, { 'Radial Arm Saw': { i: 0 } }, { 'Reciprocating Saw': { i: 0 } }, { 'Table Saw': { i: 0 } }], mfg: mfg.Tool, pwr: types.Tool, wood: '', finish: '', color: '', metal: '', seo: seo.Tool } },
  { Yard: { col: ['tools', 'building-materials'], item: [{ 'Compressor': { i: 0 } }, { 'Generator': { i: 0 } }, { 'Riding Mower': { i: 0 } }, { 'Lawn Mower': { i: 0 } }, { 'Leaf Blower': { i: 0 } }, { 'Compacter': { i: 0 } }, { 'Cultivator': { i: 0 } }, { 'Auger': { i: 0 } }, { 'Pressure Washer': { i: 0 } }, { 'Pole Saw': { i: 0 } }, { 'Chainsaw': { i: 0 } }, { 'Edger': { i: 0 } }, { 'Hedge Trimmer': { i: 0 } }, { 'String Trimmer': { i: 0 } }, { 'Push Mower': { i: 0 } }, { 'Reciprocating Saw': { i: 0 } }, { 'Table Saw': { i: 0 } }], mfg: mfg.Yard, pwr: types.Yard, wood: '', finish: '', color: '', metal: '', seo: seo.Tool } },

]

export const catHouseType = [
  { Bathroom: { col: ['Plumbing', 'building-materials'], item: [{ 'Toilet': { i: 0 } }, { 'Bidet': { i: 0 } }, { 'Faucet': { i: 0 } }, { 'Pedestal Sink': { i: 0 } }, { 'Sink': { i: 0 } }, { 'Vessel Sink': { i: 0 } }, { 'Vanity Top': { i: 0 } }], mfg: '', pwr: '', wood: '', finish: '', color: finish.Paint, metal: finish.Metal, seo: seo.Lighting } },

]

export const catFloorType = [
  { Flooring: { col: ['flooring', 'building-materials'], item: [{ 'Laminate Flooring': { i: 0 } }, { 'Hardwood Flooring': { i: 0 } }, { 'Tile Flooring': { i: 0 } }, { 'Vinyl Flooring': { i: 0 } }], mfg: '', pwr: '', wood: finish.Wood, finish: '', color: finish.Paint, metal: '', seo: seo.Floor } },
  { Rug: { col: ['furniture', 'rugs'], item: [{ 'Area Rug': { i: 0 } }, { 'Mat': { i: 0 } }, { 'Outdoor Rug': { i: 0 } }, { 'Runner Rug': { i: 0 } }], mfg: '', pwr: '', wood: '', finish: '', color: finish.Paint, metal: '', seo: seo.Rug } },

]





export const catLightType = [
  { Fans: { col: ['lighting'], item: [{ 'Box Fan': { i: 0 } }, { 'Ceiling Fan': { i: 3271 } }, { 'Floor Fan': { i: 0 } }, { 'Industrial Fan': { i: 3271 } }, { 'Pedestal Fan': { i: 3272 } }, { 'Tower Fan': { i: 0 } }], mfg: '', pwr: '', wood: '', finish: '', color: finish.Paint, metal: finish.Metal, seo: seo.Lighting } },
  { Ceiling: { col: ['lighting'], item: [{ 'Flush Mount': { i: 0 } }, { 'Chandelier': { i: 0 } }, { 'Pendant': { i: 0 } }, { 'Track light': { i: 0 } }], mfg: '', pwr: '', wood: '', finish: '', color: finish.Paint, metal: finish.Metal, seo: seo.Lighting } },
  { Wall: { col: ['lighting'], item: [{ 'Sconce': { i: 0 } }, { 'Vanity': { i: 0 } }], mfg: '', pwr: '', wood: '', finish: '', color: finish.Paint, metal: finish.Metal, seo: seo.Lighting } },
  { Outdoor: { col: ['lighting'], item: [{ 'Deck light': { i: 0 } }, { 'Landscape light': { i: 0 } }, { 'Security light': { i: 0 } }, { 'Wall light': { i: 0 } }], mfg: '', pwr: '', wood: '', finish: '', color: finish.Paint, metal: finish.Metal, seo: seo.Lighting } },
  { Lamp: { col: ['lighting'], item: [{ 'Table Lamp': { i: 0 } }, { 'Desk Lamp': { i: 0 } }, { 'Floor Lamp': { i: 0 } }, { 'Wall light': { i: 0 } }], mfg: '', pwr: '', wood: '', finish: '', color: finish.Paint, metal: finish.Metal, seo: seo.Lighting } },
  { Accent: { col: ['lighting'], item: [{ 'Night Light': { i: 0 } }, { 'Cabinet Light': { i: 0 } }, { 'Strip light': { i: 0 } }, { 'Puck light': { i: 0 } }], mfg: '', pwr: '', wood: '', finish: '', color: finish.Paint, metal: finish.Metal, seo: seo.Lighting } },
  { Commercial: { col: ['lighting'], item: [{ 'Shop Light': { i: 0 } }, { 'LED Panel Light': { i: 0 } }, { 'Strip light': { i: 0 } }, { 'Work Light': { i: 0 } }], mfg: '', pwr: '', wood: '', finish: '', color: finish.Paint, metal: finish.Metal, seo: seo.Lighting } },

]
export const catPlumbType = [
  { Bathroom: { col: ['Plumbing', 'building-materials'], item: [{ 'Toilet': { i: 0 } }, { 'Bidet': { i: 0 } }, { 'Faucet': { i: 0 } }, { 'Pedestal Sink': { i: 0 } }, { 'Sink': { i: 0 } }, { 'Vessel Sink': { i: 0 } }, { 'Vanity Top': { i: 0 } }], mfg: '', pwr: '', wood: '', finish: '', color: finish.Paint, metal: finish.Metal, seo: seo.Lighting } },
  { Kitchen: { col: ['Plumbing', 'building-materials'], item: [{ 'Faucet': { i: 0 } }, { 'Sink': { i: 0 } }], mfg: '', pwr: '', wood: '', finish: '', color: finish.Paint, metal: finish.Metal, seo: seo.Lighting } },
]
export const catWindType = []




export const dimension: Iidx = {
  "CH": ['18.5', '25', '31.5', '35'],
  "CW": ['9', '12', '21', '24', '30', '33', '36', '48'],
  "CD": ['12', '28.5', '30'],
  "Door": ['24x80', '30x80', '32x80', '36x80'],
  "WH": ['12', '18', '24', '30', '36', '42', '48', '54', '60']
}


