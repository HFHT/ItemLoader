/// <reference types="vite/client" />

interface Im0 {
    n0: string;
    m0: Im1[];
}

interface Im1 {
    n1: string;
    m1: Im2[];
}

interface Im2<Iidx> {
    n2: string;
    sk: number;
    t?: string;
    f?: string | string[];
    m?: string;
    d?: string | Idim;
}

interface Idim {
    Height?: string;
    Width?: string;
    Depth?: string;
}

interface Ims extends Array<Im0> { }

interface Iidx {
    [k: string]: any
}

interface Iresult {
    room: string;
    prod: string;
    prods: Iprods;
    mfg: string;
    pwr: string;
    attr1: string;
    attr2: string;
    qty?: number;
    desc: string;
    col: string[];
    material: string;
    finish: string;
    condition: string;
    conditionAdds: string;
    price: string;
    seo: string;
}
interface Iprod {
    prod: string;
    qty: number;
}
interface Iprods extends Array<Iprod> { }

interface Itype {
    type: string
    idx: number
    imgs: string
    result: Iresult
}

interface ItheRoom {
    e: string;
    i: number;
    prod: {
        item: [{ a?: string, i: number, s?: boolean }]
        mfg: string[]
        pwr: string[]
        wood: string[]
        finish: string[]
        color: string[]
        metal: string[]
        seo: string[]
    }
}