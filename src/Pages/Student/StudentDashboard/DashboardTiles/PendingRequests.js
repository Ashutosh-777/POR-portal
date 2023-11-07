import React from "react";
import { Link } from "react-router-dom";

function PendingRequests() {
  const PendingRequests = [
    {
      id: 1,
      POR: "POR: Design Head E-Cell",
      description: "Waiting for approval from General Secretary E-Cell",
      status: "Pending",
      Date: "18/12/22",
    },
    {
      id: 2,
      POR: "POR: Design Head E-Cell",
      description:
        "Your Request has been Forwaded to Sahil Nizam By General Secretary of E-Cell for Confirmation",
      status: "Pending",
      Date: "18/12/22",
    },
  ];
  return (
    <div className=" col-span-4 p-7 flex flex-col justify-between pb-4  bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
      <div>
        {" "}
        <div className="flex gap-2 items-center">
          <img src="/requests-pending.svg" />
          <div className=" text-base">Pending Requests</div>
        </div>
        <div className="mt-2 flex flex-col gap-2">
          {PendingRequests.map((item) => (
            <div
              key={item.id}
              className="p-2 flex justify-center shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]"
            >
              <div className="w-11/12 text-sm">
                {item.POR}, {item.description}
              </div>
              <div className=" items-center  flex flex-col gap-4 ">
                <div className="text-[0.60rem] text-[#494D57] ">
                  {item.status}
                </div>
                <div className="text-[0.60rem] text-[#494D57] ">
                  {item.Date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link
        to="/StudentDashboard/RequestsForward"
        className="text-[#2164E8] text-sm flex justify-end "
      >
        View all Pending Forwards
      </Link>
    </div>
  );
}

export default PendingRequests;
