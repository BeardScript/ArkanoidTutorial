import Component from './Component';
import { propType } from '../Controller/Decorators';
import * as THREE from 'three';
import { Prefab } from './Prefab';
declare type PropMapValue = string | number | boolean | THREE.Material | THREE.Object3D | THREE.AnimationClip | THREE.Audio | THREE.PositionalAudio | THREE.Color | THREE.Texture | THREE.Vector2 | THREE.Vector3 | Prefab;
export declare class PropMap {
    config: {
        name: string;
        component: Component;
        isReadOnly: boolean;
        propTypes: propType[] | undefined;
    };
    elems: {
        [key: string]: PropMapValue;
    };
    constructor(component: Component, name: string, propTypes?: propType[]);
    get(key: string): any;
    get<T extends string>(key: string): T;
    get<T extends number>(key: string): T;
    get<T extends boolean>(key: string): T;
    get<T extends THREE.Material>(key: string): T;
    get<T extends THREE.Object3D>(key: string): T;
    get<T extends THREE.AnimationClip>(key: string): T;
    get<T extends THREE.Audio>(key: string): T;
    get<T extends THREE.PositionalAudio>(key: string): T;
    get<T extends THREE.Color>(key: string): T;
    get<T extends THREE.Texture>(key: string): T;
    get<T extends THREE.Vector2>(key: string): T;
    get<T extends THREE.Vector3>(key: string): T;
}
export {};
