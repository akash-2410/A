import React from "react";

const Intro = () => {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white">Hi,I am</h1>
      <h2 className="text-7xl sm:text-3xl text-secondary font-semibold">Akash Pandey</h2>
      <h1 className="text-7xl sm:text-3xl text-white font-semibold">I am a programmer</h1>
      <p className="text-white w-2/3">Self-driven, quick starter, passionate programmer with a curious mind who enjoys solving a complex and
                challenging real-world problems.</p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">
        Get Started
      </button>
    </div>
  );
};

export default Intro;
