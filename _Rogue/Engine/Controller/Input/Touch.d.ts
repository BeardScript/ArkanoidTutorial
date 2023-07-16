<<<<<<< HEAD
export type TouchInteraction = {
    id: string;
    touch: Touch;
    x: number;
    y: number;
    deltaX: number;
    deltaY: number;
};
export declare class TouchController {
    private _startTouches;
    private _endTouches;
    private _touches;
    private _enabled;
    get startTouches(): TouchInteraction[];
    get endTouches(): TouchInteraction[];
    get touches(): TouchInteraction[];
    get enabled(): boolean;
    set enabled(value: boolean);
    init(): void;
    private onTouchStart;
    private onTouchEnd;
    private onTouchMove;
    private getCurrentTouchIndexById;
    private setTouchValues;
}
=======
export declare type TouchInteraction = {
    id: string;
    touch: Touch;
    x: number;
    y: number;
    deltaX: number;
    deltaY: number;
};
export declare class TouchController {
    private _startTouches;
    private _endTouches;
    private _touches;
    private _enabled;
    get startTouches(): TouchInteraction[];
    get endTouches(): TouchInteraction[];
    get touches(): TouchInteraction[];
    get enabled(): boolean;
    set enabled(value: boolean);
    init(): void;
    private onTouchStart;
    private onTouchEnd;
    private onTouchMove;
    private getCurrentTouchIndexById;
    private setTouchValues;
}
>>>>>>> 91c0b2e2b14b7685014c7671d478c02a7f04257b
