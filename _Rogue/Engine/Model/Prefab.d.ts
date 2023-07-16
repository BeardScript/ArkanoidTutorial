<<<<<<< HEAD
import type { Object3D } from 'three';
export declare class Prefab {
    private _uuid;
    constructor(uuid: any);
    get uuid(): string;
    get path(): any;
    get name(): any;
    instantiate(parent?: Object3D): Object3D<import("three").Event>;
}
=======
import { Object3D } from 'three';
export declare class Prefab {
    private _uuid;
    constructor(uuid: any);
    get uuid(): string;
    get path(): string;
    get name(): string;
    instantiate(parent?: Object3D): Object3D<import("three").Event>;
}
>>>>>>> 91c0b2e2b14b7685014c7671d478c02a7f04257b
