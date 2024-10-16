function Service() {
  return (
    <>
      <div className="my-11 flex justify-center">
        <div className="flex flex-row gap-32">
          <div className="flex flex-col items-center content-center gap-1">
            <div className="m-3 bg-black w-[70px] h-[70px] rounded-full flex justify-center items-center border-[11px] border-neutral-300">
              <img
                className="h-[70%] w-[70%]"
                src="../../public/icon-delivery.png"
                alt=""
              />
            </div>
            <div>
              <strong className="text-lg">FREE AND FAST DELIVERY</strong>
            </div>
            <div className="text-sm">
              Free delivery for all orders over $140
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="m-3 bg-black w-[70px] h-[70px] rounded-full flex justify-center items-center border-[11px] border-neutral-300">
              <img
                className="h-[70%] w-[70%]"
                src="../../public/icon-service.png"
                alt=""
              />
            </div>
            <div>
              <strong className="text-lg">24/7 CUSTOMER SERVICE</strong>
            </div>
            <div className="text-sm">Friendly 24/7 customer support</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="m-3 bg-black w-[70px] h-[70px] rounded-full flex justify-center items-center border-[11px] border-neutral-300">
              <img
                className="h-[70%] w-[70%]"
                src="../../public/icon-secure .png"
                alt=""
              />
            </div>
            <div>
              <strong className="text-lg">MONEY BACK GUARANTEE</strong>
            </div>
            <div className="text-sm">We reurn money within 30 days</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
