<<<<<<< HEAD
import { Mouse } from './Mouse';
import { Keyboard } from './Keyboard';
import { TouchController } from './Touch';
import { GamepadController } from './GamepadController';
export declare abstract class Input {
    private static _mouse;
    private static _keyboard;
    private static _touch;
    private static _gamepads;
    static get mouse(): Mouse;
    static get keyboard(): Keyboard;
    static get touch(): TouchController;
    static get gamepads(): GamepadController[];
}
=======
import { Mouse } from './Mouse';
import { Keyboard } from './Keyboard';
import { TouchController } from './Touch';
import { GamepadController } from './GamepadController';
export declare abstract class Input {
    private static _mouse;
    private static _keyboard;
    private static _touch;
    private static _gamepads;
    static get mouse(): Mouse;
    static get keyboard(): Keyboard;
    static get touch(): TouchController;
    static get gamepads(): GamepadController[];
}
>>>>>>> 91c0b2e2b14b7685014c7671d478c02a7f04257b
