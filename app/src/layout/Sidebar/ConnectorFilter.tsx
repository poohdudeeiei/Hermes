function ConnectorFilter() {
    return (
        <div className="flex gap-3">
            <button className="px-4 py-2 rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
                All
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-semibold">
                Connector
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-semibold">
                Group
            </button>
        </div>
    );
}

export default ConnectorFilter;
