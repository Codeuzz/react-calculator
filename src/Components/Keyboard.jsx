export function Keyboard( { clearDisplay }  ) {
    return (
        <div id="keyboard">
            <div id="grid-1">
                <button id="clear" type="button" className="all-clear double" value="all-clear"
                onClick={clearDisplay}
                >AC</button>
                <button id="divide" type="button" className="operator" value="/">&divide;</button>
                <button id="multiply" type="button" className="operator" value="*">&times;</button>
            </div>

            <div id="grid-2">
                <button id="subtract" type="button" className="operator" value="-">-</button>
                <button id="add" type="button" className="operator" value="+">+</button>
                <button id="equals" type="button" className="operator double-height" value="=">=</button>
            </div>
            
            <div id="grid-3">
                <button type="button" id="seven" value="7">7</button>
                <button type="button" id="eight" value="8">8</button>
                <button type="button" id="nine" value="9">9</button>
                <button type="button" id="four" value="4">4</button>
                <button type="button" id="five" value="5">5</button>
                <button type="button" id="six" value="6">6</button>
                <button type="button" id="one" value="1">1</button>
                <button type="button" id="two" value="2">2</button>
                <button type="button" id="three" value="3">3</button>
            </div>
           
            <div id="grid-4">
                <button type="button" id="zero" value="0" className="double">0</button>
                <button id="decimal" type="button" className="decimal" value=".">.</button>
            </div>
        
        </div>
    )
}