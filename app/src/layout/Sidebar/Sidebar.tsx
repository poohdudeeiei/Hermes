import { useState } from "react";
import Brand from "../../components/Util/Brand";
import ConnectorList from "../../components/Connector/ConnectorList";
import SearchBar from "../../components/Util/Searchbar";
import ConnectorFilter from "./ConnectorFilter";
import MainSettings from "./MainSettings";
import OwnerPanel from "./OwnerPanel";
import AddConnector from "./AddConnector/AddConnector";

function Sidebar() {
    const [isMainSettingsOpen, setIsMainSettingsOpen] = useState(false);

    const openMainSettings = () => {
        setIsMainSettingsOpen(!isMainSettingsOpen);
    };
    const closeMainSettings = () => {
        setIsMainSettingsOpen(!isMainSettingsOpen);
    };

    return (
        <div className="grow-0 shrink-0 w-96 h-screen border-r relative">
            <div>
                <div className="flex items-center justify-between px-6 py-3">
                    <Brand />
                    <AddConnector />
                </div>
                <div className="px-6 py-3">
                    <div className="mb-3">
                        <SearchBar />
                    </div>
                    <ConnectorFilter />
                </div>
                <div
                    className="overflow-y-auto"
                    style={{ height: "calc( 100vh - 256px )" }}
                >
                    <ConnectorList />
                </div>
            </div>
            <MainSettings openStatus={isMainSettingsOpen} emitCloseEvent={closeMainSettings} />
            <OwnerPanel emitOpenEvent={openMainSettings} />
        </div>
    );
}

export default Sidebar;