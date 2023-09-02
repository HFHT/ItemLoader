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