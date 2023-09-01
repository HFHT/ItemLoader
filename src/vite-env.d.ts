/// <reference types="vite/client" />

interface Im0 {
    n0: string;
    m0: [Im1];
}

interface Im1 {
    n1: string;
    m1: [Im2];
}

interface Im2 {
    n2: string;
    sk: number;
}

interface Ims extends Array<Im0> { }