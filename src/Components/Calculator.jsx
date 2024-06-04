import { Keyboard } from "./Keyboard";
import { Display } from "./Display";

export function Calculator() {
    return (
        <div id="calculator">
            <Display />
            <Keyboard />
        </div>
    )
}