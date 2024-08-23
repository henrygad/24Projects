import { useEffect, useState } from "react";

export const useFetchInstantly = (url, options) => {
    const [data, setData] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoaidng] = useState(false);

    const handleFetch = async (getUrl, options) => {

        try {

            setLoaidng(true);
            const response = await fetch(getUrl, { ...options });
            if (!response.ok) throw new Error('new custom error');
            const data = await response.json();

            if (data) {
                setData(data);
                setLoaidng(false);
                setErrorMsg('');
            };

        } catch (error) {

            console.error(error);
            setErrorMsg(error);
            setData(null);
            setLoaidng(false);
        };
    };

    useEffect(() => {
        url && handleFetch(url, options);
    }, [url]);

    return { data, loading, errorMsg };
};


export default useFetchInstantly
