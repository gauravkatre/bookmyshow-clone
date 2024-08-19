import React,{useEffect,useState} from "react";
import HeroSlider from "react-slick";
import { NextArrow,PrevArrow } from "./Arrows.components";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const HeroCrousal = ()=> {


    const [images,setImages] = useState([]);

    useEffect(() => {
        const requestNowPlayingMovies = async() => {
            const getImages = await axios.get("/movie/now_playing");
            console.log(getImages);
        };
        requestNowPlayingMovies();
    },[]);
    
    const settings = {
        arrows: true,
        autoplay: true,
        centerPadding: "200px",
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
    const settingsmd = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
   



return(
    <>
    <div className="lg:hidden">
    <HeroSlider {...settingsmd}>
        {
        images.map((image) => (
            <div className="w-full h-64 md:h-80 py-3">
                <img src={image} alt="testing" className="w-full h-full"/>
            </div>
        )
        )
        }
    </HeroSlider>
    </div>


    <div className="hidden lg:block">
    <HeroSlider {...settings}>
        {
        images.map((image) => (
            <div className="w-full h-96 px-2 py-3">
                <img src={image} alt="testing" className="w-full h-full rounded-md"/>
            </div>
        )
        )
        }
    </HeroSlider>
    </div>
    </>
);
};

export default HeroCrousal;