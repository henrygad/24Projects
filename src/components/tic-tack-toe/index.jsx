import { useEffect, useState } from "react";
import Square from "./Square";

// create a tic tack toe game

const Index = () => {
    const [squares, setSquares] = useState(Array(9).fill(''));
    const [isXTurn, setIsXturn] = useState(true);
    const [status, setStatus] = useState('');

    const handleOnclick = (getValue) => {
        const cpySquares = [...squares];
        if (handleGetWinner(cpySquares) ||
            cpySquares[getValue]) return;
        cpySquares[getValue] = isXTurn ? 'x' : 'o';
        setSquares(cpySquares);
        setIsXturn(!isXTurn);
    };

    const handleGetWinner = (getSquares) => {
        const winningPatter = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],

            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],

            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < winningPatter.length; i++) {
            const [x, y, z] = winningPatter[i];

            if (getSquares[x] && getSquares[x] === getSquares[y] &&
                getSquares[x] === getSquares[z]
            ) {
                console.log(getSquares[x])
                return getSquares[x]
            }
        };

        return null;
    };

    useEffect(() => {
        if (handleGetWinner(squares)) {
            setStatus(`The winner is ${handleGetWinner(squares)}!. play again`)
        } else if (
            !handleGetWinner(squares) &&
            squares.every(item => item !== '')) {
            setStatus(`The game was a draw! play again.`)
        } else {
            setStatus(`The next player is: ${isXTurn ? 'x' : 'o'}`)
        };

    }, [isXTurn, squares]);

    const handleStartGame = ()=>{
        setSquares(Array(9).fill(''));
        setIsXturn(true);
    };

    return <div className="min-h-screen flex justify-center items-center">
        <div> 
            <div className="mb-10 max-w-[320px]">
                <h1 className="text-2xl text-center font-bold">Tic Tack Toe Game</h1>
            </div>
            <div className=" grid grid-cols-3 max-w-[320px] ">
                {
                    squares.map((item, index) =>
                        <Square key={index} value={item} onClick={() => handleOnclick(index)} />
                    )
                }
            </div>
            <div className="flex flex-col gap-4 items-center mt-20">
                <h1 className="font-bold text-2xl">{status}</h1>
                { status.includes('play again') &&
                    <button onClick={handleStartGame} className="py-2 px-3 bg-blue-700 rounded text-white">Start</button>}
            </div>
        </div>
    </div>
};

export default Index;
