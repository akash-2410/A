import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { Experiences } from "../../resources/Experiences";

const Experience = () => {
  const [selectedItem, setselectedItem] = React.useState(0);

  return (
    <div>
      <SectionTitle title="Expierences" />
      <div className="flex py-10">
        <div className="flex flex-col gap-10 border-l-2 border-[#136b468c]">
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
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#2c80799d]"
                    : "text-white"
                }`}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Experience;
