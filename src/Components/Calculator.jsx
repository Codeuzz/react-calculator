import { Keyboard } from "./Keyboard";
import { Display } from "./Display";
import { useEffect, useState } from "react";

export function Calculator() {
    const [currentNum, setCurrentNum] = useState(' ')

    const clearDisplay = () => {
     const display =  document.getElementById('display')
     const clear =  document.getElementById('clear')

        if(display !== '') {
            display.textContent = '';
            setCurrentNum('')
        }
    }
 
    

    useEffect(() => {
        const handleButtonClick = (e) => {
            setCurrentNum(prevNum => prevNum + e.target.value);
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
    }, [])


    useEffect(() => {
        console.log(currentNum);
      }, [currentNum]); 

      
    return (
        <div className="calculator">
            <Display currentNum={currentNum} />
            <Keyboard clearDisplay={clearDisplay} />
        </div>
    )
}