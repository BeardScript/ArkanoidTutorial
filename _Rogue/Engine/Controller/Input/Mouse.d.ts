<<<<<<< HEAD
import type { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';
export declare class Mouse {
    private _x;
    private _y;
    private _movementX;
    private _movementY;
    private _isMoving;
    private _mouseStopTimer;
    private _isLeftButtonDown;
    private _isLeftButtonPressed;
    private _isLeftButtonUp;
    private _isRightButtonDown;
    private _isRightButtonPressed;
    private _isRightButtonUp;
    private _isMidButtonDown;
    private _isMidButtonPressed;
    private _isMidButtonUp;
    private _buttonDown;
    private _buttonPressed;
    private _buttonUp;
    private _wheelY;
    private _wheelX;
    private _wheelTimeout;
    private _enabled;
    private _pointerLock;
    get pointerLock(): PointerLockControls;
    get x(): number;
    get y(): number;
    get movementX(): number;
    get movementY(): number;
    get isMoving(): boolean;
    get isLeftButtonDown(): boolean;
    get isLeftButtonPressed(): boolean;
    get isLeftButtonUp(): boolean;
    get isRightButtonDown(): boolean;
    get isRightButtonPressed(): boolean;
    get isRightButtonUp(): boolean;
    get isMidButtonDown(): boolean;
    get isMidButtonPressed(): boolean;
    get isMidButtonUp(): boolean;
    get buttonDown(): number | undefined;
    get buttonPressed(): number | undefined;
    get buttonUp(): number | undefined;
    get wheelY(): number;
    get wheelX(): number;
    get enabled(): boolean;
    set enabled(value: boolean);
    init(): void;
    getButtonDown(button: number): boolean;
    getButtonPressed(button: number): boolean;
    getButtonUp(button: number): boolean;
    lock(): void;
    private unlockFunction;
    unlock(): void;
    private onMouseMove;
    private setMouseMovement;
    private resetMouseMovement;
    private onMouseDown;
    private onMouseUp;
    private onWheelMove;
}
=======
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';
export declare class Mouse {
    private _x;
    private _y;
    private _movementX;
    private _movementY;
    private _isMoving;
    private _mouseStopTimer;
    private _isLeftButtonDown;
    private _isLeftButtonPressed;
    private _isLeftButtonUp;
    private _isRightButtonDown;
    private _isRightButtonPressed;
    private _isRightButtonUp;
    private _isMidButtonDown;
    private _isMidButtonPressed;
    private _isMidButtonUp;
    private _buttonDown;
    private _buttonPressed;
    private _buttonUp;
    private _wheelY;
    private _wheelX;
    private _wheelTimeout;
    private _enabled;
    private _pointerLock;
    get pointerLock(): PointerLockControls;
    get x(): number;
    get y(): number;
    get movementX(): number;
    get movementY(): number;
    get isMoving(): boolean;
    get isLeftButtonDown(): boolean;
    get isLeftButtonPressed(): boolean;
    get isLeftButtonUp(): boolean;
    get isRightButtonDown(): boolean;
    get isRightButtonPressed(): boolean;
    get isRightButtonUp(): boolean;
    get isMidButtonDown(): boolean;
    get isMidButtonPressed(): boolean;
    get isMidButtonUp(): boolean;
    get buttonDown(): number | undefined;
    get buttonPressed(): number | undefined;
    get buttonUp(): number | undefined;
    get wheelY(): number;
    get wheelX(): number;
    get enabled(): boolean;
    set enabled(value: boolean);
    init(): void;
    getButtonDown(button: number): boolean;
    getButtonPressed(button: number): boolean;
    getButtonUp(button: number): boolean;
    lock(): void;
    private unlockFunction;
    unlock(): void;
    private onMouseMove;
    private setMouseMovement;
    private resetMouseMovement;
    private onMouseDown;
    private onMouseUp;
    private onWheelMove;
}
>>>>>>> 91c0b2e2b14b7685014c7671d478c02a7f04257b
