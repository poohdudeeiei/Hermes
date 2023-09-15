function ConnectorFilter() {
    return (
        <div className="flex gap-3">
            <button className="px-4 py-2 rounded-full  text-sm font-semibold hover:bg-gray-50 bg-blue-100 text-blue-600">
                All
            </button>
            <button className="px-4 py-2 rounded-full  text-sm font-semibold hover:bg-gray-50">
                Private
            </button>
            <button className="px-4 py-2 rounded-full  text-sm font-semibold hover:bg-gray-50">
                Group
            </button>
        </div>
    );
}

export default ConnectorFilter;
