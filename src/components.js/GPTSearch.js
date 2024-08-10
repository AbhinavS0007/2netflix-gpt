import React from "react";

const GPTSearch = () => {
  return (
    <div className="h-screen w-screen bg-[#B9BAA3]  justify-center grid">
      <div className="h-16 w-auto  mt-40 flex">
        <input
          className="p-4 h-full w-96 text-black rounded-lg "
          type="text"
          placeholder="Search for content..."
        />
        <button className="p-4  h-full text-black bg-red-700 rounded-lg bg-red-800">Search</button>
      </div>
    </div>
  );
};

export default GPTSearch;
