import React from "react";
import MovieHero from "../Components/MovieHero/movie.component";
import { MdLocalOffer } from "react-icons/md";
import MovieCrousal from "../Components/HeroCrousar/movieCrousar";
import CrewCrousal from "../Components/HeroCrousar/crewSlider";
import EntertainmentCardSlider from "../Components/Entertainment/Entertainmentcard.component";
const MoviePage = () => {
    return (
        <>
        
    <MovieHero />

    
    <div className="my-12 container px-4 lg:w-1/2 lg:ml-64">
        <div className="flex flex-col items-start gap-3">
            <h3 className="text-gray-800 font-bold text-2xl">About the movie</h3>
            <p>Hanumanthu gets the powers of Hanuman in a distant village and fights for Anjanadri.
</p>
        </div>
    <div className="my-8">
       <hr/>
    </div>
    <div className="flex flex-col items-start gap-3">
      <h1 className="text-gray-800 font-bold text-2xl">Applicable Offers</h1>
      <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-3 w-96">
         <div className="w-8 h-8">
            <MdLocalOffer className="w-full h-full"/>
         </div>
         <div className="flex flex-col items-start">
            <h3 className="text-gray-900 text-lg">Filmy Pass</h3>
            <p className="text-gray-600 text-sm">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
         </div>
      </div>
   </div>
   <div className="my-8">
       <hr/>
    </div>
   <div className="">
   <h1 className="text-gray-800 font-bold text-2xl">Cast</h1>
      <div className="">
   <MovieCrousal/>
   </div>
   </div>
   <div className="my-8">
       <hr/>
    </div>
   <div >
   <h1 className="text-gray-800 font-bold text-2xl">Crew</h1>
      
   <CrewCrousal/>
   
   </div>
   
   </div>
   
    </>
    );
};

export default MoviePage;