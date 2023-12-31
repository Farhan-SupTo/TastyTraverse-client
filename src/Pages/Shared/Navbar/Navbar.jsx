import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import { RiShoppingCartFill } from "react-icons/ri";
import UseCart from "../../../hooks/UseCart";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] =UseCart()
  const [isAdmin] =useAdmin()

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navOption = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
    {
        isAdmin ?   <li>
        <Link to="/dashboard/adminhome">Dashboard</Link>
      </li> :   <li>
        <Link to="/dashboard/userhome">Dashboard</Link>
      </li>
    }
      <li>
        <Link to="/dashboard/mycart">
          
           <RiShoppingCartFill></RiShoppingCartFill>
            <div className="badge -mt-5">+{cart?.length || 0}</div>
          
        </Link>
      </li>

      {user ? (
        <>
          <li>
            <span>{user?.displayName}</span>
          </li>
          <li>
            <Link onClick={handleLogOut}>
              LogOut
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl text-white bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu font-medium text-black  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32"
          >
            {navOption}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Tasty Traverse</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-medium items-center  px-1">{navOption}</ul>
      </div>
    </div>
  );
};

export default Navbar;
