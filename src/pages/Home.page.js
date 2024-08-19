import React from "react";
import EntertainmentCardSlider from "../Components/Entertainment/Entertainmentcard.component";
import { Premier } from "../Components/Premier/premier.components";
import PosterSlider from "../Components/PosterSlider/posterslider.components";
import PremierImages from "../config/tempposter";
const Homepage = () => {

    
    return (
        <>

        
       <div className="flex flex-col gap-10">
       <div className="container mx-auto px-4 rounded-xl">
        <h1 className="text-2xl font-bold text-gray-800">
         The best of Entertainment
      </h1>
            <EntertainmentCardSlider />
            
        </div>

        <div className="bg-nav-400 py-16">
      
        
         <div className="container mx-auto px-4">
         <div className="flex">
            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
               alt="Rupay"
               className="w-full h-full"
               />
         </div>
         <PosterSlider 
         images={PremierImages} 
         title="Premiers" subtitle="Brand New Releases Every Friday" 
         isDark/>

         </div>
         </div>
       </div>
       <div className="container mx-auto px-4">
  <PosterSlider
  images={PremierImages}
  title="Online Streaming Events"
  isDark={false}
  />
  </div>
  <div className="container mx-auto px-4">
  <PosterSlider
  images={PremierImages}
  title="Outline streming"
  isDark={false}
  />
  </div>
        </>
    );
};

export default Homepage;