import { NavLink, Outlet } from "react-router-dom";
import { IoHomeSharp, IoWallet, IoCart, IoMenu } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { TbBrandBooking } from "react-icons/tb";
import { VscPreview } from "react-icons/vsc";
import { FaHome, FaShopify, FaUser, FaUtensilSpoon } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import {
  MdOutlinePermContactCalendar,
  MdPermContactCalendar,
} from "react-icons/md";
import UseCart from "../hooks/UseCart";

const Dashboard = () => {
  const [cart] = UseCart();

  // todo load data from server to dynamic isadmin from data
  const isAdmin = true;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full ">
          {/* Sidebar content here */}

          {isAdmin ? (
            <>
  <div className="uppercase">
  <li>
                <NavLink to="/dashboard/home">
                  <IoHomeSharp></IoHomeSharp>Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaUtensilSpoon></FaUtensilSpoon>Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                 <TfiMenuAlt></TfiMenuAlt>Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/booking">
                  <TbBrandBooking></TbBrandBooking>Manage Booking
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUser></FaUser>All User
                </NavLink>
              </li>
  </div>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <IoHomeSharp></IoHomeSharp>USER{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <SlCalender></SlCalender>RESERVATION
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  <IoWallet></IoWallet>PAYMENT
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <IoCart></IoCart>MY CART
                  <div className="badge">+{cart?.length || 0}</div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <VscPreview></VscPreview>MY REVIEW
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/booking">
                  <TbBrandBooking></TbBrandBooking>MY BOOKING
                </NavLink>
              </li>
            </>
          )}

          <div className="divider">OR</div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <IoMenu></IoMenu>MENU
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaShopify></FaShopify>SHOP
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/contact">
              <MdOutlinePermContactCalendar></MdOutlinePermContactCalendar>
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
