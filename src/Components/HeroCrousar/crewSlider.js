import React from "react";
import CrewSlider from "react-slick";

const CrewCrousal = ()=> {
    const settings = {
        
    infinite: false,
    autoplay: false,
    slidesToShow: 7,
    slidesToScroll: 7,
   
        
        
      };
   
   

const images =[
    "https://images.unsplash.com/photo-1682685797303-0ad51eb23e13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682687982134-2ac563b2228b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682687982183-c2937a74257c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1706965272053-a325d775d42b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMzZ8fHxlbnwwfHx8fHw%3D" ,
    "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMzZ8fHxlbnwwfHx8fHw%3D" ,
    "https://images.unsplash.com/photo-1682685797303-0ad51eb23e13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",


]

return(
    <>
    
    <CrewSlider {...settings}>
    {
        images.map((image) => (
            <div className="w-32 h-32 px-2">
            <img
              className="w-full h-full rounded-full"
              src={image}
              alt="Entertainment Image"
             />
            </div>
        )
        )
        }
    </CrewSlider>
    


   
    </>
);
};

export default CrewCrousal;