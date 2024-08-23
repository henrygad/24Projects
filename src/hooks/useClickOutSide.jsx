import { useEffect } from "react";


const useClickOutSide = (ref, callBack = () => null) => {

    const handleClickOutside = (e) => {
        if (!ref.current || ref.current.contains(e.target)) {
            return;
        } else {
            callBack();
        };
    };

    useEffect(() => {
      
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', () => console.log('touchstart'));
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', () => console.log('touchstart'));
        };
    }, [ref, callBack]);
};

export default useClickOutSide;
