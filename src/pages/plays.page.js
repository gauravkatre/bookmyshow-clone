import React from "react";
import Poster from "../Components/Poster/poster.component";
import PlaysFilter from "../Components/plays.filter.js/plays.component";

const Playspage =()=>{
    return (
        <>
        <div className="container mx-auto py-4">
            <div className="w-full lg:flex lg:flex-row-reverse">
         
               
            <div className="lg:w-8/12">
                <h1 className="text-2xl font-bold mb-4">Plays In Nagpur</h1>
                <div className="flex flex-wrap">
                 <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                    <Poster
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA5IE1hcg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00384905-warwzzupcu-portrait.jpg"
                    title="Mastermind"
                    subtitle="Tilak Smarak Mandir: Nagpur" />
                 </div>
                 <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                    <Poster
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAyNyBGZWIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00324029-fkxurhvryu-portrait.jpg"
                    title="Mastermind"
                    subtitle="Tilak Smarak Mandir: Nagpur" />
                 </div>
                 <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                    <Poster
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxMCBNYXI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00336256-zragakxsgt-portrait.jpg"
                    title="Mastermind"
                    subtitle="Tilak Smarak Mandir: Nagpur" />
                 </div>
                 <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                    <Poster
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMyBNYXIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00388228-efflszmffy-portrait.jpg"
                    title="Mastermind"
                    subtitle="Tilak Smarak Mandir: Nagpur" />
                 </div>
                 <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                    <Poster
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAyNyBGZWIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00324029-fkxurhvryu-portrait.jpg"
                    title="Mastermind"
                    subtitle="Tilak Smarak Mandir: Nagpur" />
                 </div>
                 <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                    <Poster
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA5IE1hcg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00387830-zkbdxnanwr-portrait.jpg"
                    title="Mastermind"
                    subtitle="Tilak Smarak Mandir: Nagpur" />
                 </div>
                 <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                    <Poster
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA5IE1hcg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00387830-zkbdxnanwr-portrait.jpg"
                    title="Mastermind"
                    subtitle="Tilak Smarak Mandir: Nagpur" />
                 </div>
                 <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                    <Poster
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA5IE1hcg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00387830-zkbdxnanwr-portrait.jpg"
                    title="Mastermind"
                    subtitle="Tilak Smarak Mandir: Nagpur" />
                 </div>
                </div>
            </div>
            


            
            <div className="lg:w-1/4">
        <h2 className="text-2xl font-bold mb-4">Filters</h2>
        <div>
         <PlaysFilter  title="Date" tags={["Today","Tommorow","This Weedkend"]} />
         <PlaysFilter title="Language" tags={["Tamil", "Kannada"]}/>
        <PlaysFilter title="Categories" tags={["Theatre"]}/>
         <PlaysFilter title="Date" tags={["Today","Tommorow","This Weedkend"]} />
         <PlaysFilter title="Date" tags={["Today","Tommorow","This Weedkend"]} />
        </div>
        
            </div>
        </div>
        </div>
        </>
    )
}
export default Playspage;