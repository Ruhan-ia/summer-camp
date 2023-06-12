import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import { BsCart3 } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { Helmet } from 'react-helmet-async';


const Dashboard = () => {
    return (
        <section>
              <Helmet>
        <title>Summer-Camp || Dashboard</title>
      </Helmet>
            <Navbar></Navbar>
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
        
          
          <Outlet></Outlet>
          
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><NavLink to='/dashboard/myclasses'><BsCart3></BsCart3>My Classes</NavLink></li>
            <li><NavLink to='/dashboard/payment'><MdPayment></MdPayment>Payment History</NavLink></li>
            <li><NavLink to='/dashboard/paidclasses'><MdPayment></MdPayment>Paid Classes</NavLink></li>
          </ul>
        
        </div>
      </div>
      <Footer></Footer>
      </section>
    );
};

export default Dashboard;