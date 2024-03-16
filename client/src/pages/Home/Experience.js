import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { Experiences } from "../../resources/Experiences";

const Experience = () => {
  const [selectedItem, setselectedItem] = React.useState(0);

  return (
    <div>
      <SectionTitle title="Expierences" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#136b468c] w-1/3 sm:flex-row sm:overflow-scroll sm:w-full">
          {Experiences.map((experience, index) => (
            <div
              onClick={() => {
                setselectedItem(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-10
                ${
                  selectedItem === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#2c80799d] py-3"
                    : "text-white"
                }`}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>
        <div flex  flex-col gap-5>
          <h1 className="text-secondary text-2xl">{Experiences[selectedItem].title}</h1>
          <h1 className="text-tertiary text-2xl">{Experiences[selectedItem].location}</h1>
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
