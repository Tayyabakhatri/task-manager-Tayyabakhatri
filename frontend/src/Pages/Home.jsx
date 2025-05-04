import React from "react";
import Pic from "../assets/istockphoto-847156808-612x612.jpg";

const Home = () => {
  return (
    <>

      <div className="min-h-screen flex items-center justify-center text-center bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-[length:200%] animate-bg-gradient text-white">
      <div className="px-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Stay Organized, Stay Ahead</h1>
        <p className="text-lg md:text-xl mb-8">
          Manage tasks, set priorities, and boost your productivity — effortlessly.
        </p>
        <div className="flex justify-center gap-4">
         
          <button className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
          Go to DashBoard
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
