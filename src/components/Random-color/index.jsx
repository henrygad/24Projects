import React, { useEffect, useState } from 'react';

// create a randeom color for hex and rgb

const Index = () => {
    const [color, setColor] = useState('#333333');
    const [typeOfColor, setTypeOfColor] = useState('hex'); 

    const handleRandomNumbers = (length) => {
        return Math.floor(Math.random() * length);
    };

    const handleHEXColor = () => {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';

        for (let i = 0; i < 6; i++) {
            hexColor += hex[handleRandomNumbers(hex.length)];
        };

        setColor(hexColor);
    };

    const handleRGBColor = () => {
       const r = handleRandomNumbers(256);
       const g = handleRandomNumbers(256);
       const b = handleRandomNumbers(256);

       setColor(`rgb(${r}, ${g}, ${b})`);
    };
   
    const handleGenerateColor = (type) => {
        if(type === 'hex'){
            handleHEXColor()
        }else if(type === 'rgb'){
            handleRGBColor()
        }
    };

    useEffect(()=> {
        handleGenerateColor(typeOfColor)
    }, [typeOfColor])

    return <div className='h-screen w-full flex flex-col' style={{
        background: color
    }}>
        <div className=' flex justify-center gap-3 pt-2'>
            <button className='p-2 text-stone-800 text-base font-bold rounded cursor-pointer bg-white' onClick={()=> setTypeOfColor('hex')}>HEX Color</button>
            <button className='p-2 text-stone-800 text-base font-bold rounded cursor-pointer bg-white' onClick={()=> setTypeOfColor('rgb')}>RGB Color</button>
            <button className='p-2 text-stone-800 text-base font-bold rounded cursor-pointer bg-white' onClick={() => handleGenerateColor(typeOfColor)}>Generate Radom Color</button>
        </div>

        <div className='flex-1 flex items-center justify-center' >
            <div className=' flex gap-3 items-center'>
                <h3 className='text-white text-2xl capitalize'>{typeOfColor === 'hex'? 'hex': 'rgb'} :</h3>
                <h1 className='text-white text-4xl'>{color}</h1>
            </div>
        </div>
    </div>
};

export default Index;
