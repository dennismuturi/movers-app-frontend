import DropDownMenu from "./DropDownMenu";
import { Fragment } from "react";
import {Transition, Menu } from "@headlessui/react";
import { Link, } from "react-router-dom";
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar({
    logoTitle,
    logoTitleLink,
    rightMenuItem1,
    rightMenuItem2,
    rightMenuItem3,
    rightMenuItem4,
    loginMenuItem,
    signUpMenuItem,


    dropdownmenu1,
    dropdownmenu2,
    dropdownmenu3,
    dropdownmenu4,

    dropmenu1Link,
    dropmenu2Link,
    dropmenu3Link,
    dropmenu4Link
})
{
    return (
<>
<div className="bg-black text-white">
<div className="container mx-auto px-6 py-2 flex justify-between items-center">
    <div className="flex p-3 ">
        <Link  to={logoTitleLink} data-baseweb="link"  
        target="_self" 
        aria-label="Go to moversapp.com" 
        data-tracking-name=""
        class=" mr-4 cc cd ce cf cg ch ci cj bn b5 ck cl cm cn co cp cq cr cs ct cu cv cw bt bf cb cx cy cz d0">
            {logoTitle}
            </Link>
        <h1 className="mr-4 text-sm">{rightMenuItem1}</h1>
        <h1 className="mr-4 text-sm">{rightMenuItem2}</h1>
        <h1 className="mr-4 text-sm">{rightMenuItem3}</h1>
        <h1 className="mr-4 text-sm">{rightMenuItem4}</h1>

        </div>
        <div className="flex p-3">
            <Link to="/login">
            <h1 className="mr-4 py-1 pr-10">{loginMenuItem}
            </h1>
            </Link>
{/*             
            <DropDownMenu
            
           
           dropdownmenu1={dropdownmenu1}
           dropdownmenu2= { dropdownmenu2}
           dropdownmenu3= {dropdownmenu3}
           dropdownmenu4 ={dropdownmenu4}
           dropmenu1Link={dropmenu1Link}
           dropmenu2Link={dropmenu2Link}
           dropmenu3Link={dropmenu3Link}
           dropmenu4Link={dropmenu4Link} */}
        
            
            { signUpMenuItem  ? <Link to="/signup"><button className="text-black bg-white rounded-lg py-1 px-2">{signUpMenuItem}</button></Link>  : null}
             <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 focus:ring-offset-teal-800">
                   
                        <img
                          className="h-12 w-12 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-cyan-600">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/userprofile"
                              className={classNames(
                                active ? 'bg-gradient-to-r from-teal-500 to-cyan-600' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Your Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="#"
                              className={classNames(
                                active ? 'bg-gradient-to-r from-teal-500 to-cyan-600' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Settings
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="#"
                              className={classNames(
                                active ? 'bg-gradient-to-r from-teal-500 to-cyan-600' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                             
                            >
                              sign out
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
            </div>
                   
            </div>
        </div>
        

</>
    );
}