import React from "react";
function References() {
  return (
    <div className="w-[22%] mx-2 shadow-[1px_-1px_10px_1px_rgba(0,0,0,0.1)] flex flex-col justify-center rounded">
      <div className="flex flex-col gap-3 m-7 ">
        <div className="flex flex-row h-9 gap-3 items-center">
          <img
            className="h-full"
            src="icons-phone.png"
            alt="icon phone"
          />
          <h3>
            <strong className="text-xl">Call To Us</strong>{" "}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg">We are available 24/7,7 days a week</p>
          <p className="text-lg">Phone: +8801611112222</p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="h-px w-[85%] bg-black flex"></div>
      </div>
      <div className="flex flex-col gap-3 m-7">
        <div className="flex flex-row h-9 gap-3 items-center">
          <img
            className="h-full"
            src="icons-mail.png"
            alt="icon mail"
          />
          <h3>
            <strong className="text-xl">Write To US</strong>
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="text-lg">Emails: customer@exclusive.com</p>
          <p className="text-lg">Emails: support@exclusive.com</p>
        </div>
      </div>
    </div>
  );
}

export default References;
