import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const UseCart = () => {
    const {user} = useContext(AuthContext)
    const{isLoading, data: cart = []} = useQuery({
        queryKey:['carts', user?.email],
        queryFn:async ()=>{
            const response = await fetch(`https://summer-camp-server-ivory.vercel.app/carts?email=${user.email}`)
            return response.json();
        },

      
    })
    return [cart, isLoading]
};

export default UseCart;