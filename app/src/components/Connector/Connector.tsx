import classNames from "classnames";
import { NavLink } from "react-router-dom";
import "./Connector.css";
// import { useState } from "react";

function Connector({
  readStatus,
  chatId,
}: {
  readStatus: boolean;
  chatId: string;
}) {
  return (
    <NavLink
      to={chatId}
      className={({ isActive, isPending }) =>
        isActive ? "active" : isPending ? "pending" : ""
      }
    >
      <div className="flex justify-between items-center connector  px-6 py-3 ">
        <div className="flex gap-4 items-center">
          <div className="w-14 h-14 rounded-full bg-gray-200"></div>
          <div>
            <p className="font-bold">Anirut Chaogla</p>
            <p
              className={classNames({
                "text-gray-700": true,
                "text-sm": true,
                "font-bold": readStatus,
              })}
            >
              Anirut: Hello
            </p>
          </div>
        </div>
        {readStatus ? (
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
        ) : (
          ""
        )}
      </div>
    </NavLink>
  );
}

export default Connector;
