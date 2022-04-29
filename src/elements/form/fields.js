import React from "react";
import { formItems, countries } from "../../data/miscData";

export default function Fields() {
  return (
    <form className="flex flex-col items-center w-full ">
      <div class="w-full flex flex-row justify-evenly flex-wrap">
        {formItems.map((item) => {
          return (
            <div key={item.key} className="w-5/12">
              <label
                class="hidden block text-gray-700 text-sm font-bold mb-2 sm:block"
                for="username"
              >
                {item.title}
              </label>
              <input
                className="shadow appearance-none border border-[#AFAFAF] rounded w-full mb-2 p-2 pl-5 text-gray-700 placeholder-[#B6B6B6] font-headers text-placeholder  bg-[#FAFAC] focus:outline-none focus:shadow-outline sm:hidden"
                id={item.key}
                type="text"
                placeholder={`${item.title}*`}
              />
              <input
                className="hidden shadow appearance-none border border-[#AFAFAF] rounded w-full mb-2 p-3 pl-5 text-gray-700 placeholder-[#B6B6B6] font-poppins text-fieldDesk italic bg-[#FAFAC] focus:outline-none focus:shadow-outline sm:block"
                id={item.key}
                type="text"
                placeholder={`Enter your ${item.title.toLowerCase()}`}
              />
            </div>
          );
        })}
      </div>

      <div className="w-11/12 p-1 flex flex-col justify-center items-center">
        <label
          class="hidden block text-gray-700 text-sm font-bold mb-2 sm:block text-left w-full"
          for="Countries"
        >
          Country
        </label>
        <select
          id="countries"
          name="countries"
          className="shadow appearance-none border border-[#AFAFAF] text-[#B6B6B6] rounded w-full mb-2 p-2 pl-5 text-gray-700 font-headers text-placeholder  bg-[#FAFAC] focus:outline-none focus:shadow-outline"
        >
          <option value="" disabled selected>
            Country*
          </option>
          {countries.map((country) => {
            return (
              <option value={country.name} key={country.name}>
                {country.name}
              </option>
            );
          })}
        </select>
      </div>
    </form>
  );
}
