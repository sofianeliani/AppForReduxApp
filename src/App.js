import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";

import Login from "./components/authComponent/login.component";
import Register from "./components/authComponent/register.component";
import Home from "./components/pagesComponent/home.component";
import Profile from "./components/authComponent/profil.component";
import BoardUser from "./components/authComponent/boardUser.component";
import BoardAdmin from "./components/authComponent/boardAdmin.component";
import BonusMenu from "./components/blocsComponent/sectionComponent/bonusComponent/bonusmenu.component";

import Navbar from './components/features/navbar.component'

import { logout } from "./actions/auth.action";
import { clearMessage } from "./actions/message.action";

import { history } from "./utils/history";

import "tailwindcss/tailwind.css";

const App = () => {
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    }
  }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
    window.location.reload();
  };


  return (
    <div>
      <Router history={history}>
      <Navbar/>
        <nav className="bg-gray-800">
              <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                  <div className="relative flex items-center justify-between h-16">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                      <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                      <span className="sr-only">Open main menu</span>

                      <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>

                      <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      </button>
                  </div>
                  <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                      <div className="flex-shrink-0 flex items-center">
                      <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
                      <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow"/>
                      </div>
                      <div className="hidden sm:block sm:ml-6">
                      <div className="flex space-x-4">
                      <Link to={"/home"} className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                        Home
                      </Link>
                      <Link to={"/bonus"} className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                        Bonus
                      </Link>

                      {showAdminBoard && (
                        <Link to={"/admin"}className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Admin</Link>
                      )}

                      {currentUser && (
                        <Link to={"/user"} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">User</Link>

                      )}

                      {currentUser ? (
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <Link to={"/profile"} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Profil</Link>
                        </div>

                      ) : (
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                          <Link to={"/login"} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                          <Link to={"/register"}className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Register</Link>
                        </div>
                      )}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {currentUser ? (
                  <div class="flex flex-shrink-0 items-center ml-auto">
                  <button class="inline-flex items-center p-2  rounded-lg">
                    <span class="sr-only">User Menu</span>
                    <div class="hidden md:flex md:flex-col md:items-end md:leading-tight">
                      <span class="font-semibold text-white">
                      {currentUser.username}
                      </span>
                      <span class="text-sm text-white">Developer</span>
                    </div>
                    <span class="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                      <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="user profile photo" class="h-full w-full object-cover"/>
                    </span>
                    <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" class="hidden sm:block h-6 w-6 text-gray-300">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg> 
                  </button>
                  <div class="border-l pl-3 ml-3 space-x-1">
                    <button class="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                      <span class="sr-only">Notifications</span>
                      <span class="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
                      <span class="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
                      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </button>
                  <button href="/login" onClick={logOut} class="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                      <span class="sr-only">Log out</span>
                      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                  </button>
                </div>
                </div>
                  ) : (
                    <div></div>
                  )}
                
                  </div>
                </div>
              </div>

              <div className="sm:hidden" id="mobile-menu">
                  <div className="px-2 pt-2 pb-3 space-y-1">
                  <Link to={"/home"} className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                        Home
                      </Link>

                      {showAdminBoard && (
                        <Link to={"/admin"}className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Admin</Link>
                      )}

                      {currentUser && (
                        <Link to={"/user"} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">User</Link>

                      )}

                      {currentUser ? (
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <Link to={"/profile"} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Profil</Link>
                          <Link href="/login" onClick={logOut} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Logout</Link>
                        </div>

                      ) : (
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                          <Link to={"/login"} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                          <Link to={"/register"}className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Register</Link>
                        </div>
                      )}
                  </div>
              </div>
          </nav>
          <div>
          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/bonus" component={BonusMenu} />
              <Route path="/user" component={BoardUser} />
              <Route path="/admin" component={BoardAdmin} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;