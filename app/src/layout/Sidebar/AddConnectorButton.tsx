function AddConnectorButton() {
    return (
        <button className="flex items-center p-3 rounded-full hover:bg-gray-100">
            <svg
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                className="w-8 h-8"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M9 12H12M15 12H12M12 12V9M12 12V15"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
}

export default AddConnectorButton;