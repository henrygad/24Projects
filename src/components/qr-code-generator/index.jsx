import React, { useState } from 'react'
import QRCode from 'react-qr-code'

//using a npm package (react-qr-code), create a QR Code Generetor

const Index = ({type = ''}) => {
    const [input, setInput] = useState('');
    const [qrCode, setQrCode] = useState('');


    const handleGenerateQRCode = () => {
        setQrCode(input);
        setInput('');
    };

    return <div className='min-h-screen w-full flex justify-center top-20 border-t'>
        <div className='space-y-4'>
            <div className=' flex justify-center'><h1 className='text-2xl text-stone-800'>QR Code Generator</h1></div>
            <div className=' flex gap-6 items-center'>
                <span>
                    <input
                        type="text"
                        name="qr-code"
                        value={input}
                        onChange={(e) => setInput(e.target.value)} 
                        className='outline-none border rounded-sm p-1' />
                </span>
                <span>
                    <button
                        disabled={input.trim() == ''? true : false}
                        className='bg-blue-800 text-white text-sm font-bold p-2 rounded-sm'
                        onClick={handleGenerateQRCode}>Generate code</button>
                </span>
            </div>
            <div>
                <QRCode
                    id='my-first-qr-code'
                    size={400}
                    value={qrCode}
                    bgColor='white'
                />
            </div>
        </div>
    </div>
};

export default Index;
