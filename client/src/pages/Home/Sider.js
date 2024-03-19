import React from "react";

function Sider() {
  return (
    <div className="fixed left-0 bottom-0 px-10  sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href=""> <i class="ri-instagram-line text-gray-400 text-xl"></i></a>
         <a href="helloakashpandey@gmail.com">  <i class="ri-mail-send-line text-gray-400 text-xl"></i></a>
         <a href="https://github.com/akash-2410"> <i class="ri-github-line text-gray-400 text-xl"></i></a>
          <a href="https://www.linkedin.com/in/akash2410/"><i class="ri-linkedin-line text-gray-400 text-xl"></i></a>
        </div>
        <div className="w-[1px] h-52 bg-[#38aab7] sm:hidden"></div>
      </div>
    </div>
  );
}

export default Sider;
