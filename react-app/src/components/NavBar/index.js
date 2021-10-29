import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import Footer from "../Footer";
import logo from "../../images/bb-logo-closed.png";

import { useToggleShowNav } from "../../store/session";

import './navbar.css';

const NavBar = () => {
   const user = useSelector((state) => state.session.user);
   const showNav = useSelector((state) => state.session.showNav)

   const toggleShowNav = useToggleShowNav(!showNav)

   if (!user) {
      return null;
   }

   return (
      <div className="navbar">
         <button onClick={toggleShowNav}>
            <img className="logo" src={logo} alt="logo" />
         </button>
         <nav
            className="nav-links"
            style={ !showNav ? { transform: "translateY(-510px)" } : {}}
         >
            <div className='navbar__hello'>
               <h2>Hello,</h2>
               <h2>{user.username}</h2>
            </div>

            <ul className='nav-links__list'>
               <li>
                  <NavLink
                     to={`/users/${user.id}`}
                     activeClassName='navbar--active'
                  >
                     Your Posts
                  </NavLink>
               </li>
               <li>
                  <NavLink to='/posts/latest' activeClassName='navbar--active'>
                     Latest Posts
                  </NavLink>
               </li>
               <li>
                  <NavLink to='/posts/new' activeClassName='navbar--active'>
                     Create New Post
                  </NavLink>
               </li>
               <li>
                  <LogoutButton />
               </li>
            </ul>
            <div className='nav-footer'>
               <Footer />
            </div>
         </nav>
      </div>
   );
};

export default NavBar;
