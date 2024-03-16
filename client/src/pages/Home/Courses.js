import React from 'react'
import SectionTitle from "../../components/SectionTitle";
import { courses } from "../../resources/courses";
const Courses = () => {
      const [selectedItem, setselectedItem] = React.useState(0);
  return (
       <div>
      <SectionTitle title="Courses"/>
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#136b468c] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {courses.map((item, index) => (
            <div
              onClick={() => {
                setselectedItem(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5
                ${
                  selectedItem === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#2c80799d] py-3"
                    : "text-white"
                }`}
              >
                {item.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10 sm:flex-col">
            
          <div className='flex flex-col gap-5'>
            <h1 className="text-secondary text-2xl">
              {courses[selectedItem].title}
            </h1>
            <p className="text-white">{courses[selectedItem].instructor}</p>
            <p className="text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              pariatur corrupti eius mollitia, recusandae veritatis earum
              consequuntur, magnam quod doloribus ipsa numquam labore quae velit
              quam et voluptate, delectus adipisci!
            </p>
          </div>
          <img src={courses[selectedItem].image} alt="Course logo" className="h-52 w-80"/>
        </div>
      </div>
    </div>
  )
}

export default Courses
