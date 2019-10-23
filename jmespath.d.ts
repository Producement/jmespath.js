const TYPE_NUMBER = 0;
const TYPE_ANY = 1;
const TYPE_STRING = 2;
const TYPE_ARRAY = 3;
const TYPE_OBJECT = 4;
const TYPE_BOOLEAN = 5;
const TYPE_EXPREF = 6;
const TYPE_NULL = 7;
const TYPE_ARRAY_NUMBER = 8;
const TYPE_ARRAY_STRING = 9;

export type SignatureType =
    | TYPE_NUMBER
    | TYPE_ANY
    | TYPE_STRING
    | TYPE_ARRAY
    | TYPE_OBJECT
    | TYPE_BOOLEAN
    | TYPE_EXPREF
    | TYPE_NULL
    | TYPE_ARRAY_NUMBER
    | TYPE_ARRAY_STRING;

export interface Signature {
    types: SignatureType[]
    variadic?: boolean
}

export interface Function {
    _func: (resolvedArgs: any[]) => any
    _signature: Signature[]
}

export interface Options {
    resolveUnknownFunction: (name: string) => Function | undefined;
}

export function search(data: any, expression: string, options?: Options): any;