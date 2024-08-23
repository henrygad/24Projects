import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/product-card/Card";
import { removeFromCart } from "../redux/slices/cart";

const Cart = () => {
    const { cart = [] } = useSelector((state) => state.cart)
   const dispatch = useDispatch();

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    return <div className="pt-10 pb-20">
        <div className='font-bold font-sans capitalize flex'>
            <div className='flex-1 flex justify-center'>
                <h1 className='text-2xl text-pink-800 '>Cart</h1>
            </div>
            <div className='w-[100px]'>
                <p className='text-base'>Cart <span>{cart.length}</span></p>
            </div>
        </div>
        <div className="pl-10">
            {
                cart &&
                    cart.length ?
                    <div className="space-y-4 pt-10">
                        {
                            cart.map(item =>
                                <Card
                                    key={item.id}
                                    products={item}
                                    style={'bg-pink-100'}
                                    buttonComponent={
                                        <button
                                            onClick={() => handleRemoveFromCart(item.id)}
                                            className="bg-pink-700 w-full rounded-sm py-2 text-white font-bold text-base shadow-md hover:bg-pink-500 active:hover:bg-pink-900 ">
                                           Remove from Cart
                                        </button>
                                    }
                                />
                            )
                        }
                    </div> :
                    <div>no product add to cart</div>
            }
        </div>
    </div>
};

export default Cart;
