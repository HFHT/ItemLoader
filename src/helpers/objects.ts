
export const prices = ['20', '25', '30', '50', '75', '100', '125', '150', '175', '200', '250', '300', '350', '400'];

export const catS: Ims =
  [
    {
      "n0": "Appliances",
      "m0": [
        {
          "n1": "Climate",
          "m1": [{
            "n2": "AC",
            "sk": 3265
          }]
        },
        {
          "n1": "Floor",
          "m1": [{
            "n2": "Buffer",
            "sk": 3288
          }]
        },
        {
          "n1": "Garage",
          "m1": [{
            "n2": "Opener",
            "sk": 3291
          }]
        },
        {
          "n1": "Kitchen",
          "m1": [{
            "n2": "Combo",
            "t": "Pwr",
            "f": "A",
            "m": "A",
            "sk": 3296
          }]
        },
        {
          "n1": "Laundry",
          "m1": [{
            "n2": "Combo",
            "t": "Pwr",
            "f": "T",
            "m": "A",
            "sk": 3296
          }]
        }
      ]
    },
    {
      "n0": "Cabinets",
      "m0": [{
        "n1": "Bath",
        "m1": [{
          "n2": "xyz",
          "f": ["Wood", "Paint"],
          "d": {
            "Height": "CH", "Width": "CW", "Depth": "CD"
          },
          "sk": 1234
        }]
      }]
    }
  ]

export const types: Iidx = {
  "Pwr": ['Electric', 'Gas', 'Other']
}

export const finish: Iidx = {
  "A": ['Black', 'White', 'Stainless'],
  "Wood": ['Maple', 'Oak'],
  "M": ['Bronze', 'Pewter', 'Nickel'],
  "Paint": ['White', 'Black']
}

export const dimension: Iidx = {
  "CH": ['18.5', '25', '31.5', '35'],
  "CW": ['9', '12', '21', '24', '30', '33', '36', '48'],
  "CD": ['12', '28.5', '30'],
  "Door": ['24x80', '30x80', '32x80', '36x80'],
  "WH": ['12', '18', '24', '30', '36', '42', '48', '54', '60']
}

export const mfg: Iidx = {
  "A": ['Bosch', 'Electrolux', 'Frigidaire', 'GE', 'Kenmore', 'Kitchen Aid', 'LG', 'Maytag', 'Samsung', 'Whirlpool']
}



export const catSchema =
{
  "Appliances": [
    {
      "Climate": [
        {
          "AC": 3265
        },
        {
          "Purifier": 3266
        },
        {
          "Evap": 3269
        },
        {
          "Fan - Ceiling": 3271
        },
        {
          "Fan - Pedestal": 3272
        },
        {
          "Fan - Ventilation": 3274
        },
        {
          "Furnace": 3276
        },
        {
          "Heater-Patio": 3280
        },
        {
          "Heater-Space": 3281
        },
        {
          "Mister": 3279
        }
      ]
    },
    {
      "Floor": [
        {
          "Buffer": 3288
        },
        {
          "Scrubber": 3286
        },
        {
          "Shampooer": 3284
        },
        {
          "Steam Cleaner": 3283
        },
        {
          "Steam Mop": 3287
        }
      ]
    },
    {
      "Garage": [
        {
          "Opener": 3291
        },
        {
          "Keypad": 3290
        }
      ]
    },
    {
      "Laundry": [
        {
          "Combo": 3296
        },
        {
          "Dryer": 3293
        },
        {
          "Ironing": 3295
        },
        {
          "Washer": 3298
        }
      ]
    },
    {
      "Vacuum": 3300
    },
    {
      "Water Heater": 3302
    }
  ],
  "Cabinets": [
    {
      "Bath": 2086
    },
    {
      "Island": 2090
    },
    {
      "Kitchen": 2078
    }
  ],
  "Furniture": [
    {
      "Baby": [
        {
          "Bassinet": 2053
        },
        {
          "Bed": 2058
        },
        {
          "Changing": 2054
        },
        {
          "Crib": 2058
        },
        {
          "High Chair": 2060
        },
        {
          "Set": 2051
        },
        {
          "Chest-Toy": 2084
        }
      ]
    },
    {
      "Bathroom": [
        {
          "Set": 2110
        }
      ]
    },
    {
      "Bedroom": [
        {
          "Bed Frame": 2063
        },
        {
          "Dresser": 2075
        },
        {
          "Foundation": 2065
        },
        {
          "Head/Foot": 2064
        },
        {
          "Mattress": 2066
        },
        {
          "Set": 2111
        },
        {
          "Wardrobes": 2072
        }
      ]
    },
    {
      "Bench": [
        {
          "Kitchen": 2068
        },
        {
          "Entry": 2069
        },
        {
          "Storage": 2069
        },
        {
          "Vanity": 2070
        }
      ]
    },
    {
      "Dining Room": [
        {
          "Set": 2112
        },
        {
          "Buffets": 2073
        },
        {
          "Cart": 2091
        },
        {
          "China": 2074
        },
        {
          "Chest-Hope": 2083
        },
        {
          "Liquor": 2088
        },
        {
          "Table": 2165
        },
        {
          "Wine Rack": 2089
        }
      ]
    },
    {
      "Living Room": [
        {
          "Arm Chair": 2096
        },
        {
          "Bean Bag": 2097
        },
        {
          "Media": 2080
        },
        {
          "Set": 2113
        },
        {
          "Storage": 2081
        }
      ]
    },
    {
      "Office": [
        {
          "File Cabinet": 2076
        }
      ]
    }
  ]
}