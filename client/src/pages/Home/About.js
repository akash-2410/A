import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
    const skills =[
        
          "JavaScript",
          "ReactJS",
          "NodeJs",
          "Express",
          "MongoDB",
          "MySQL",
          "FireBase",
    ]//elements
  return (
    <div>
      <SectionTitle title="About" /> 
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <dotlottie-player
            src="https://lottie.host/2249e6eb-5e15-45ea-aaff-6057807103bd/QYyhbSER0n.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">
           Hi, I'm a MERN stack Developer,currently enrolled at Birla Institute of Technology, Mesra. 
           My enthusiasm lies in harnessing the latest technologies to craft innovative and scalable web applications. With a keen interest in frontend and backend development, I continuously seek to expand my knowledge and expertise in building robust digital solutions.
          </p>
          <p className="text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
            perspiciatis illum numquam ut magnam officia vero at facilis quod.
            Exercitationem officia aliquam iure nesciunt consequuntur sapiente
            alias omnis ut ipsa.
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies I've been working with recently:
        </h1>
       <div className="flex flex-wrap gap-10 mt-5">
         {skills.map((skill,index)=>(
            <div className="border border-tertiary py-3 px-5">
                 <h1 className="text-tertiary">{skill}</h1>
            </div>   
        ))}
       </div>
      </div>
    </div>
  );
}
export default About;
