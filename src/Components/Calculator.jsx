import { Keyboard } from "./Keyboard";
import { Display } from "./Display";

export function Calculator() {
    return (
        <div className="calculator">
            <Display />
            <Keyboard />
        </div>
    )
}