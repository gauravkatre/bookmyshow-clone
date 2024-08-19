import React from "react";
import Navbar from "../Components/Navbar/navbar.component";
import HeroCrousal from "../Components/HeroCrousar/HeroCrousar.component";
const DefaultLayout = (props) => {
    return (
        <>
       <Navbar />
       <HeroCrousal />
        {props.children}
        </>
    );
};

export default DefaultLayout;