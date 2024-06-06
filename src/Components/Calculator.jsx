import { Keyboard } from "./Keyboard";
import { Display } from "./Display";
import { useEffect, useRef, useState } from "react";

export function Calculator() {
    const [currentNum, setCurrentNum] = useState("0")
    const displayRef = useRef(null);

    const clearDisplay = () => {
       setCurrentNum("0");
      displayRef.current.textContent = "0"
    };

    useEffect(() => {
        const handleButtonClick = (e) => {

            if (currentNum === "0") {
               return setCurrentNum(e.target.value);
            } else {
                const newNum = currentNum + e.target.value;
                setCurrentNum(newNum);
            }

            if (displayRef.current) {
                const display = displayRef.current;

                // Update display text
                display.textContent = currentNum;

                // Check for digit limit
                if (display.scrollWidth > display.clientWidth) {
                    display.textContent = 'Digit limit met';
                    setCurrentNum(currentNum)
                    setTimeout(() => {
                        display.textContent = currentNum;
                    }, 1000);
                    return;
                }
            }}
    
      const handleOperatorClick = (e) => {
    const lastIsOperator = /[=/*\-+]$/;
    const lastChar = currentNum.slice(-1);
    const secondLastChar = currentNum.slice(-2, -1);
    const isMinus = e.target.value === '-';
    const isDoubleOperator = lastIsOperator.test(secondLastChar) && lastChar === '-';

    if (!lastIsOperator.test(lastChar) || (isMinus && !isDoubleOperator)) {
        handleButtonClick(e);
    }
};
    
    const handleEqualsClick = () => {
        const numString = String(currentNum);

        const cleanedNum = numString.replace(/[^-()\d/*+.]/g, '');

        console.log('Cleaned Expression:', cleanedNum); 

        try {
            const result = eval(cleanedNum);

            console.log('Result:', result); 

            if (isFinite(result)) {
                const roundedResult = Number(result.toFixed(12));
                setCurrentNum(roundedResult);

                if (displayRef.current) {
                    displayRef.current.textContent = roundedResult;
                }
            } else {
                setCurrentNum('Error');

                if (displayRef.current) {
                    displayRef.current.textContent = 'Error';
                }
            }
        } catch (error) {
            console.error('Evaluation Error:', error);
            setCurrentNum('Error');

            if (displayRef.current) {
                displayRef.current.textContent = 'Error';
            }
        }
    };
    
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            if (/^\d+$/.test(button.value)) {
                button.addEventListener('click', handleButtonClick);
            } else if (button.value === '=') {    
                button.addEventListener('click', handleEqualsClick);
            } else if (button.classList.contains('operator')) {
                button.addEventListener('click', handleOperatorClick);
            } else {
                button.addEventListener('click', handleButtonClick);
            }
        });
    
        return () => {
            buttons.forEach(button => {
                if (/^\d+$/.test(button.value)) {
                    button.removeEventListener('click', handleButtonClick);
                } else if (button.classList.contains('operator')) {
                    button.removeEventListener('click', handleOperatorClick);
                } else if (button.value === '=') {
                    button.removeEventListener('click', handleEqualsClick);
                } else {
                    button.removeEventListener('click', handleButtonClick);
                }
            });
        };
    }, [currentNum]);

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