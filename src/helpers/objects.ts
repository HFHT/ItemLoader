
export const schemaResult = { room: '', prod: '', prods: [], mfg: '', pwr: '', attr1: '', attr2: '', desc: '', col: [''], material: '', finish: '', fabric: '', condition: '', conditionAdds: '', price: '', seo: '', src: '', new: true }
export const schemaType = { type: '', idx: -1, imgs: '', col: { c: '', i: -1 }, barcode: '', result: schemaResult }

// export const prices = ['$1', '$1.25', '$1.50', '$1.75', '$2', '$2.25', '$2.50', '$2.75', '$3.00', '$3.25', '$3.50', '$3.75', '$4', '$4.50', '$5', '$6', '$7', '$8', '$9', '$10', '$12.50', '$15', '$20', '$25', '$30', '$40', '$50', '$60', '$75', '$100', '$125', '$150', '$175', '$200', '$250', '$300', '$350', '$400'];
export const prices = ['$10', '$12.50', '$15', '$20', '$25', '$30', '$40', '$45', '$50', '$55', '$60', '$75', '$99', '$125', '$149', '$175', '$199', '$249', '$299', '$349', '$399', '$449', '$499'];

export const conditions = ['New', 'Like new', 'Gently used', 'Good condition', 'Some wear']
export const conditionAdds = [' ', 'Fading', 'Scuffs', 'Scratches', 'Stains', 'Cracking', 'Handcrafted', 'Upcycled']
export const collections = ['Treasures']

export const sources = [' ', 'Corporate', 'Priority', 'Other']
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
  Appl: ['Black', 'White', 'Red', 'Brown', 'Stainless'],
  Wood: ['Real Bamboo', 'Birch Hardwood', 'Cedar Hardwood', 'Cherry Hardwood', 'Hickory Hardwood', 'Maple Hardwood', 'Mahogany Hardwood', 'Mesquite Hardwood', 'Pine Hardwood', 'Red-oak Hardwood', 'Redwood Hardwood', 'Rosewood Hardwood', 'Walnut Hardwood', 'White-oak Hardwood'],
  Fabric: [' ', 'Faux Leather', 'Genuine Leather', 'Mircofiber', 'Velvet'],
  Finish: ['Bamboo Finish', 'Birch Finish', 'Cedar Finish', 'Cherry Finish', 'Hickory Finish', 'Maple Finish', 'Mahogany Finish', 'Mesquite Finish', 'Pine Finish', 'Red-oak Finish', 'Redwood Finish', 'Rosewood Finish', 'Walnut Finish', 'White-oak Finish'],
  Metal: ['Aluminum', 'Chrome', 'Copper', 'Brass', 'Bronze', 'Gold', 'Iron', 'Nickel', 'Pewter', 'Steel'],
  Window: ['Aluminum', 'Vinyl'],
  Paint: ['White', 'Black', 'Violet', 'Blue', 'Cyan', 'Green', 'Yellow', 'Orange', 'Red'],
}
const attr: Iidx = {
  Bed: ['Child', 'Twin', 'Full', 'Double', 'King', 'California King'],
  Frig: ['Top Freezer', 'Bottom Freezer', 'Side-by-Side', 'French Door', 'Mini/Compact'],
  CabType: [' ', '1-Drawer', '2-Drawer', '3-Drawer', '4-Drawer'],
  CabSize: ['9 in.', '12 in.', '18 in.', '24 in.', '36 in.', '48 in.'],
  RugLength: [' ', '3 feet long', '4 feet long', '6 feet long', '8 feet long', '10 feet long', '12 feet long', '14 feet long', '15 feet long', '16 feet long'],
  RugWidth: [' ', '2 feet wide', '2 1/2 feet wide', '3 feet wide', '4 feet wide', '6 feet wide', '8 feet wide', '9 feet wide', '10 feet wide'],
  DoorWidth: [' ', '18 inch wide', '24 inch wide', '28 inch wide', '30 inch wide', '32 inch wide', '34 inch wide', '36 inch wide'],
  DoorHeight: [' ', '80 inch tall', '90 inch tall', '96 inch tall'],
  WindowWidth: [' ', '24 inch wide', '36 inch wide', '48 inch wide', '60 inch wide', '72 inch wide', '96 inch wide'],
  WindowHeight: [' ', '12 inch tall', '18 inch tall', '24 inch tall', '36 inch tall', '48 inch tall', '52 inch tall', '60 inch tall', '62 inch tall', '72 inch tall', '96 inch tall'],
  Floor: [' ', '10 sq ft', '15 sq ft', '20 sq ft', '25 sq ft', '30 sq ft', '40 sq ft', '50 sq ft', '60 sq ft', '70 sq ft', '80 sq ft', '90 sq ft', 'over 100 sq ft']
}

