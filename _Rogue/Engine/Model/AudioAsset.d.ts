<<<<<<< HEAD
import { Audio, PositionalAudio } from "three";
export declare class AudioAsset {
    private _uuid;
    private _buffer;
    userData: {
        __ASSET__: string;
    };
    constructor(params: {
        uuid: string;
        buffer?: AudioBuffer;
    });
    get uuid(): string;
    get path(): any;
    get name(): any;
    getAudio(): Audio<GainNode>;
    getPositionalAudio(): PositionalAudio;
    static fromFile(filePath: string, onProgress?: () => void, onError?: () => void): Promise<AudioAsset>;
}
=======
import { Audio, PositionalAudio } from "three";
export declare class AudioAsset {
    private _uuid;
    private _buffer;
    userData: {
        __ASSET__: string;
    };
    constructor(params: {
        uuid: string;
        buffer?: AudioBuffer;
    });
    get uuid(): string;
    get path(): string;
    get name(): string;
    getAudio(): Audio<GainNode>;
    getPositionalAudio(): PositionalAudio;
    static fromFile(filePath: string, onProgress?: () => void, onError?: () => void): Promise<AudioAsset>;
}
>>>>>>> 91c0b2e2b14b7685014c7671d478c02a7f04257b
