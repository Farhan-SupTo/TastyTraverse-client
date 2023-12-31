import { Helmet } from "react-helmet-async";
import UseCart from "../../../hooks/UseCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart,refetch] = UseCart();
  console.log(cart);
  const Total = cart.reduce((sum, item) => item.price + sum, 0);

   const handleDelete = item =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
      fetch(`http://localhost:5000/carts/${item._id}`,{
        method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.deletedCount>0){
            refetch()
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
        }
      })
        }
      });
   }
   
  return (
    <div className="w-full">
      <Helmet>
        <title>Tasty Traverse | MyCart</title>
      </Helmet>

      <div className="uppercase flex font-semibold h-[60px] items-center justify-evenly">
        <h3 className="text-3xl">Total Items: {cart.length}</h3>
        <h3 className="text-3xl">Total Price: ${Total}</h3>
        <Link to='/dashboard/payment'><button  className="btn  btn-warning ">PAY</button></Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
             #
              </th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                cart.map((item,index)=>
                <tr
                key={item._id}>
                <td>
                  <label>
                    {index + 1}
                  </label>
                </td>
                <td>
                 
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                 
                </td>
                <td>
                 {item.name}
                </td>
                <td >{item.price}</td>
                <td>
                  <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-sm bg-red-500 text-white"><FaTrashAlt></FaTrashAlt></button>
                </td>
              </tr>)
            }

          </tbody>

        </table>
      </div>
    </div>
  );
};

export default MyCart;