const seo: Iidx = {
  Furniture: [' ', 'Antique', 'Art Deco', 'Asian', 'Early American', 'Gothic', 'Industrial', 'Minimalist', 'Mid-Century Modern', 'Mission', 'Modern', 'Nautical', 'Queen Anne', 'Rustic', 'Southwest', 'Traditional', 'Victorian', 'Vintage'],
  Frig: [' ', 'Ice maker', 'Top Freezer', 'Bottom Freezer', 'French Door', 'Side by Side'],
  WashDry: [' ', 'Top loader', 'Front loader'],
  Lighting: [' ', 'Crystal', 'Farmhouse', 'Industrial', 'Modern', 'Rustic', 'Traditional', 'Western'],
  Rug: [' ', 'Abstract', 'Boho', 'Floral', 'Geometric', 'Medallion', 'Modern', 'Moroccan', 'Native American', 'Oriental', 'Persian', 'Solid', 'Vintage'],
  Floor: [' ', 'Glueless-Click', 'Glued', 'Pre-glued', 'Tongue and Groove', 'Smooth', 'Embossed', 'High Gloss'],
  Cabinet: [' ', 'Antique', 'Contemporary', 'Modern', 'Rustic', 'Traditional', 'Vintage'],
  Tool: [' '],
  Door: [' ', 'Glass panel', '1-panel', '1-panel arched', '2-panel', '2-panel arched', '5-panel', '6-panel', '6-panel arched', 'glass panel', 'with security bars', 'with screen'],
  Window: [' ', 'Single pane', 'Double pane', 'Triple pane', 'has a grid', 'with screen', 'with security bars'],
  Paint: [' ']
}

export const catType = ['Furniture', 'Appliances', 'Cabinet', 'Flooring', 'Housewares', 'Door', 'Lighting', 'Plumbing', 'Tool', 'Window']

