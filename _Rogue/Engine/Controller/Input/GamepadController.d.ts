<<<<<<< HEAD
export declare class GamepadController {
    private _upButtons;
    private _downButtons;
    private _pressedButtons;
    private _gamepad;
    deadZone: number;
    get gamepad(): Gamepad;
    constructor(gamepad: Gamepad);
    private update;
    getAxis(index: number): number;
    getButton(index: number): number;
    getButtonDown(index: number): boolean;
    getButtonUp(index: number): boolean;
}
=======
export declare class GamepadController {
    private _upButtons;
    private _downButtons;
    private _pressedButtons;
    private _gamepad;
    deadZone: number;
    get gamepad(): Gamepad;
    constructor(gamepad: Gamepad);
    private update;
    getAxis(index: number): number;
    getButton(index: number): number;
    getButtonDown(index: number): boolean;
    getButtonUp(index: number): boolean;
}
>>>>>>> 91c0b2e2b14b7685014c7671d478c02a7f04257b
