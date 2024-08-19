import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { BiChevronDown, BiChevronRight,BiShare,BiSearch ,BiMenu,BiChevronsLeft,BiShareAlt} from "react-icons/bi";
import { BsShare } from "react-icons/bs";
const MovieHero = () => {
    return (
        <>
        <div className="md:hidden ">
        <img 
        src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/hanu-man-et00311673-1704954533.jpg"
        alt="logo"
        />

        </div>
        <div className="hidden md:block lg:hidden">
        <img 
        src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/hanu-man-et00311673-1704954533.jpg"
        alt="logo" />
        </div>
        <div className=" relative hidden lg:block gap-16 "style={{height:"30rem"}}>
            <div className="absolute w-full h-full z-10"
            style={{backgroundImage: "linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)"}}
            />

            <div className="absolute z-30 w-64 h-96 left-64 top-20">
                <img
                src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/hanu-man-et00311673-1704954533.jpg"
                alt="poster"
                className="h-full w-full rounded-xl"/>

            </div>
            
            <div className="absolute z-30 w-4/12 h-96 left-1/2 top-20 p-4 mr-auto ">
            <div className="text-5xl text-bold">
        <span className="text-gray-50 ">
    Hanu-Man
  </span>
</div>
<div className="flex flex-end align-center">
<div className="text-3xl text-red-500 py-7"> <MdOutlineStar/> </div>
<span className="text-xl text-bold text-gray-50 py-7 px-1 ">
    9.2/10
  </span>
  <span className="text-xl text-bold text-gray-50 py-7 px-2 ">
    435.4 votes
  </span>
  <span className="text-xl text-bold text-gray-50 py-8 px-0">
    <BiChevronRight/>
  </span>

            </div>

            <div className="flex py-2 px-2 bg-gray-900 rounded-xl">
            <div className=" px-5 text-gray-50" >
       <h1 className="text-xl">Add your rating & review</h1>
       <p className="text-stone-500"> your rating matter</p>
  </div>

  <div className="py-4 px-4 ml-12">
    <button className="bg-white text-black rounded py-2 px-1  cursor-pointer justify-content-center">Rate Now</button>
  </div>
                
            </div>
            <div className="flex py-5 gap-2 rounded">
                <div className="bg-white px-2 ">
                 <h5 className="text-black rounded">2D,ICE</h5>
                </div>
                <div className="bg-white">
                <h5 className="text-black rounded">Tamil,Telugu,Hindi,Kannada,Malayalam</h5>
                </div>
            </div>
            <span className=" flex text-white bg-transparent p-0">
                2h 38m . Action,Adventure,Thriller . UA . 12 , jan 2023
            </span>
            <button className="bg-red-600 text-white text-sm rounded px-16 py-5 rounded">
            Book Now
            </button>

            </div>
     
            
        <img 
        src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/hanu-man-et00311673-1704954533.jpg"
        alt="logo"
        className="w-full h-full" />
        </div>

        
        
        </>

    );
};

export default MovieHero;