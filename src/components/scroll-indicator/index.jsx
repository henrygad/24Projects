import React, { useEffect, useState } from 'react';

//create scroll indicator

const Index = ({ url, limit = 100 }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const fetchProducts = async (getUrl) => {

        try {

            setLoading(true);

            const response = await fetch(getUrl + `?limit=${limit}&skip=0&select=title,price,thumbnail`);
            const data = await response.json();

            if (data.products &&
                data.products.length > 0
            ) {
                setProducts(data.products);
                setLoading(false);
            };

        } catch (error) {

            console.error(error);
            setErrorMsg(error.response);
            setLoading(false);
        };

    };

    useEffect(() => {
        url && fetchProducts(url);
    }, [url]);

    const handleScrollIndicator = () => {
        //document.documentElement.scrollHeight, tell you number of height available to scroll
        //document.documentElement.clientHeight, the height of the body
        // document.documentElement.scrollTop, the number of height you've gone while scrollign from top

        const howMuchScrolledFromTop = document.body.scrollTop || document.documentElement.scrollTop;
        const bodyHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolledFromTop / bodyHeight) * 100);
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScrollIndicator);

        return () => {
            window.removeEventListener('scroll', handleScrollIndicator);
        };
    });

    return <div className='min-h-screen flex justify-center pt-10'>
        <div className='fixed top-0 right-0 left-0 z-50'>
            <div className='flex justify-center w-full'>
                <h1 className='font-bold text-3xl text-slate-900'>Custom Scroll Indicator</h1>
            </div>
            <div className='h-4 w-full border-t border-b border-blue-900 shadow-md '>
                <span className='block h-full bg-sky-800 rounded-tr rounded-br ' style={{width: scrollPercentage + '%'}}></span>
            </div>
        </div>
        <div className=''>
            {!loading ?

                <div>{products &&
                    products.length ?
                    <div className='space-y-3'>
                        {products.map((items) =>
                            <div key={items.title} className='text-center '>{items.title}</div>
                        )}
                    </div> :

                    <div>no products found</div>}</div> :

                <div>loading...</div>}
        </div>
    </div>
};

export default Index;
