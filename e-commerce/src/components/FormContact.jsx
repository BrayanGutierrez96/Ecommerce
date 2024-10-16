import React from "react";
import { Link } from "react-router-dom";
function FormContact() {
  return (
    <div className="w-[60%] mx-2 py-2 shadow-[1px_-1px_10px_1px_rgba(0,0,0,0.1)] flex flex-col justify-center gap-1 rounded">
      <div className="flex flex-row justify-center gap-5 py-8 ">
        <input
          className="bg-[#F5F5F5] p-3 w-72 rounded-md"
          type="text"
          placeholder="Your Name *"
        />
        <input
          className="bg-[#F5F5F5]  p-3 w-72 rounded-md"
          type="email"
          placeholder="Your Email *"
        />
        <input
          className="bg-[#F5F5F5]  p-3 w-72 rounded-md"
          type="number"
          placeholder="Your Phone *"
        />
      </div>
      <div className="flex justify-center">
        <textarea
          className="bg-[#F5F5F5] h-48 w-[91%] p-3 text-left resize-none rounded-md"
          placeholder="Your Massage"
        ></textarea>
        {/* <input
          className="bg-[#F5F5F5] h-32 w-[91%] text-left resize-none"
          type="text"
          placeholder="Your Massage"
        /> */}
      </div>
      <div className="py-8 flex justify-end ">
        <Link className="bg-red-600 mx-12 py-4 px-20 text-white rounded-lg hover:bg-red-700">
          Send Massage
        </Link>
      </div>
    </div>
  );
}

export default FormContact;
