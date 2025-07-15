 
import Nav from "./components/ui/nav";
import { ScrollArea } from "./components/ui/scroll-area";
import {  Route, Routes } from "react-router-dom";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
function App() {
  return (
    <>
    <div>
      
    </div>
      <ScrollArea
        style={{
          background:
            "radial-gradient(at 100% 96%, #ff61dd 0px, transparent 50%), radial-gradient(at 84% 11%, #42aaff 0px, transparent 50%), radial-gradient(at 32% 99%, #ff9e9e 0px, transparent 50%), radial-gradient(at 4% 77%, #ffd642 0px, transparent 50%), #ffffff",
        }}
        className="flex flex-col mx-auto h-[100svh]  "
      >
        <div className="w-full   py-2 ">
          <h1 className="text-center text-7xl text-black  font-[Syne] font-extrabold py-5  ">
            Bennett Taniguchi
          </h1>

          {/* <div className="text-center py-4 my-4  font-bold text-lg  font-[Syne] text-black       p-4   rounded-full w-[1000px] mx-auto md:w-[100svw] ">
            Fullstack Developer experienced with Javascript/Typescript , React,
            Python, Golang, and AWS
          </div> */}
           <Nav />
        </div>
         
       <Routes>
      <Route path="/" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/skills" element={<Skills/>}/>
      </Routes>
      
       
          
        
      </ScrollArea>
    </>
  );
}
export default App;
