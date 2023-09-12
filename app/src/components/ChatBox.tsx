function ChatBox() {
  return (
    <div className="flex items-end relative h-full">
      <div className="flex grow flex-col gap-4 overflow-y-auto p-4 max-h-full">
        <div className="self-start flex gap-2 me-20">
          <div className="w-10 h-10 bg-indigo-500 rounded-full grow-0 shrink-0"></div>
          <div className="bg-gray-200 px-4 py-2 rounded-lg">Hello too.</div>
        </div>
        <div className="self-end flex gap-2 ms-20">
          <div className="bg-gray-200 px-4 py-2 rounded-lg">Hello</div>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