export const catApplType = [
  { Climate: { col: ['appliances', 'heating-cooling'], item: [{ AC: { i: 3265 } }, { 'Air Purifier': { i: 3266 } }, { 'Evaporative Cooler': { i: 3269 } }, { Furnace: { i: 3276 } }, { 'Space Heater': { i: 3281 } }, { 'Ventilation Fan': { i: 3274 } }, { 'Water Heater': { i: 3302 } }], mfg: mfg.Appl, pwr: types.Pwr, wood: '', finish: '', color: '', metal: '', seo: [' '] } },
  { Electronic: { col: ['appliances', 'household-appliances'], item: [{ 'Cabinet Stereo': { i: 0 } }, { 'Component Stereo': { i: 0 } }, { 'Monitor': { i: 0 } }, { 'Portable Stereo': { i: 0 } }, { 'Television': { i: 0 } }], mfg: mfg.Appl, pwr: '', wood: '', finish: '', color: '', metal: '', seo: [' '] } },
  { Floor: { col: ['appliances', 'household-appliances'], item: [{ 'Floor Buffer': { i: 3288 } }, { 'Rug Shampooer': { i: 3284 } }, { 'Steam Cleaner': { i: 3283 } }, { 'Steam Mop': { i: 3287 } }, { 'Vacuum Cleaner': { i: 3300 } }], mfg: mfg.Appl, pwr: '', wood: '', finish: '', color: '', metal: '', seo: [' '] } },
  { Household: { col: ['appliances', 'household-appliances'], item: [{ 'Air Fyer': { i: 0 } }, { Blender: { i: 0 } }, { 'Coffee Maker': { i: 0 } }, { 'Deep Fryer': { i: 0 } }, { Espresso: { i: 0 } }, { 'Griddle': { i: 0 } }, { 'Indoor Grill': { i: 0 } }, { 'Iron/Ironing Board': { i: 3295 } }, { 'Mixer': { i: 0 } }, { Toaster: { i: 0 } }, { 'Toaster Oven': { i: 0 } }, { 'Waffle Maker': { i: 0 } },], mfg: mfg.Appl, pwr: '', finish: finish.Appl, color: '', metal: '', seo: [' '] } },
  { Kitchen: { col: ['appliances', 'kitchen-appliances'], item: [{ Cooktop: { i: 0 } }, { 'Dish Washer': { i: 0 } }, { Freezer: { i: 0 } }, { Microwave: { i: 0 } }, { Oven: { i: 0 } }, { Range: { i: 0 } }, { 'Range Hood': { i: 0 } }, { Refigerator: { i: 3649 } }], mfg: mfg.Appl, pwr: types.Pwr, wood: '', finish: finish.Appl, color: '', metal: '', seo: seo.Frig } },
  { Laundry: { col: ['appliances', 'laundy-appliances'], item: [{ 'Clothes Dryer': { i: 3293 } }, { 'Washing Machine': { i: 3298 } }, { 'Washer/Dryer Combo': { i: 3296 } }], mfg: mfg.Appl, pwr: types.Pwr, wood: '', finish: finish.Appl, color: '', seo: seo.WashDry } },
  { Outdoor: { col: ['appliances', 'patio-outdoor-living'], item: [{ 'Grill': { i: 0 } }, { 'Misting System': { i: 3279 } }, { 'Patio Heater': { i: 3280 } }], mfg: '', pwr: types.Pwr, wood: '', finish: finish.Appl, color: finish.Paint, seo: [' '] } },

]

