import { Keyboard } from "./Keyboard";
import { Display } from "./Display";
import { useEffect, useRef, useState } from "react";

export function Calculator() {
    const [currentNum, setCurrentNum] = useState(' ')
    const displayRef = useRef(null);

    const clearDisplay = () => {
       setCurrentNum('')
    };
    

    useEffect(() => {
        const handleButtonClick = (e) => {
            if (displayRef.current) {
                const display = displayRef.current;
                const newNum = currentNum + e.target.value;
                display.textContent = newNum;

                if (display.scrollWidth > display.clientWidth) {
                    display.textContent = 'Digit limit met';
                    setTimeout(() => {
                        display.textContent = currentNum; 
                    }, 1000);
                    return;
                }

                setCurrentNum(newNum);
            }
        };

        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            if(/^\d+$/.test(button.value))
            button.addEventListener('click', handleButtonClick)

        })
            
        return () => {
            buttons.forEach(button => {
                if (/^\d+$/.test(button.value)) {
                    button.removeEventListener('click', handleButtonClick);
                }
            });
        };
    }, [currentNum])


    useEffect(() => {
        console.log(currentNum);
      }, [currentNum]); 

      
    return (
        <div className="calculator">
            <Display currentNum={currentNum} ref={displayRef} />
            <Keyboard clearDisplay={clearDisplay} />
        </div>
    )
}