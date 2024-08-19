import React from "react";
import MovieSlider from "react-slick";



const MovieCrousal = ()=> {
    const settings = {
    infinite: true,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    InitialSlide: 0
        
        
      };
   
   

const images =[
    "https://images.unsplash.com/photo-1682685797303-0ad51eb23e13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682687982134-2ac563b2228b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682687982183-c2937a74257c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1706965272053-a325d775d42b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMzZ8fHxlbnwwfHx8fHw%3D" 

]

return(
    <>
    <div className="  " >
    <MovieSlider {...settings}>
    {
        images.map((image) => (
            <div className=" w-full h-32 px-2 ">
                <img src={image} alt="testing" className="w-full h-full rounded-full  "/>
            </div>
        )
        )
        }
    </MovieSlider>
    </div>


   
    </>
);
};

export default MovieCrousal;