import { useLoaderData } from "react-router";
import Connector from "./Connector";
import { ChatContact } from "../../models/chat-contact";

function ConnectorList() {
    const connectors = useLoaderData() as ChatContact[];

    return (
        <ul className="flex flex-col">
            {connectors.map((connector) => (
                <li key={connector.chatID}>
                    <Connector data={connector} />
                </li>
            ))}
        </ul>
    );
}

export default ConnectorList;
