import { Link } from "react-router-dom";
import Productscard from '../components/product-card';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addToCart} from '../redux/slices/cart';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const dispatch = useDispatch();
    const { cart = [] } = useSelector((state) => state.cart)

    const fetchProductsData = async () => {

        try {

            setLoading(true);

            const response = await fetch(`https://fakestoreapi.com/products`);
            if (!response.ok) throw new Error('This is a new custom error');
            const data = await response.json();

            if (data) {

                setProducts(data);
                setErrorMsg('');
                setLoading(false);
            }

        } catch (error) {

            console.error(error);
            setErrorMsg(error);
            setProducts([]);
            setLoading(false);
        };

    };

    useEffect(() => {
        fetchProductsData();
    }, []);

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));      
    };


    return <div className='pt-6 pb-20'>
        <div className='font-bold font-sans capitalize flex'>
            <div className='flex-1 flex justify-center'>
                <Link to='/products'> <h1 className='text-2xl text-pink-800 '>products</h1></Link>
            </div>
            <div className='w-[100px]'>
                <Link to='/cart'><p className='text-base'>Cart <span>{cart.length}</span></p></Link>
            </div>
        </div>
        <div className="mt-6 flex justify-center">
            {!loading ?
                <div>
                    {
                        products &&
                            products.length ?
                            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-4">
                                {products.map(item =>
                                    <Productscard
                                        key={item.id}
                                        products={item}
                                        buttonComponent={
                                            <button
                                                onClick={()=>handleAddToCart(item)}
                                                className="bg-pink-700 w-full rounded-sm py-2 text-white font-bold text-base shadow-md hover:bg-pink-500 active:hover:bg-pink-900 ">
                                                Add to Cart
                                            </button>
                                        }
                                    />
                                )}
                            </div> :
                            <div className=" flex justify-center items-end text-base font-bold font-sans">
                                no product found
                            </div>
                    }
                </div> :
                <div className="flex justify-center items-end text-base font-bold font-sans">
                    loading...
                </div>
            }
        </div>
    </div>
};

export default Products;