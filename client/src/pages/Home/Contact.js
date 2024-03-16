import React from "react";
import SectionTitle from "../../components/SectionTitle";

const Contact = () => {
  const user = {
    name: "Akash Pandey",
    email: "helloakashpandey@gmail.com",
    phone: "+91-8340687066",
    country: "INDIA",
  };
  return (
    <div>
      <SectionTitle title="Want to Say Hello?" />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-tertiary">{"{"}</p>
          {Object.keys(user).map((key) => (
            <p className="ml-5">
              <span className="text-tertiary">{key}: </span>
              <span className="text-tertiary">{user[key]}</span>
            </p>
          ))}
          <p className="text-tertiary">{"}"}</p>
        </div>
        <div className="h-[500px]">
          <dotlottie-player
            src="https://lottie.host/63c661e4-979e-4441-aba1-cb38438d85a9/dFKWks9mTx.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
};

export default Contact;
