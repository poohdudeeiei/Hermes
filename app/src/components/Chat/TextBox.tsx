import { useState } from "react";

function TextBox() {

    const [message, setMessage] = useState('')

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        // alert(`The name you entered was: ${message}`)
        setMessage('')

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="border-t h-16 px-6 py-3 flex justify-center items-center gap-2">

                <textarea
                    className="block w-full border rounded-full grow px-4 py-2 resize-none"
                    placeholder="Aa"
                    rows={1}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button className="px-4 py-2 text-sky-500 rounded-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                    >
                        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                    </svg>
                </button>

            </div>
        </form>
    );
}

export default TextBox;
