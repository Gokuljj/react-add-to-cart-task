import React from 'react'
import { FaOpencart } from "react-icons/fa6";

function WelcomeText() {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-200 h-48">
      <h1 className="text-4xl flex items-center text-yellow-600 font-bold ">Welcome to Shop<span className="text-slate-800">Zen</span> <FaOpencart size={60} className="ml-1 text-slate-800" /></h1>
      <p className="text-4xl text-center align-center text-gray-600 font-semibold">Hello! Ready to find something amazing? Let's shop!</p>
    </div>
  )
}

export default WelcomeText