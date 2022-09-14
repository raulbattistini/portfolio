import React from "react";
import DescriptionIcon from '@mui/icons-material/Description';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export const Certificates = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black pt-10 text-white">
        <h2 className="z-10 text-white text-center text-2xl font-extralight bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text rounded-md p-3  ">
          {" "}
         Certificados <LabelImportantIcon className="text-white justify-center flex content-center items-center content-center self-center text-2xl object-fit"/>
        </h2>{" "}
        <div className="mt-5 flex flex-col justify-center text-center pb-10">
         <span className="font-poppins p-5"> Name of the course <DescriptionIcon className="text-white"/> </span>
         <span className="font-extralight p-5"> Código de verificação </span>
         <p className="font-thin max-w-sm flex flex-col self-center"> Brief about the course content and what it has been said in it like hours, content  <br />
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officia veniam blanditiis enim? Eius saepe necessitatibus deserunt nobis praesentium? Dolore rem ullam cupiditate facilis temporibus animi corporis molestiae explicabo blanditiis! </p>
        </div>
        <div className="mt-5 flex flex-col justify-center text-center pb-10">
         <span className="font-poppins p-5"> Name of the course <DescriptionIcon className="text-white"/>  </span>
         <span className="font-extralight p-5"> Código de verificação </span>
         <p className="font-thin max-w-sm flex flex-col self-center"> Brief about the course content and what it has been said in it like hours, content  <br />
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officia veniam blanditiis enim? Eius saepe necessitatibus deserunt nobis praesentium? Dolore rem ullam cupiditate facilis temporibus animi corporis molestiae explicabo blanditiis! </p>
        </div>
        <div className="mt-5 flex flex-col justify-center text-center pb-10">
         <span className="font-poppins p-5"> Name of the course <DescriptionIcon className="text-white"/>  </span>
         <span className="font-extralight p-5"> Código de verificação </span>
         <p className="font-thin max-w-sm flex flex-col self-center"> Brief about the course content and what it has been said in it like hours, content  <br />
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officia veniam blanditiis enim? Eius saepe necessitatibus deserunt nobis praesentium? Dolore rem ullam cupiditate facilis temporibus animi corporis molestiae explicabo blanditiis! </p>
        </div>
        <div className="mt-5 flex flex-col justify-center text-center pb-10">
         <span className="font-poppins p-5"> Name of the course <DescriptionIcon className="text-white"/>  </span>
         <span className="font-extralight p-5"> Código de verificação </span>
         <p className="font-thin max-w-sm flex flex-col self-center"> Brief about the course content and what it has been said in it like hours, content  <br />
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officia veniam blanditiis enim? Eius saepe necessitatibus deserunt nobis praesentium? Dolore rem ullam cupiditate facilis temporibus animi corporis molestiae explicabo blanditiis! </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
