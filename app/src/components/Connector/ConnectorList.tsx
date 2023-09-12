import Connector from "./Connector";

function ConnectorList() {
  return (
    <ul className="flex flex-col">
      <li>
        <Connector chatId="1" readStatus={true} />
      </li>
      <li>
        <Connector chatId="2" readStatus={false} />
      </li>
    </ul>
  );
}

export default ConnectorList;