export const catCabType = [
  { Bath: { col: ['home-improvement', 'cabinets'], item: [{ '24 inch Vanity': { i: 2085 } }, { '30 inch Vanity': { i: 2085 } }, { '36 inch Vanity': { i: 2085 } }, { '48 inch Vanity': { i: 2085 } }, { '60 inch Vanity': { i: 2085 } }, { '72 inch Vanity': { i: 2085 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, seo: seo.Cabinet } },
  { Kitchen: { col: ['home-improvement', 'cabinets'], item: [{ '9 inch Base': { i: 2078 } }, { '12 inch Base': { i: 2090 } }, { '18 inch Base': { i: 2078 } }, { '24 inch Base': { i: 2078 } }, { '21 inch Base': { i: 2078 } }, { '30 inch Base': { i: 2078 } }, { '36 inch Base': { i: 2078 } }, { '48 inch Base': { i: 2078 } }, { '60 inch Base': { i: 2078 } }, {}, { '9 inch Wall': { i: 2078 } }, { '12 inch Wall': { i: 2090 } }, { '18 inch Wall': { i: 2078 } }, { '24 inch Wall': { i: 2078 } }, { '21 inch Wall': { i: 2078 } }, { '30 inch Wall': { i: 2078 } }, { '36 inch Wall': { i: 2078 } }, {}, {}, {}, { 'Blind Corner': { i: 2078 } }, { 'Lazy Susan': { i: 2078 } }, { '18 inch Pantry': { i: 2078 } }, { '24 inch Pantry': { i: 2078 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, seo: seo.Cabinet } },
  { Storage: { col: ['home-improvement', 'cabinets'], item: [{ Chest: { i: 2082 } }, { 'Garage Cabinet': { i: 0 } }, { 'Rolling Cabinet': { i: 0 } }, { 'Tool Chest': { i: 0 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, seo: seo.Cabinet } },

]
export const catDoorType = [
  { 'Interior Door': { col: ['home-improvement', 'doors-windows'], item: [{ 'pre-hung door': { a: [attr.DoorWidth, attr.DoorHeight], i: 0 } }, { 'door slab': { a: [attr.DoorWidth, attr.DoorHeight], i: 0 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, seo: seo.Door } },
  { 'Exterior Door': { col: ['home-improvement', 'doors-windows'], item: [{ 'pre-hung door': { a: [attr.DoorWidth, attr.DoorHeight], i: 0 } }, { 'door slab': { a: [attr.DoorWidth, attr.DoorHeight], i: 0 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, seo: seo.Door } },
  { 'Security Door': { col: ['home-improvement', 'doors-windows'], item: [{ 'pre-hung door': { a: [attr.DoorWidth, attr.DoorHeight], i: 0 } }, { 'door slab': { a: [attr.DoorWidth, attr.DoorHeight], i: 0 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, seo: seo.Door } },
  { 'Sliding Door': { col: ['home-improvement', 'doors-windows'], item: [{ 'pre-hung door': { a: [attr.DoorWidth, attr.DoorHeight], i: 0 } }, { 'door slab': { a: [attr.DoorWidth, attr.DoorHeight], i: 0 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, seo: seo.Door } },
  { 'French Door': { col: ['home-improvement', 'doors-windows'], item: [{ 'pre-hung door': { a: [attr.DoorWidth, attr.DoorHeight], i: 0 } }, { 'door slab': { a: [attr.DoorWidth, attr.DoorHeight], i: 0 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, seo: seo.Door } },
  { 'Pocket Door': { col: ['home-improvement', 'doors-windows'], item: [{ 'pre-hung door': { a: [attr.DoorWidth, attr.DoorHeight], i: 0 } }, { 'door slab': { a: [attr.DoorWidth, attr.DoorHeight], i: 0 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, seo: seo.Door } },
  { 'Louvered Door': { col: ['home-improvement', 'doors-windows'], item: [{ 'pre-hung door': { a: [attr.DoorWidth, attr.DoorHeight], i: 0 } }, { 'door slab': { a: [attr.DoorWidth, attr.DoorHeight], i: 0 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, seo: seo.Door } },
  { 'Bi-fold Door': { col: ['home-improvement', 'doors-windows'], item: [{ 'pre-hung door': { a: [attr.DoorWidth, attr.DoorHeight], i: 0 } }, { 'door slab': { a: [attr.DoorWidth, attr.DoorHeight], i: 0 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, seo: seo.Door } },
]

export const catWindType = [
  { 'Standard Window': { col: ['home-improvement', 'doors-windows'], item: [{ 'Double-hung Window': { a: [attr.WindowWidth, attr.WindowHeight], i: 0 } }, { 'Single-hung Window': { a: [attr.WindowWidth, attr.WindowHeight], i: 0 } }, { 'Sliding Window': { a: [attr.WindowWidth, attr.WindowHeight], i: 0 } }, { 'Awning Window': { a: [attr.WindowWidth, attr.WindowHeight], i: 0 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Window, seo: seo.Window } },
  { 'Other Window': { col: ['home-improvement', 'doors-windows'], item: [{ 'Bay Window': { a: [attr.WindowWidth, attr.WindowHeight], i: 0 } }, { 'Casement window': { a: [attr.WindowWidth, attr.WindowHeight], i: 0 } }, { 'Glass Block Window': { a: [attr.WindowWidth, attr.WindowHeight], i: 0 } }, { 'Picture Window': { a: [attr.WindowWidth, attr.WindowHeight], i: 0 } }, { 'Skylight Window': { a: [attr.WindowWidth, attr.WindowHeight], i: 0 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Window, seo: seo.Window } },
  { 'Security Window': { col: ['home-improvement', 'doors-windows'], item: [{ 'Storm Window': { a: [attr.WindowWidth, attr.WindowHeight], i: 0 } }, { 'Security Window': { a: [attr.WindowWidth, attr.WindowHeight], i: 0 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Window, seo: seo.Window } },
  { 'Shaped Window': { col: ['home-improvement', 'doors-windows'], item: [{ 'Circular Window': { a: [attr.WindowWidth, attr.WindowHeight], i: 0 } }, { 'Hexagon Shaped Window': { a: [attr.WindowWidth, attr.WindowHeight], i: 0 } }, { 'Octagon Shaped Window': { a: [attr.WindowWidth, attr.WindowHeight], i: 0 } }, { 'Oval Shaped Window': { a: [attr.WindowWidth, attr.WindowHeight], i: 0 } }, { 'Pentagon Shaped Window': { a: [attr.WindowWidth, attr.WindowHeight], i: 0 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Window, seo: seo.Window } },

]

export const catFurnType = [
  { Bedroom: { col: ['furniture', 'bedroom'], item: [{ Bed: { a: [attr.Bed], i: 2063 } }, { 'Bed Frame': { a: [attr.Bed], i: 2063 } }, { 'Chest of Drawers': { i: 0 } }, { Dresser: { i: 2075 } }, { Foundation: { a: [attr.Bed], i: 2065 } }, { 'Head/Foot': { a: [attr.Bed], i: 2064 } }, { Mattress: { a: [attr.Bed], i: 2066 } }, { Nightstand: { i: 0 } }, { Shelving: { i: 0 } }, { 'Toy Chest': { i: 2084 } }, { Wardrobe: { i: 2072 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, fabric: finish.Fabric, seo: seo.Furniture } },
  { Bathroom: { col: ['furniture', 'bathroom'], item: [{ Cabinet: { i: 0 } }, { 'Bathroom Mirror': { i: 0 } }, { 'Bath Organizer': { i: 0 } }, { 'Shelving': { i: 0 } }, { 'Vanity': { i: 2070 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, fabric: finish.Fabric, seo: seo.Furniture } },
  { "Dining Room": { col: ['furniture', 'dining-room'], item: [{ Barstool: { i: 0 } }, { Bench: { i: 2068 } }, { Buffet: { i: 2073 } }, { Cart: { i: 2091 } }, { 'China Cabinet': { i: 2074 } }, { 'Corner Cabinet': { i: 0 } }, { 'Hope Chest': { i: 2083 } }, { 'Liquor Cabinet': { i: 2088 } }, { 'Dining Table': { i: 2165 } }, { 'Dining Chairs': { i: 0 } }, { 'Wine Rack': { i: 2089 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, fabric: finish.Fabric, seo: seo.Furniture } },
  { "Living Room": { col: ['furniture', 'living-room'], item: [{ 'Arm Chair': { i: 2096 } }, { 'Bean Bag Chair': { i: 2097 } }, { 'Bookshelf': { i: 0 } }, { 'Coffee Table': { i: 0 } }, { 'End Table': { i: 0 } }, { 'Love Seat': { i: 0 } }, { 'Media Center': { i: 2080 } }, { Recliner: { i: 0 } }, { Sectional: { i: 0 } }, { Shelving: { i: 0 } }, { Sofa: { i: 0 } }, { 'Sofa Table': { i: 0 } }, { Storage: { i: 2081 } }, { 'TV Stand': { i: 0 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, fabric: finish.Fabric, seo: seo.Furniture } },
  { Office: { col: ['furniture', 'office-furniture'], item: [{ Bookcase: { i: 0 } }, { Credenza: { i: 0 } }, { Desk: { i: 0 } }, { 'File Cabinet': { i: 2076 } }, { 'Office Chair': { i: 0 } }, { 'Printer Stand': { i: 0 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, fabric: finish.Fabric, seo: seo.Furniture } },
  { Patio: { col: ['furniture', 'patio-outdoor-living'], item: [{ Hammock: { i: 3869 } }, { 'Outdoor Bed': { i: 2131 } }, { 'Outdoor End Table': { i: 0 } }, { 'Outdoor Sofa': { i: 2138 } }, { 'Outdoor Storage Box': { i: 2140 } }, { 'Outdoor Structure': { i: 3874 } }, { 'Patio Chairs': { i: 2136 } }, { 'Patio Table': { i: 2136 } }, { 'Sunshade': { i: 3885 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, fabric: finish.Fabric, seo: seo.Furniture } },
  { Sectional: { col: ['furniture', 'living-room'], item: [{ 'Right Chair': { i: 0 } }, { 'Armless Chair': { i: 0 } }, { 'Left Chair': { i: 0 } }, { 'Ottoman': { i: 0 } }, { 'Corner Chair': { i: 0 } }, { 'Chaise': { i: 0 } }, { 'Love Seat': { i: 0 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, fabric: finish.Fabric, seo: seo.Furniture } },

]
//Taxonomy 3894
export const catToolType = [
  { Drill: { col: ['tools', 'home-improvement'], item: [{ 'Drill': { i: 0 } }, { 'Driver': { i: 0 } }, { 'Electic Screwdriver': { i: 0 } }, { 'Hammer Drill': { i: 0 } }, { 'Impact Drill': { i: 0 } }, { 'Screw Gun': { i: 0 } }], mfg: mfg.Tool, pwr: types.Tool, wood: '', finish: '', color: '', metal: '', seo: seo.Tool } },
  { 'Nail Gun': { col: ['tools', 'home-improvement'], item: [{ 'Framing Nailer': { i: 0 } }, { 'Floor Nailer': { i: 0 } }, { 'Brad Nailer': { i: 0 } }, { 'Roofing Nailer': { i: 0 } }], mfg: mfg.Tool, pwr: types.Tool, wood: '', finish: '', color: '', metal: '', seo: seo.Tool } },
  { 'Power Tool': { col: ['tools', 'home-improvement'], item: [{ 'Demolition Hammer': { i: 0 } }, { 'Jack-hammer': { i: 0 } }, { 'Lathe': { i: 0 } }, { 'Oscillating Tool': { i: 0 } }, { 'Rotary Tool': { i: 0 } }], mfg: mfg.Tool, pwr: types.Tool, wood: '', finish: '', color: '', metal: '', seo: seo.Tool } },
  { Sander: { col: ['tools', 'home-improvement'], item: [{ 'Belt Sander': { i: 0 } }, { 'Palm Sander': { i: 0 } }, { 'Orbital Sander': { i: 0 } }, { 'Angle Grinder': { i: 0 } }, { 'Bench Grinder': { i: 0 } }], mfg: mfg.Tool, pwr: types.Tool, wood: '', finish: '', color: '', metal: '', seo: seo.Tool } },
  { Saw: { col: ['tools', 'home-improvement'], item: [{ 'Band Saw': { i: 0 } }, { 'Chop Saw': { i: 0 } }, { 'Circular Saw': { i: 0 } }, { 'Folding Table Saw': { i: 0 } }, { 'Jig Saw': { i: 0 } }, { 'Miter Saw': { i: 0 } }, { 'Radial Arm Saw': { i: 0 } }, { 'Reciprocating Saw': { i: 0 } }, { 'Table Saw': { i: 0 } }], mfg: mfg.Tool, pwr: types.Tool, wood: '', finish: '', color: '', metal: '', seo: seo.Tool } },
  { Yard: { col: ['tools', 'home-improvement'], item: [{ 'Compressor': { i: 0 } }, { 'Generator': { i: 0 } }, { 'Riding Mower': { i: 0 } }, { 'Lawn Mower': { i: 0 } }, { 'Leaf Blower': { i: 0 } }, { 'Compacter': { i: 0 } }, { 'Cultivator': { i: 0 } }, { 'Auger': { i: 0 } }, { 'Pressure Washer': { i: 0 } }, { 'Pole Saw': { i: 0 } }, { 'Chainsaw': { i: 0 } }, { 'Edger': { i: 0 } }, { 'Hedge Trimmer': { i: 0 } }, { 'String Trimmer': { i: 0 } }, { 'Push Mower': { i: 0 } }, { 'Reciprocating Saw': { i: 0 } }, { 'Table Saw': { i: 0 } }], mfg: mfg.Yard, pwr: types.Yard, wood: '', finish: '', color: '', metal: '', seo: seo.Tool } },

]

export const catHouseType = [
  { 'Art & Decor': { col: ['furniture', 'art-home-decor'], item: [{ Art: { i: 0 } }, { 'Plastic Plant': { i: 0 } }, { 'Silk Plant': { i: 0 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, seo: seo.Furniture } },
  { 'Tableware': { col: ['furniture', 'art-home-decor'], item: [{ Dinnerware: { i: 0 } }, { Drinkware: { i: 0 } }, { Serveware: { i: 0 } }, { Silverware: { i: 0 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, seo: seo.Furniture } },
  { 'Organization': { col: ['furniture', 'art-home-decor'], item: [{ Basket: { i: 0 } }, { Bath: { i: 0 } }, { Closet: { i: 0 } }, { Entryway: { i: 0 } }, { Kitchen: { i: 0 } }, { Jewelry: { i: 0 } }, { Office: { i: 0 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, seo: seo.Furniture } },
  { 'Entertainment': { col: ['furniture', 'art-home-decor'], item: [{ Books: { i: 0 } }, { Movies: { i: 0 } }, { Music: { i: 0 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, seo: seo.Furniture } },
  { 'Supplies': { col: ['home-improvement', 'building-materials'], item: [{ Cleaning: { i: 0 } }, { Pool: { i: 0 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, seo: seo.Furniture } },
  { 'Sporting Goods': { col: ['furniture', 'sporting-goods'], item: [{ Bicycle: { i: 0 } }, { Binoculars: { i: 0 } }, { Boat: { i: 0 } }, { Camping: { i: 0 } }, { Exercise: { i: 0 } }, { Fishing: { i: 0 } }, { GPS: { i: 0 } }, { Sports: { i: 0 } }], wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: finish.Metal, seo: seo.Furniture } },
]

export const catFloorType = [
  { Flooring: { col: ['flooring', 'home-improvement'], item: [{ 'Laminate Flooring': { s: true, i: 0 } }, { 'Hardwood Flooring': { s: true, i: 0 } }, { 'Tile Flooring': { s: true, i: 0 } }, { 'Vinyl Flooring': { s: true, i: 0 } }], mfg: '', pwr: '', wood: finish.Wood, finish: finish.Finish, color: finish.Paint, metal: '', seo: seo.Floor } },
  { Rug: { col: ['furniture', 'rugs'], item: [{ 'Area Rug': { a: [attr.RugWidth, attr.RugLength], i: 0 } }, { 'Mat': { a: [attr.RugWidth, attr.RugLength], i: 0 } }, { 'Outdoor Rug': { a: [attr.RugWidth, attr.RugLength], i: 0 } }, { 'Oval Rug': { a: [attr.RugWidth, attr.RugLength], i: 0 } }, { 'Round Rug': { a: [attr.RugWidth, attr.RugLength], i: 0 } }, { 'Rug Runner': { a: [attr.RugWidth, attr.RugLength], i: 0 } }], mfg: '', pwr: '', wood: '', finish: '', color: finish.Paint, metal: '', seo: seo.Rug } },
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
  { Bathroom: { col: ['Plumbing', 'home-improvement'], item: [{ 'Toilet': { i: 0 } }, { 'Bidet': { i: 0 } }, { 'Faucet': { i: 0 } }, { 'Pedestal Sink': { i: 0 } }, { 'Sink': { i: 0 } }, { 'Vessel Sink': { i: 0 } }, { 'Vanity Top': { i: 0 } }], mfg: '', pwr: '', wood: '', finish: '', color: finish.Paint, metal: finish.Metal, seo: seo.Lighting } },
  { Kitchen: { col: ['Plumbing', 'home-improvement'], item: [{ 'Faucet': { i: 0 } }, { 'Sink': { i: 0 } }], mfg: '', pwr: '', wood: '', finish: '', color: finish.Paint, metal: finish.Metal, seo: seo.Lighting } },
]

export const catSkuType = [
  { Paint: { col: ['paint', 'home-improvement'], item: [{ 'Drill': { i: 0 } }, { 'Driver': { i: 0 } }, { 'Electic Screwdriver': { i: 0 } }, { 'Hammer Drill': { i: 0 } }, { 'Impact Drill': { i: 0 } }, { 'Screw Gun': { i: 0 } }], mfg: '', pwr: '', wood: '', finish: '', color: '', metal: '', seo: seo.Paint } },
  { 'Paint Brush': { col: ['paint', 'home-improvement'], item: [{ '1" Paint Brush': { i: 0 } }, { '1.5" Paint Brush': { i: 0 } }, { '1.5" Angled Paint Brush': { i: 0 } }, { '2" Paint Brush': { i: 0 } }, { '2" Angled Paint Brush': { i: 0 } }, { '2.5" Paint Brush': { i: 0 } }, { '2.5" Angled Paint Brush': { i: 0 } }, { '3" Paint Brush': { i: 0 } }, { '4" Paint Brush': { i: 0 } }], mfg: '', pwr: '', wood: '', finish: '', color: '', metal: '', seo: seo.Paint } },
  { 'Paint Roller Frame': { col: ['paint', 'home-improvement'], item: [{ '4" Roller Frame': { i: 0 } }, { '6" Roller Frame': { i: 0 } }, { '9" Roller Frame': { i: 0 } }], mfg: '', pwr: '', wood: '', finish: '', color: '', metal: '', seo: seo.Paint } },
  { 'Paint Roller Covers': { col: ['paint', 'home-improvement'], item: [{ '4" mini': { i: 0 } }, { '4" mini box': { i: 0 } }, { '6" mini': { i: 0 } }, { '6" mini box': { i: 0 } }, { '9" 1/4" Nap': { i: 0 } }, { '9" 3/8" Nap': { i: 0 } }, { '9" 1/2" Nap': { i: 0 } }], mfg: '', pwr: '', wood: '', finish: '', color: '', metal: '', seo: seo.Paint } },
  { 'Paint Tray': { col: ['paint', 'home-improvement'], item: [{ '5 Gal Bucket Grid': { i: 0 } }, { '4" tray': { i: 0 } }, { '4" tray liner': { i: 0 } }, { '6" tray': { i: 0 } }, { '6" tray liner': { i: 0 } }, { '9" tray': { i: 0 } }, { '9" tray liner': { i: 0 } }], mfg: '', pwr: '', wood: '', finish: '', color: '', metal: '', seo: seo.Paint } },
  { 'Paint Supplies': { col: ['paint', 'home-improvement'], item: [{ '8x12 Tarp': { i: 0 } }, { '9x12 Drop Cloth': { i: 0 } }, { '10x12 Tarp': { i: 0 } }, { 'Caulk Gun': { i: 0 } }, { 'Putty Knife': { i: 0 } }, { 'Gloves-Medium': { i: 0 } }, { 'Gloves-Large': { i: 0 } }, { 'Gloves-XL': { i: 0 } }, { 'Electical Tape': { i: 0 } }, { 'Masking Tape': { i: 0 } }], mfg: '', pwr: '', wood: '', finish: '', color: '', metal: '', seo: seo.Paint } },
  { 'Misc': { col: ['paint', 'home-improvement'], item: [{ 'Electical Tape': { i: 0 } }, { 'Bungie Cord': { i: 0 } }, { 'Bungie Cord 10 pack': { i: 0 } }, { 'Other!!!': { i: 0 } }], mfg: '', pwr: '', wood: '', finish: '', color: '', metal: '', seo: seo.Paint } },

]

export const dimension: Iidx = {
  "CH": ['18.5', '25', '31.5', '35'],
  "CW": ['9', '12', '21', '24', '30', '33', '36', '48'],
  "CD": ['12', '28.5', '30'],
  "Door": ['24x80', '30x80', '32x80', '36x80'],
  "WH": ['12', '18', '24', '30', '36', '42', '48', '54', '60']
}


