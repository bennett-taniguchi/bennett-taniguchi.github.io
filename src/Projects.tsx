import Navbar from "./components/landing/Navbar";
import ProjectCard from "./components/landing/ProjectCard";
import Marquee from "./components/ui/marquee";
import Nav from "./components/ui/nav";
import { ScrollArea } from "./components/ui/scroll-area";

function App() {
 const projects =[
  {img:"notility.png",name:"Notility",src:"https://bennett-taniguchi-blogr-nextjs-prisma.vercel.app/",repo:"https://github.com/bennett-taniguchi/notility"},
  {img:"tftactips.png",name:"TFTac.Tips",src:"https://teamfight-page.pages.dev/",repo:"https://github.com/bennett-taniguchi/tftactips"},
  {img:"restaurantwebsite.png",name:"Restaurant Website",src:"https://mexican-market-mockup.pages.dev/en/",repo:"https://github.com/bennett-taniguchi/restaurantwebsite"}

 ]
  return (
    <>
     
      <div className="  w-[90svw] h-full   mx-auto    mb-5 grid grid-cols-3 justify-items-center ">
        {projects.map((p) => (
          <div className="  m-2 mt-10">
            <ProjectCard project={p}/>
          </div>
        ))}
        
      </div>
    </>
  );
}
export default App;
