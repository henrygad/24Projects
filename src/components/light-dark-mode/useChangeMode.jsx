import React, { useEffect, useState } from 'react'

const useChangeMode = (key, defaultMode = 'light') => {
    const [mode, setMode] = useState(() => {
        let changeMode;
        try {
            changeMode = JSON.parse(localStorage.getItem(key) || String(defaultMode));
        } catch (error) {
            console.error(error);
            changeMode = defaultMode;
        };

        return changeMode;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(mode));
    }, [key, mode]);

    const handleToggleTheme = () => {
        // if light make dark and if dark make light
        setMode(mode === 'light' ? 'dark' : 'light')
    }

    return { mode, handleToggleTheme };
};

export default useChangeMode;
