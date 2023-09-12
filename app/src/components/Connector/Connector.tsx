import classNames from "classnames";
import { NavLink } from "react-router-dom";
import './Connector.css'
// import { useState } from "react";

function Connector({ readStatus, chatId }: { readStatus: boolean,chatId: string  }) {
  //   const [isRead, setIsRead] = useState(false);

  //   const handleRead = (isRead: boolean) => {
  //     setIsRead(isRead)
  //   }

  return (
    <NavLink
      to={chatId}
      className={({ isActive, isPending }) =>
        isActive ? "active" : isPending ? "pending" : ""
      }
    >
      <div className="flex gap-4 items-center px-6 py-3 connector">
        <div className="w-14 h-14 rounded-full bg-amber-500"></div>
        <div>
          <p
            className={classNames({
              "font-bold": true,
              "font-semibold": readStatus,
            })}
          >
            Anirut Chaogla
          </p>
          <p className="text-sm">Anirut: Hello</p>
        </div>
      </div>
    </NavLink>
  );
}

export default Connector;
