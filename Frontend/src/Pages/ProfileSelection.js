// import { useState } from "react";
// import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import HomePage from "./HomePage";
export default function ProfileSelection() {
  const [SelectedOption,SetSelectedOption]=useState('student');
  return (
    <div className="h-screen w-screen flex justify-center items-center  flex-col gap-5">
      <div className="bg-white pl-10 pr-10 w-[90%] lg:w-[400px] md:w-[60%] pb-9 pt-5 shadow-[0_4px_8px_2px_rgba(0,0,0,0.16)] ">
        <div className="flex justify-center  mb-5">
          <img className="" src="/iitg_logo.png" alt="iitg_logo" width="65px" />
        </div>
        <p className="text-[rgb(27,33,45)] font-semibold mb-3">I am a</p>

        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-x-2 cursor-pointer text-sm">
            <input
              type="radio"
              name="radioGroup"
              defaultChecked
              onChange={()=>{SetSelectedOption('student')}}
              className=" appearance-none p-1 border-[#494D57]  border rounded-[50%] grid place-content-center  before:w-[0.6rem] before:h-[0.6rem] before:shadow-[inset_1em_1em_#2164E8]  before:rounded-[50%] before:scale-0  checked:before:scale-100 checked:border-[#2164E8]"
            />{"Student"}
            
          </label>
          <label className="flex items-center gap-x-2 cursor-pointer text-sm">
            <input
              type="radio"
              name="radioGroup"
              onChange={()=>{SetSelectedOption('admin')}}
              className="   appearance-none border-[#494D57]   p-1 border rounded-[50%] grid place-content-center before:w-[0.6rem] before:h-[0.6rem]  before:rounded-[50%] before:shadow-[inset_1em_1em_#2164E8]  before:scale-0  checked:before:scale-100 checked:border-[#2164E8]"
            />{"Alumni"}
            
          </label>
          <label className="flex items-center gap-x-2 cursor-pointer text-sm">
            <input
              type="radio"
              name="radioGroup"
              onChange={()=>{SetSelectedOption('admin')}}
              className="   appearance-none border-[#494D57]   p-1 border rounded-[50%] grid place-content-center before:w-[0.6rem] before:h-[0.6rem]  before:rounded-[50%] before:shadow-[inset_1em_1em_#2164E8]  before:scale-0  checked:before:scale-100 checked:border-[#2164E8]"
            />{"Professor"}
            
          </label>
          <label className="flex items-center gap-x-2 cursor-pointer text-sm">
            <input
              type="radio"
              name="radioGroup"
              onChange={()=>{SetSelectedOption('admin')}}
              className="   appearance-none border-[#494D57]  p-1 border rounded-[50%] grid place-content-center before:w-[0.6rem] before:h-[0.6rem]  before:rounded-[50%] before:shadow-[inset_1em_1em_#2164E8]  before:scale-0  checked:before:scale-100 checked:border-[#2164E8]"
            />{"VP/Board Director"}
            
          </label>
          <label className="flex items-center gap-x-2 cursor-pointer text-sm">
            <input
              type="radio"
              name="radioGroup"   
              onChange={()=>{SetSelectedOption('admin')}}
              className="   appearance-none border-[#494D57]  p-1 border rounded-[50%] grid place-content-center before:w-[0.6rem] before:h-[0.6rem]  before:rounded-[50%] before:shadow-[inset_1em_1em_#2164E8]  before:scale-0  checked:before:scale-100 checked:border-[#2164E8]"
            />{"General Secretary"}
            
          </label>
          <label className="flex items-center gap-x-2 cursor-pointer text-sm">
            <input
              type="radio"
              name="radioGroup"
              onChange={()=>{SetSelectedOption('admin')}}
              className="  appearance-none border-[#494D57]   p-1 border rounded-[50%] grid place-content-center before:w-[0.6rem] before:h-[0.6rem]  before:rounded-[50%] before:shadow-[inset_1em_1em_#2164E8]  before:scale-0  checked:before:scale-100 checked:border-[#2164E8]"
            />{"Student Body Representative"}
            
          </label>
        </div>
        <div className="flex justify-end mt-10">
          <Link to={SelectedOption==="student"?"/StudentsSignUp":"/AdminSignUp"}>
            <button className=" inline-flex items-center p-1 bg-[#2164E8] text-white rounded-sm pl-4 pr-4">
              Continue
            </button>
          </Link>
        </div>
      </div>
      <div className="w-[90%] md:w-[60%] lg:w-[400px] p-4 pl-8 text-sm font-normal  items-center  bg-white shadow-[0_4px_8px_2px_rgba(0,0,0,0.16)]">
        <p>
          {"Need help? \t"}
          <Link to="/" className="text-[rgba(33,100,232,1)]">
            Contact us
          </Link>
        </p>
      </div>
    </div>
  );
}
