import React from 'react';
import { Helmet } from 'react-helmet-async';
import UseCart from '../../../Hooks/UseCart';
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';


const MyClasses = () => {
    const [cart, refetch] = UseCart()
    const total = cart.reduce((sum, cls) => cls.price + sum, 0)
   
    const handleDelete=(row) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-camp-server-ivory.vercel.app/carts/${row._id}`, {
                    method:'DELETE'
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data)
                    if(data.deletedCount > 0){
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                })
             
            }
          })
    }
    return (
        <section>
             <Helmet>
        <title>Summer-Camp || My Classes</title>
      </Helmet>
           <div className='flex uppercase justify-evenly gap-6 items-center' >
            <h2 className='text-3xl font-semibold'>Total Classes:  {cart.length}</h2>
            <h2 className='text-3xl font-semibold'>Total Price: ${total}</h2>
           </div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Image</th>
        <th>Game Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        cart.map( (row, index) => <tr key={row._id}>
        <td>
         {index +1}
        </td>
        <td>
        <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={row.image} />
              </div>
            </div>

        </td>
        <td>
          {row.sports_name}
        </td>
        <td>{row.price}</td>
        <td>
          <button onClick={() =>handleDelete(row)} className="btn btn-ghost bg-red-500 btn-xs text-xl text-white"><MdDelete></MdDelete></button>
        </td>
      </tr> )
      }
     
     
     
     
    </tbody>
   
   
  </table>
</div>
        </section>
    );
};

export default MyClasses;