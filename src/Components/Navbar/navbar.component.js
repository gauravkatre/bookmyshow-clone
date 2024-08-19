import React from "react"
import { BiChevronDown, BiChevronRight,BiSearch ,BiMenu} from "react-icons/bi";

const NavSn = () => {
    return (
        <>
        <div className="text-white flex items-center justify-between">
            <div >
                <h3 className="text-xl font-bold">It All Starts More!</h3>
                <span className="text-gray-300 text-xs flex items-center">
                    Bhubneswar <BiChevronRight/>
                </span>
            </div>
            <div className="w-6 h-6">
                <BiSearch className="w-full h-full" />
            </div>
        </div>
        </>
    )
};
const Navmd = () => {
    return (
        <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-md">
            <BiSearch/>
            <input type="search" className="w-full focus:outline none" placeholder="search for movies,events,sports and activites"/>

        </div>
    )
};
const Navlg = () => {
    return(
        <>
        <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center w-1/2">
            <div className="w-12 h-12">
                <img 
                src="C:\Users\katre\Downloads\book2.png"
                alt="logo"
                className="w-full h-full"/>
             </div>
                <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
                 <BiSearch/>
                 <input type="search" className="w-full focus:outline none" placeholder="search for movies,events,sports and activites"/>
                
                 </div>

            </div>
        <div className="flex items-center gap-2">
        
                
        <span className="text-gray-300 text-xs flex items-center hover:text-white cursor-pointer">
                    Bhubneswar <BiChevronDown/>
        </span>
        <button className="bg-red-600 text-white text-sm rounded px-2 py-1">
            Sign in
            </button>
            <div className="w-8 h-8 text-white">
                <BiMenu className="w-full h-full"/>
            </div>
        </div>
        </div>
        </>
    )
};

const Navbar = () => {
    return (
   <>
   <nav className="bg-nav-800 p-4">
 <div className="md:hidden">
  <NavSn/>
 </div>
 <div className=" hidden lg:hidden md:flex">
<Navmd/>
</div>
<div className="hidden lg:flex">
<Navlg/>
</div>

   </nav>
   </>
    );
};

export default Navbar;