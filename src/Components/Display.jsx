import React, { forwardRef } from 'react';

 export const Display = forwardRef(({ currentNum }, ref) => {
   
    return (
        <div id="display" ref={ref}>
            {currentNum}
        </div>
    )
})