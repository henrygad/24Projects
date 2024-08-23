import { useEffect, useRef, useState } from "react";
import useFetchLater from "../../hooks/useFetchLater";
// create a load more display products features

const Index = ({ url, limit = 20}) => {
    const { data, loadingFirstData, errorMsg, loadingMoreData, handleFetchLater } = useFetchLater();
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disabledBtn, setDisableBtn] = useState(false);

    const handleFetchProducts = async () => {
        await handleFetchLater(url + `?limit=${limit}&skip=${count}&select=title,price,thumbnail`, {});
        setCount(count + 20);
        data && setProducts((pre) => [...pre, ...data.products]);

        if (count === 100) {
            setDisableBtn(true)
        };
    };

    useEffect(() => {
        !loadingFirstData && handleFetchProducts();
    }, [loadingFirstData]);

    const handleLoadMoreProduct = () => {
        handleFetchProducts();
    };

    return <div className="min-h-screen w-full flex justify-center py-10 border-t">
        <div>
            {!loadingFirstData ?
                <div>
                    <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 ">
                        {products && products.length > 0 ?
                            products.map((items, index) =>
                                <div className="border p-2" key={index}>
                                    <img
                                        src={items.thumbnail}
                                        alt={items.title}
                                        className="h-[240px] w-[240px] object-contain"
                                    />
                                    <h3 className="text-base text-slate-800 font-sans ">{items.title}</h3>
                                    <h4 className="text-sm text-stone-700 font-serif">{items.price}</h4>
                                </div>
                            ) :
                            <div>no products found {errorMsg}</div>
                        }
                    </div>
                    {products &&
                        products.length ?
                        <div className="flex flex-col justify-center items-center gap-4 mt-10">
                            <button
                                disabled={disabledBtn}
                                onClick={handleLoadMoreProduct}
                                className='p-2 text-white text-base font-bold rounded bg-blue-800 cursor-pointer'>
                                {!loadingMoreData ? 'load more' : 'loading...'}
                            </button>
                            <span>{disabledBtn && <p className="bg-gray-200 text-red-900 text-sm">No more products</p>}</span>
                        </div> :
                        null
                    }
                </div> :
                <div>loading...</div>
            }
        </div>
    </div>
};

export default Index;
