import { useEffect, useState } from "react";

export const useFetchLater = () => {
    const [data, setData] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');
    const [loadingFirstData, setLoadingFirstData] = useState(false);
    const [loadingMoreData, setLoadingMoreData] = useState(false);
    const [renderCount, setRenderCount] = useState(0);

    const handleFetchLater = async (getUrl, options) => {

        setRenderCount(renderCount + 1);

        try {

            renderCount < 1 ? setLoadingFirstData(true) : setLoadingMoreData(true);
            const response = await fetch(getUrl, { ...options });
            if (!response.ok) throw new Error('new custom error');
            const data = await response.json();

            if (data) {
                setData(data);
                setLoadingFirstData(false);
                setLoadingMoreData(false);
                setErrorMsg('');
            };

        } catch (error) {

            console.error(error);
            setErrorMsg(error);
            setData(null);
            setLoadingFirstData(false);
            setLoadingMoreData(false);
        };
    };

    return { data, loadingFirstData, errorMsg, loadingMoreData, handleFetchLater };
};


export default useFetchLater