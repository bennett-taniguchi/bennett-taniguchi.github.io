import { useState, useEffect } from "react";
import BlurText from "./blocks/BlurText/BlurText";
 
import RotatingText from "./blocks/RotatingText/RotatingText";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Button } from "./components/ui/button";
 

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a timeout to hide the element after 1 second (1000 milliseconds)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1800);

    // Clean up the timeout when the component unmounts or re-renders
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  useEffect(() => {}, [isVisible]);
  return (
    <>
      <div className=" pt-20 z-99 absolute w-[100svw] h-[70svh]   mx-auto    mb-5 grid grid-cols-2 justify-items-center   ">
        <div className=" font-[Syne] font-light  z-100 w-[40svw] overflow-none flex-col flex gap-y-2  ">
          <BlurText
            text="Welcome"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-8xl font-[Syne] italic text-black   text-center ml-0 font-extrabold"
          />
          <BlurText
            text="Hope you're doing well!"
            delay={150}
            animateBy="words"
            direction="top"
            className="mt-10 text-3xl font-mono text-center ml-10 italic"
          />

          <div className=" flex flex-row w-[90svw]">
            <BlurText
              text="I'm Bennett, I'm a Fullstack Developer with interests in:"
              delay={150}
              animateBy="words"
              direction="top"
              className="font-mono text-2xl text-center ml-10"
            />
            <div className={`  ${!isVisible ? "hidden" : ""}`}>
              <RotatingText
                texts={["AI", "ML", "Math"]}
                mainClassName=" -ml-5 font-bold text-2xl text-red-700  w-[150px] -mt-2 sm:px-2 md:px-3   text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </div>

          <BlurText
              text="Currently looking for roles related to Fullstack development, where I can creatively problem solve!"
              delay={150}
              animateBy="words"
              direction="top"
              className={`font-mono text-xl text-center ml-10    ${!isVisible ? "hidden" : ""}`}
            />
          <p   className={`ml-10  ${!isVisible ? "hidden" : ""}`}>
          
          </p>
        </div>
        <div className="w-[100svw] h-full  -z-0 absolute left-0 "></div>

        <div className="z-99 flex flex-col gap-2 mt-5   h-[400px]  ">
          <div className=" mx-auto gap-x-2 flex h-[100px]">
            <a href="https://www.linkedin.com/in/bennett-taniguchi-360431171/">
              <Button  variant={"reverse"}className=" h-20 w-20  hover:cursor-pointer">
                <img
                  className="   "
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEUMZMX///8AYcQAWcFDf8nL3PIAWrzQ3vMAYcI0eclZjtAucslAgsz6/v3x9/sgbclOhM8AX8QAYsAAX70AV70AWMLm7vgAXb4sdsw5fsoRbsVmltK6z+iUt+AMZcGDrN3c6fNvnddiltWqwuPA0+r0+vyOrt+lweR9pduuyueUst9Lh81pldd1mtYdbcunxOXO4u7Z4fGRyVlRAAAEKUlEQVR4nO3ce1faMBzG8SblEpSCiUUuQrkMhsCc+v7f3Ko4KjW/yLY0WXOez9mf4Ml3vSW1NYoAAAAAAAAAAAAAAAAAAAAAAAAAAADgYiriIsqU72FURcapGnXHk5aMue+xVCCT6n56x960Z2OpMt8jsozz+Xve0Xqc+h6SXbKzYOeSfex7UBap+J591lThHI3awPxw5KGcVFUj0RayaRrI6UaUj8GTpfA9NivknApkvTC2YdwjC9lc+h6dBWpFB7JFCIXx1FDIRr6HZ0Fq2EkZewjgXNMnLhVH34a+x/fPeMdYOK3/gchvTIFsXf/ZKR+bC+u/DcW1cS/d1f84jFobU+H3ANYXadNU2PU9PAvkd0Ngz/forMgMhU/1P5Xm4h0ZmHQCOAzz68WEPNdsg9iE+ZH4QATeBTApPYqf9PvoKIh99E2qOxQ3jVvf47JHDT5fMl5GAQW+3tNvnF/4N3shwrhJc8Ljw/Q0Q13MJ4GcRc8IORjP99vZfpWlQe2gH3EZx7Gs/4IJAADqQ3DJX/+FM38vqHyKlA5Hhx+Pj49X43468P34CheEiz9Z+pTMlrvFaQ6YbNrblRpKf6vNbHRNKX2yT/kwSVd5XluzGGs//Ew9NfIGS/RYs3X2yUGzp7dpnMYu+zPql1mbp46f+XxeSCkVxrpt8+bmWJgJOTPeYP7m5QkWi4Wye0d94t3m3sNmtFao5OyLvle7zPnRaKlQCb6+IDBfXvddJ1oq5BH5WE7JXd/xwWilUKnJpYGM9a7dPk5mpfCWP18cmO+okdOtaKVwYHxm5ZP1wOWNPBuFneUfBTK2dHkzyEbhwfirco3NxOF+aqPw8rPMbzuHV34bhX+h4e6q6KnQ4ZM6ngrZyNlG9FXo7hfMvgp7zt7o8FXIDq52U2+FznbTKgovmgAsalq4mB0mQqjJYfvler98o6sWhevuYPh2C5jz4WD1ReMPR4soi4W91dmtXy7MK469o7mpvcLn8nRaSWPi9PzH/++FCXvW3LuXpoXxi6MllK1tqHtGLBMd0zccLYNtFR60W8T0wkqv7yTQVuGTfpfLuvRXkms3sxo7hQlx/yy7NayOO3Uq3MXExY148PFY6OZyYafwihqsXNJfGteoMCGXQoYfzxo1KmxSO2kkJvTLcXUq3BreraFnp3UqNLwT3aJPpnUqPNBjTV+CKDScFVv0t+pUaLiytegXq1BoCQoLKNRDYfVQWEChHgqrh8ICCvVQWD0UFlCoh8LqobCAQj0UVg+FBRTqobB6KCygUA+F1UNhAYV6KKweCgso1ENh9VBYQKEeCquHwkKAhe1SIf2UoaFwSP+/dB29FtTvUsbnH+Q3VxTDmxOq+zffskqJiOtFpZda+OV/M6uQKepLof0NWAAAAAAAAAAAAAAAAAAAAAAAAAAAgAr8Aj5RWY0PDbn2AAAAAElFTkSuQmCC"
                />
              </Button>
            </a>
         
          <a href="https://github.com/bennett-taniguchi">
              <Button variant={"reverse"} className=" h-20 w-20  hover:cursor-pointer">
                <img
                  className="   "
                  src= "https://cdn-1.webcatalog.io/catalog/github/github-icon-filled-256.png?v=1750639266901" />
              </Button>
            </a>


              <a href="mailto:bennettt356@gmail.com">
              <Button variant={"reverse"} className=" h-20 w-20  hover:cursor-pointer">
                <img
                  className="   "
                  src=  "data:image/png;base64,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"></img>  </Button>
            </a>
          </div>

          <div className="  w-[300px] h-[400px] mx-auto justify-items-center flex flex-col mt-5 ">
            <Avatar className=" w-60 h-60 mx-auto">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        {/* <div className="  w-full h-full         font-[Syne] font-light text-lg">
        
        </div> */}

        {/* <div className="w-[400px] h-[500px]  flex justify-self-start      font-[Syne] font-light text-lg">
          <div className=" self-center align-middle text-2xl">
            💡 Currently seeking: Full-stack developer roles where I can apply
            my experience in scalable web applications, cloud architecture, and
            data-driven solutions.
          </div>
        </div> */}
      </div>
    </>
  );
}
